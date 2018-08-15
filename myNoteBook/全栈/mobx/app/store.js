import {observable, computed} from 'mobx';

class Store {
    @observable name= 'jomsou';
    @computed get decorated(){
        return `${this.name} is awsome!`;
    }
}

export default Store;