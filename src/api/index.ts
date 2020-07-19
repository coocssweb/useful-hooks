import Base from './base';

class Index extends Base {
    constructor () {
        super('');
    }

    fetch () : Promise<{ meta: any, response: any }> {
        return this.request({ 
            path: '/services/demos', 
            data: {}, 
            needDelay: true 
        });
    }
}

export default new Index();
