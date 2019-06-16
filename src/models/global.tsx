import { observable, action } from 'mobx';

class GlobalStore {
  @observable
  public siderStatus: boolean = false;

  @action
  public toggleSiderStatus: VoidFunction = () => {
    this.siderStatus != this.siderStatus;
  }
};

export default new GlobalStore();
