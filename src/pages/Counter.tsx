import useCounter from '@/common/contexts/counter/useCounter';
import P1 from '@/counter/components/P1';
import P2 from '@/counter/components/P2';
export default function Counter() {
  const { count } = useCounter();
  return (
    <div>
      {count}
      <P1 />
      <P2 />
    </div>
  );
}
