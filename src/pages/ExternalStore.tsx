import { useSyncExternalStore } from 'react';

let clientTodos = [1, 2, 3];
const serverTodos = [4, 5, 6];
let listeners = [] as any[];

const todoStore = {
  getClientTodos() {
    return clientTodos;
  },
  getServerTodos() {
    return serverTodos;
  },
  addTodo() {
    clientTodos = [...clientTodos, 4];
    todoStore.notifyChange();
  },
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  notifyChange() {
    for (const listener of listeners) {
      listener();
    }
  },
};

export default function ExternalStore() {
  const todos = useSyncExternalStore(
    todoStore.subscribe,
    todoStore.getClientTodos,
    todoStore.getServerTodos,
  );

  const onPush = () => {
    todoStore.addTodo();
  };

  console.log({ todos });
  return (
    <div>
      <div> {JSON.stringify(todos)}</div>
      <div>
        <button onClick={onPush}>PUSH</button>
      </div>
    </div>
  );
}
