/*
 * @Author: wangjiaxin
 * @Date: 2021-01-20 14:16:41
 * @Description: xxxxxxxxxxxxxxxx
 *
 */
class EmitterSubscriptionVendor {
  subscriptionsForType: Object;

  constructor() {
    this.subscriptionsForType = {};
  }

  /**
   * 添加订阅
   * @param {string} eventType
   * @param {Function} subscription
   * @return {Function}
   */
  addSubscription(eventType: string, subscription: any): any {
    if (this.subscriptionsForType[eventType] === undefined) {
      this.subscriptionsForType[eventType] = [];
    }
    const key = this.subscriptionsForType[eventType].length;
    this.subscriptionsForType[eventType].push(fn);
    // 挂载key和eventType, 移除具体订阅的时候可以用key 和 eventType定位订阅的内容
    subscription.key = key;
    subscription.eventType = eventType;
    return subscription;
  }

  /**
   * 移除订阅类型
   * @param {string} eventType
   */
  removeAllSubscription(eventType: string): void {
    if (eventType === undefined) {
      this.subscriptionsForType = {};
    } else {
      delete this.subscriptionsForType[eventType];
    }
  }

  /**
   * 移除具体的订阅
   * @param {Function} subscription
   */
  removeSubscription(subscription: any): void {
    const { eventType, key } = subscription;
    const subscriptionsForType = this.subscriptionsForType[eventType];
    if (subscriptionsForType) {
      delete subscriptionsForType[key];
    }
  }

  /**
   * 获取订阅
   * @param eventType
   */
  getSubscriptionForType(eventType: string) {
    return this.subscriptionsForType[eventType];
  }
}

export default EmitterSubscriptionVendor;
