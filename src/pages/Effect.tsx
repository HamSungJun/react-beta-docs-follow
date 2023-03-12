import { ChangeEventHandler, useEffect, useState } from 'react';

export default function Effect() {
  // 개발환경에서 StrictMode가 활성화 된 경우 useEffect 구문이 자동으로 한번 호출되고 정리되는 것을 염두.
  const [primitiveValue, setPrimitiveValue] = useState({ v: '', n: 0 });
  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPrimitiveValue((prev) => ({ ...prev, v: event.target.value }));
  };
  const onChangeNumber: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPrimitiveValue((prev) => ({ ...prev, n: Number(event.target.value) }));
  };
  useEffect(() => {
    if (import.meta.env.SSR) {
      console.log('Effect Call On Server');
    }
    if (!import.meta.env.SSR) {
      console.log('Effect Call On Client');
    }
    return () => {
      if (import.meta.env.SSR) {
        console.log('UnMounted On Server');
      }
      if (!import.meta.env.SSR) {
        console.log('UnMounted On Client');
      }
    };
  }, [primitiveValue]);
  return (
    <div>
      <input value={primitiveValue.v} type="text" onChange={onChangeInput} />
      <input value={primitiveValue.n} type="number" onChange={onChangeNumber} />
    </div>
  );
}
