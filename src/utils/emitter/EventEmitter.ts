/*
 * @Author: wangjiaxin
 * @Date: 2021-01-20 14:16:37
 * @Description: xxxxxxxxxxxxxxxx
 *
 */
import EventSubscription from './EventSubscription';
import EmitterSubscriptionVendor from './EmitterSubscriptionVendor';

class EventEmitter {
  subscriber: any;
  currentSubscription: any;

  constructor() {
    this.subscriber = new EmitterSubscriptionVendor();
    this.currentSubscription = null;
  }

  addListener(eventType: String, listener: Function, context: Object) {
    return this.subscriber.addListener(eventType, new EventSubscription(this.subscriber, listener, context));
  }

  once(eventType: String, listener: Function, context: any) {
    const emitter = this;
    return this.subscriber.addListener(eventType, function() {
      emitter.removeCurrentListener();
      listener.apply(context, arguments);
    });
  }

  removeAllListener(eventType: String) {
    this.subscriber.removeAllListener(eventType);
  }

  removeCurrentListener() {
    this.subscriber.removeSubscription(this.currentSubscription);
  }

  emit(eventType: String) {
    const subscriptions = this.subscriber.getSubscriptionForType(eventType);
    if (subscriptions) {
      subscriptions.forEach(subscriptionItem => {
        this.currentSubscription;
      });
    }
  }
}

export default EventEmitter;
