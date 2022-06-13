import { Action, AutoTableInstance, InternalHooks, Pagination } from './interface';

export class Store {
  constructor(forceRootUpdate: () => void) {
    this.forceRootUpdate = forceRootUpdate;
  }

  // initialValues = {};
  // tableList = []; // 表格数据

  forceRootUpdate: () => void;

  refreshTable = () => {
    this.setCondition({ ...this.condition });
    this.forceRootUpdate();
  };

  getAutoTableInstance = (): AutoTableInstance => ({
    getInternalHooks: this.getInternalHooks,
    refreshTable: this.refreshTable,
  });

  getInternalHooks = (): InternalHooks => ({
    unique: this.unique,
    condition: this.condition,
    pagination: this.pagination,
    record: this.record,
    action: this.action,
    setUnique: this.setUnique,
    setCondition: this.setCondition,
    setPagination: this.setPagination,
    openAction: this.openAction,
    closeAction: this.closeAction,
    refreshTable: this.refreshTable,
  });

  // ConditionPanel
  condition = {};
  setCondition = (data: Record<string, any>) => {
    this.condition = { ...this.condition, ...data };
    this.forceRootUpdate();
  };

  // TablePanel
  unique: string = '';
  record: Record<string, any> | null = null;
  action: Action | null = null;
  setUnique = (unique: string) => (this.unique = unique);

  openAction = (action: Action | null, record: Record<string, any> | null) => {
    this.record = record;
    console.log(action);
    this.action = action;
    this.forceRootUpdate();
  };

  closeAction = () => {
    this.record = null;
    this.action = null;
    this.forceRootUpdate();
  };

  // Pagination
  pagination = {}; // 分页信息
  setPagination = (data: Pagination) => {
    this.pagination = { ...this.pagination, ...data };
    this.forceRootUpdate();
  };

  // ModalPanel
}

export default Store;
