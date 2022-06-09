import * as React from 'react';
import { AutoTableInstance, InternalHooks } from './interface';

const AutoTableContext = React.createContext<AutoTableInstance>({
  getInternalHooks: () => ({} as InternalHooks),
});

export default AutoTableContext;
