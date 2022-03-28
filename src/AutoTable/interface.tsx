import { ReactNode } from 'react';
import { TableProps } from 'antd/es/table';
import { AutoTableInstance } from './hooks/useTable';

export interface AutoTableProps {
  table?: AutoTableInstance;
  // rowKey?: string;
  children?: ReactNode;
  // tableFetch?: (search: object) => Promise<Array<object>>;
  // tableFetchAfter?: (result: Array<object>) => Array<object>;
}

export interface TablePanelProps
  extends Omit<TableProps<Record<string, any>>, 'pagination' | 'dataSource'> {
  dataSource: Promise<Array<object>>;
  serial?: boolean;
  actions?: Array<object>;
}

export interface SearchPanelProps {
  conditions: Array<{ name: string; label: string; icol?: number; component: ReactNode }>;
  col?: number;
}
