import * as React from 'react';

export interface AutoTableInstance {
  initialTable: () => void;
}

export default function useTable(table?: AutoTableInstance): [AutoTableInstance] {
  const wrapTable: AutoTableInstance = React.useMemo(
    () =>
      table ?? {
        initialTable: () => {
          console.log('initialTable');
        },
      },
    [],
  );

  return [wrapTable];
}
