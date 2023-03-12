import {
  ChangeEventHandler,
  memo,
  useDeferredValue,
  useMemo,
  useState,
} from 'react';

export default function DeferredValue() {
  const [query, setQuery] = useState('');
  const defferedQuery = useDeferredValue(query);
  const onChangeQuery: ChangeEventHandler<HTMLInputElement> = (event) => {
    setQuery(event.target.value);
  };
  return (
    <div>
      <input value={query} onChange={onChangeQuery} type="text" />
      <div>query: {query}</div>
      <div>deffered query: {defferedQuery}</div>
      <LaggyLists query={defferedQuery} />
    </div>
  );
}

const LaggyLists = memo(
  ({ query }: { query: string }) => {
    const items = useMemo(
      () => Array.from(Array(10000), () => Math.random()),
      [query],
    );
    return (
      <ul>
        <li>{query}</li>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  },
  (prev, next) => prev.query === next.query,
);

LaggyLists.displayName = 'LaggyLists';
