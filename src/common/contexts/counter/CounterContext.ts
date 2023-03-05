import { createContext } from 'react';

interface ICounterDispatchContext {
  updateCount: (diff: number) => void;
}

export const CounterStateContext = createContext<number>(0);
export const CounterDispatchContext = createContext<ICounterDispatchContext>({
  updateCount() {
    return;
  },
});
