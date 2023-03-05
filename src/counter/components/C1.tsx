import useCounter from '@/common/contexts/counter/useCounter';

export default function C1() {
  const { count, updateCount } = useCounter();
  console.log('C1');
  return (
    <div>
      {count}
      <button
        onClick={() => {
          updateCount(1);
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          updateCount(-1);
        }}
      >
        decrease
      </button>
    </div>
  );
}
