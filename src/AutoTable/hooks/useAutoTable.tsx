import * as React from 'react';
import { AutoTableInstance } from './interface';
import Store from './store';

const useAutoTable = (table?: AutoTableInstance): [AutoTableInstance] => {
  const autoTableRef = React.useRef<AutoTableInstance>();
  const [, forceUpdate] = React.useState({});

  // console.log('====================update===============================');

  if (!autoTableRef.current) {
    if (table) {
      autoTableRef.current = table;
    } else {
      const forceReRender = () => {
        // console.log('------------------------------');
        forceUpdate({});
      };

      const autoTableStore = new Store(forceReRender);

      autoTableRef.current = autoTableStore.getAutoTableInstance();
    }
  }

  return [autoTableRef.current];
};

export default useAutoTable;
