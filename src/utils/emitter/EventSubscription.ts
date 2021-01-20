/*
 * @Author: wangjiaxin
 * @Date: 2021-01-20 14:16:41
 * @Description: xxxxxxxxxxxxxxxx
 *
 */

class EventSubscription {
  subscriber: any;
  listener: any;
  context: any;

  constructor(subscriber: any, listener, context) {
    this.subscriber = subscriber;
    this.listener = listener;
    this.context = context;
  }

  /**
   * 移除自身订阅
   */
  remove(): void {
    if (this.subscriber) {
      this.subscriber.removeSubscription(this);
      this.subscriber = null;
    }
  }
}

export default EventSubscription;
