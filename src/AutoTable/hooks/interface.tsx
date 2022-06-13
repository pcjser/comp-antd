import { FormInstance } from 'antd/es/form/Form';
import { ColumnType } from 'antd/es/table/interface';
import * as React from 'react';

interface Condition {
  name: string;
  label: string;
  icol: number;
  component: React.ReactNode;
}

export type ActionType = 'create' | 'retrieve' | 'update' | 'delete' | 'extend';

export interface Action {
  action: ActionType;
  label?: React.ReactNode;
  title?: string;
  dataSource?: (key: string) => Promise<Record<string, any>>;
  extendAction?: (record: Record<string, any> | null, condition: Record<string, any>) => void;
}

export interface Pagination {
  current?: number;
  pageSize?: number;
  total?: number;
}

export interface InternalHooks {
  unique: string;
  condition: Record<string, any>;
  pagination: Pagination;
  record: Record<string, any> | null;
  action: Action | null;
  setUnique: (key: string) => void;
  setCondition: (condition: Record<string, any>) => void;
  setPagination: (pagination: Pagination) => void;
  openAction: (action: Action, record: Record<string, any> | null) => void;
  closeAction: () => void;
  refreshTable: () => void;
}

export interface AutoTableInstance {
  getInternalHooks: () => InternalHooks;
  refreshTable?: () => void;
}

export interface AutoTableProps {
  table?: AutoTableInstance;
  children?: React.ReactNode;
}

export interface ConditionPanelProps {
  conditions: Condition[];
  col?: number;
  initialCondition: Condition[];
  onSearch?: () => void;
  onReset?: () => void;
}

export interface OperationPanelProps {
  operations: Action[];
}

export interface TablePanelProps {
  columns: ColumnType<Record<string, any>>[];
  dataSource: (condition: Record<string, any>) => Promise<{
    pagination?: Pagination;
    data: Record<string, any>[];
  }>;
  serial?: boolean;
  actions?: Action[];
  unique: string;
}

export interface PaginationPanelProps {
  defaultCurrent?: number;
  defaultPageSize?: number;
  disabled: boolean;
  hideOnSinglePage: boolean;
  pageSizeOptions: string[];
  showSizeChanger: boolean;
  responsive: boolean;
  showQuickJumper: boolean;
  simple: boolean;
  size: 'default' | 'small';
  showTotal: (total: number, range: [number, number]) => React.ReactNode;
}

export interface ModalPanelProps {
  formItems: (form: FormInstance, action: Action, record: Record<string, any>) => React.ReactNode;
}
