import { AutoTableInstance, InternalHooks } from './interface';

export class Store {
  constructor(forceRootUpdate: () => void) {
    this.forceRootUpdate = forceRootUpdate;
  }

  // initialValues = {};
  refresh = false;
  // tableList = []; // 表格数据
  condition = {}; // 查询条件
  pagination = {}; // 分页信息
  showModal = false; //
  record = null;

  forceRootUpdate: () => void;

  setCondition = (data) => {
    this.condition = { ...this.condition, ...data };
    this.forceRootUpdate();
  };

  setPagination = (data) => {
    this.pagination = data;
    this.forceRootUpdate();
  };

  refreshTable = () => {
    console.log('刷新');
    this.setCondition({ ...this.condition });
    // this.refresh = !this.refresh;
    this.forceRootUpdate();
  };

  getAutoTableInstance = (): AutoTableInstance => ({
    getInternalHooks: this.getInternalHooks,
    refreshTable: this.refreshTable,
  });

  // setTableList = (data) => {
  //   this.tableList = data;
  //   this.forceRootUpdate();
  // };

  // getTableList = () => {
  //   return this.tableList;
  // };

  // getModalStatus = () => this.showModal;

  setModalStatus = (tag) => {
    this.showModal = tag;
    this.forceRootUpdate();
  };

  handleRetrieve = (record) => {
    console.log(record);
    this.record = record;
    this.showModal = true;
    // this.forceRootUpdate();
  };

  // getRecord = () => this.record;

  getInternalHooks: InternalHooks = () => ({
    refresh: this.refresh,
    condition: this.condition,
    setCondition: this.setCondition,
    setPagination: this.setPagination,
    pagination: this.pagination,
    record: this.record,
    showModal: this.showModal,
    handleRetrieve: this.handleRetrieve,
    setModalStatus: this.setModalStatus,
  });
}

export default Store;
