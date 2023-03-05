import { useContext } from 'react';
import {
  CounterDispatchContext,
  CounterStateContext,
} from '@/common/contexts/counter/CounterContext';

export default function useCounter() {
  const count = useContext(CounterStateContext);
  const { updateCount } = useContext(CounterDispatchContext);
  return {
    count,
    updateCount,
  };
}
