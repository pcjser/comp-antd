import * as React from 'react';
import { Store } from '../util/types';
import { AutoTableInstance, InternalHooks } from './interface';
import { setValues } from '../util/value';

export class AutoTableStore {
  // private store: Store = {};

  // private dataSource = [
  //   {
  //     id: 1,
  //     name: '测试',
  //   },
  // ];

  constructor(forceRootUpdate: () => void) {
    this.forceRootUpdate = forceRootUpdate;
  }

  private tableList = [];
  private showModal = false;
  private record = null;

  private forceRootUpdate: () => void;

  public getAutoTableInstance = (): AutoTableInstance => ({
    getInternalHooks: this.getInternalHooks,
  });

  public setTableList = (data) => {
    this.tableList = data;
    this.forceRootUpdate();
  };

  public getTableList = () => {
    return this.tableList;
  };

  public getModalStatus = () => this.showModal;

  public setModalStatus = (tag) => {
    this.showModal = tag;
    this.forceRootUpdate();
  };

  public handleRetrieve = (record) => {
    console.log(record);
    this.record = record;
    this.showModal = true;
    // this.forceRootUpdate();
  };

  public getRecord = () => this.record;

  private getInternalHooks: InternalHooks = () => {
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

  const autoTableRef = React.useRef<AutoTableInstance>();
  const [, forceUpdate] = React.useState({});

  console.log('update');

  if (!autoTableRef.current) {
    if (table) {
      autoTableRef.current = table;
    } else {
      const forceReRender = () => {
        forceUpdate({});
      };

      const autoTableStore: AutoTableStore = new AutoTableStore(forceReRender);

      autoTableRef.current = autoTableStore.getAutoTableInstance();
    }
  }

  return [autoTableRef.current];
}

export default useAutoTable;
