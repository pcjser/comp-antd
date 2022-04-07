import * as React from 'react';
// import { TableProps } from 'antd/es/table';
// import { AutoTableInstance } from './hooks/useTable';

export interface InternalHooks {
  initialTable: () => void;
  setDataSource: () => void;
  getDataSource: () => Array<any>;
  // registerField: (entity: FieldEntity) => () => void;
  // useSubscribe: (subscribable: boolean) => void;
  // setInitialValues: (values: Store, init: boolean) => void;
  // setCallbacks: (callbacks: Callbacks) => void;
  // getFields: (namePathList?: InternalNamePath[]) => FieldData[];
  // setValidateMessages: (validateMessages: ValidateMessages) => void;
  // setPreserve: (preserve?: boolean) => void;
  // getInitialValue: (namePath: InternalNamePath) => StoreValue;
}

export interface AutoTableInstance<Values = any> {
  initialTable: () => void;
  getInternalHooks: () => InternalHooks;
  // getDataSource: () => Array<any>;
}

export interface AutoTableProps<Values = any> {
  table?: AutoTableInstance;
  // rowKey?: string;
  children?: React.ReactNode;
  // tableFetch?: (search: object) => Promise<Array<object>>;
  // tableFetchAfter?: (result: Array<object>) => Array<object>;
}

// export interface TablePanelProps
//   extends Omit<TableProps<Record<string, any>>, 'pagination' | 'dataSource'> {
//   dataSource: Promise<Array<object>>;
//   serial?: boolean;
//   actions?: Array<object>;
// }

// export interface SearchPanelProps {
//   conditions: Array<{ name: string; label: string; icol?: number; component: ReactNode }>;
//   col?: number;
// }
