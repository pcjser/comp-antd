import { TableProps } from 'antd';
import { ColumnsType } from 'antd/lib/table';

export interface AutoTableProps {
  rowKey?: string;
  children?: Array<React.ReactChild> | React.ReactChild;
  tableFetch?: (search: object) => Promise<Array<object>>;
  tableFetchAfter?: (result: Array<object>) => Array<object>;
}

export interface TablePanelProps extends Omit<TableProps<Record<string, any>>, 'pagination'> {
  serial?: boolean;
  // columns?: ColumnsType<Record<string, any>>;
  actions?: Array<object>;
  rowKey?: string;
}
