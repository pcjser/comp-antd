import { ColumnType } from 'antd/es/table/interface';
import * as React from 'react';

interface Pagination {
  current?: number;
  pageSize?: number;
  total?: number;
}

interface Condition {
  name: string;
  label: string;
  icol: number;
  component: React.ReactNode;
}

export interface InternalHooks {
  refresh: boolean;
  condition: object;
  pagination: Pagination;
  record: object;
  showModal: boolean;
  setCondition: (condition: object) => void;
  setPagination: (pagination: Pagination) => void;
  handleRetrieve: () => void;
  setModalStatus: () => void;
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

export interface TablePanelProps {
  columns: ColumnType<object>;
  dataSource: (condition: object) => Promise<{
    pagination?: Pagination;
    data: object[];
  }>;
  serial?: boolean;
  actions?: object[];
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
