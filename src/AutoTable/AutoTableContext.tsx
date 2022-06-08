import * as React from 'react';
// import { AutoTableInstance } from './interface';

export interface AutoTableContextProps {
  // registerAutoTable: (name: string, table: AutoTableInstance) => void;
  // unregisterAutoTable: (name: string) => void;
}

const AutoTableContext = React.createContext<AutoTableContextProps>({
  // registerAutoTable: () => {},
  // unregisterAutoTable: () => {},
});

export default AutoTableContext;
