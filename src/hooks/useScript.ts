/*
 * @Author: wangjiaxin
 * @Date: 2020-05-07 13:52:07
 * @Description: This hook makes it super easy to dynamically load an external script and know when its loaded.
 */

import { useEffect, useState } from 'react';

const _cachedScripts: Array<string> = [];

function useScript(src: string) {
  // Keeping track of script loaded and error state
  const [state, setState] = useState({
    loaded: false,
    error: false,
  });

  useEffect(
    () => {
      // If cachedScripts array already includes src that means another instance ...
      // ... of this hook already loaded this script, so no need to load again.
      if (_cachedScripts.includes(src)) {
        setState({
          loaded: true,
          error: false,
        });
        return () => {};
      }
      _cachedScripts.push(src);

      // Create script
      const script = document.createElement('script');
      script.src = src;
      script.async = true;

      // Script event listener callbacks for load and error
      const onScriptLoaded = () => {
        setState({
          loaded: true,
          error: false,
        });
      };

      const onScriptError = () => {
        // Remove from cachedScripts we can try loading again
        const index = _cachedScripts.indexOf(src);
        if (index >= 0) _cachedScripts.splice(index, 1);
        script.remove();

        setState({
          loaded: true,
          error: true,
        });
      };

      script.addEventListener('load', onScriptLoaded);
      script.addEventListener('error', onScriptError);

      // Add script to document body
      document.body.appendChild(script);

      // Remove event listeners on cleanup
      return () => {
        script.removeEventListener('load', onScriptLoaded);
        script.removeEventListener('error', onScriptError);
      };
    },
    [src], // Only re-run effect if script src changes
  );

  return [state.loaded, state.error];
}

export default useScript;
