import C1 from '@/counter/components/C1';
import useCounter from '@/common/contexts/counter/useCounter';

export default function P1() {
  const { count } = useCounter();
  console.log('P1');
  return (
    <div>
      {count}
      <C1 />
    </div>
  );
}
