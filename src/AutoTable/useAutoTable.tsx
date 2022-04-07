import * as React from 'react';
import { Store } from '../util/types';
import { AutoTableInstance, InternalHooks } from './interface';
import { setValues } from '../util/value';

export class AutoTableStore {
  private forceRootUpdate: () => void;

  private store: Store = {};

  private dataSource: Store = {};

  constructor(forceRootUpdate: () => void) {
    this.forceRootUpdate = forceRootUpdate;
  }

  public getAutoTable = (): AutoTableInstance => ({
    initialTable: this.initialTable,
    // getDataSource: this.getAutoTable,
    getInternalHooks: this.getInternalHooks,
  });

  private setDataSource = async () => {
    console.log('setDataSource');
    const data = await Promise.resolve([
      {
        id: 1,
        name: '10',
      },
    ]);
    this.dataSource = data;
    console.log(this.dataSource);
  };

  public initialTable = () => {
    console.log('initialTable');
    // this.store = await this.getData();
    // console.log(this.store);
    this.setDataSource();
  };

  public getDataSource = () => {
    return this.dataSource;
  };

  private getInternalHooks: InternalHooks = () => {
    console.log(77777);
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
      // getInitialValue: this.getInitialValue,
      // initialTable: this.initialTable,
      getDataSource: this.getDataSource,
      setDataSource: this.setDataSource,
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

  if (!autoTableRef.current) {
    if (table) {
      autoTableRef.current = table;
    } else {
      const forceReRender = () => {
        forceUpdate({});
      };

      const autoTableStore: AutoTableStore = new AutoTableStore(forceReRender);

      autoTableRef.current = autoTableStore.getAutoTable();
    }
  }

  return [autoTableRef.current];
}

export default useAutoTable;
