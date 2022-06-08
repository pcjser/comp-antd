import * as React from 'react';
import { AutoTableInstance, InternalHooks } from './interface';

export class AutoTableStore {
  constructor(forceRootUpdate: () => void) {
    this.forceRootUpdate = forceRootUpdate;
  }

  // initialValues = {};
  refresh = false;
  tableList = []; // 表格数据
  condition = {}; // 查询条件
  pagination = null; // 分页信息
  showModal = false; //
  record = null;

  forceRootUpdate: () => void;

  setCondition = (data) => {
    this.condition = data;
    this.forceRootUpdate();
    // console.log(this.condition);
  };

  // setInitialValues = (data) => {
  //   this.initialValues = data;
  //   this.condition = { ...this.condition, ...this.initialValues };
  // };

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

  setTableList = (data) => {
    this.tableList = data;
    this.forceRootUpdate();
  };

  getTableList = () => {
    return this.tableList;
  };

  getModalStatus = () => this.showModal;

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

  getRecord = () => this.record;

  getInternalHooks: InternalHooks = () => {
    // console.log(77777);
    // if (key === HOOK_MARK) {
    //   this.formHooked = true;

    return {
      // dispatch: this.dispatch,
      // initEntityValue: this.initEntityValue,
      // registerField: this.registerField,
      // useSubscribe: this.useSubscribe,
      // setInitialValues: this.setInitialValues,
      // setCallbacks: this.setCallbacks,
      // setValidateMessages: this.setValidateMessages,
      // getFields: this.getFields,
      // setPreserve: this.setPreserve,
      refresh: this.refresh,
      condition: this.condition,
      setCondition: this.setCondition,
      // setInitialValues: this.setInitialValues,
      record: this.record,
      showModal: this.showModal,
      handleRetrieve: this.handleRetrieve,
      getTableList: this.getTableList,
      setTableList: this.setTableList,
      getModalStatus: this.getModalStatus,
      setModalStatus: this.setModalStatus,
    };
    // }

    // warning(false, '`getInternalHooks` is internal usage. Should not call directly.');
    // return null;
  };
}

function useAutoTable<Values = any>(
  table?: AutoTableInstance<Values>,
): [AutoTableInstance<Values>] {
  // console.log(6666);

  // console.log(table, '----------------------')

  const autoTableRef = React.useRef<AutoTableInstance>();
  const [, forceUpdate] = React.useState({});

  console.log('====================update===============================');

  if (!autoTableRef.current) {
    if (table) {
      autoTableRef.current = table;
    } else {
      const forceReRender = () => {
        console.log('------------------------------');
        forceUpdate({});
      };

      const autoTableStore: AutoTableStore = new AutoTableStore(forceReRender);

      autoTableRef.current = autoTableStore.getAutoTableInstance();
    }
  }

  return [autoTableRef.current];
}

export default useAutoTable;
