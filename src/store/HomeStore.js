import {action, observable, computed, toJS} from "mobx";

class HomeStore {
    @observable name = "cem";
    @observable list = [];

    @computed get getName() {
        return this.name;
    }

    @action setName(name) {
        this.name = name;
    }

    @computed get getList() {
        return this.list;
    }

    @action addList(obj) {
        this.list.push(obj);
    }

    @action editRow(obj) {

        this.list.map(x=> {
            if(obj.id === x.id) {
                x.firstName = obj.firstName;
                x.lastName = obj.lastName;
                x.age = obj.age;
                x.title= obj.title;
                return x;
            }
        });
    }

    @action getListById(id) {
       return this.list.find(x=>x.id == id);
    }

    @action removeList(id) {
      let index =   this.list.findIndex(x=> x.id == id);
      this.list.splice(index,1);
    }
}

const homeStore = new HomeStore();
export default homeStore;
