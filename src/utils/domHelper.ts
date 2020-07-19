/**
 * 获取滚动条宽度
 */
export const getScrollbarWidth = () => {
    let scrollBarWidth: number;
    return (() => {
        if (window.innerHeight >= document.body.offsetHeight) {
            return 0;
        }
    
        if (scrollBarWidth !== undefined) {
            return scrollBarWidth;
        }
        const outer = document.createElement('div');
        outer.className = 'coo-scrollbar__wrap';
        outer.style.visibility = 'hidden';
        outer.style.width = '100px';
        outer.style.position = 'absolute';
        outer.style.top = '-9999px';
        document.body.appendChild(outer);
    
        const widthNoScroll = outer.offsetWidth;
        outer.style.overflow = 'scroll';
    
        const inner = document.createElement('div');
        inner.style.width = '100%';
        outer.appendChild(inner);
    
        const widthWithScroll = inner.offsetWidth;
        outer.parentNode.removeChild(outer);
        scrollBarWidth = widthNoScroll - widthWithScroll;
        return scrollBarWidth;
    })();
};

/**
 * 窗口是否可以滚动
 * 不可滚动时，设置body padding-right，防止出现闪动
 * 可以滚动时，移除body padding-right
 */
export const windowScroll = (canScroll: boolean) => {
    if (canScroll) {
        document.getElementsByTagName('html')[0].style.overflow = 'auto';
        document.getElementsByTagName('html')[0].style.paddingRight = '0px';
    } else {
        document.getElementsByTagName('html')[0].style.overflow = 'hidden';
        document.getElementsByTagName('html')[0].style.paddingRight = `${getScrollbarWidth()}px`;
    }
};
