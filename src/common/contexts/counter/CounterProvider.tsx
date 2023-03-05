import {
  CounterStateContext,
  CounterDispatchContext,
} from '@/common/contexts/counter/CounterContext';
import { PropsWithChildren, useMemo, useState } from 'react';

export default function CounterProvider({ children }: PropsWithChildren) {
  const [count, setCount] = useState(0);
  const counterDispatches = useMemo(
    () => ({
      updateCount(diff: number) {
        setCount((prevCount) => prevCount + diff);
      },
    }),
    [],
  );
  return (
    <CounterDispatchContext.Provider value={counterDispatches}>
      <CounterStateContext.Provider value={count}>
        {children}
      </CounterStateContext.Provider>
    </CounterDispatchContext.Provider>
  );
}
