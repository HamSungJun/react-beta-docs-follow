# [React-Beta-Doc-Follow](https://beta.reactjs.org/)

-

## TIL

- [Reference > Components](https://beta.reactjs.org/reference/react/components)

  - Fragment
    - 부모 컴포넌트가 없는 여러 컴포넌트를 렌더링 하고 싶은 경우
    - 여러 컴포넌트를 한 변수에 저장하고 싶은 경우
  - Profiler
    - Chrome Dev Tools > React Profiler 를 프로그래밍 방식으로 사용할 수 있는 컴포넌트
  - StrictMode
  - Suspense
    - Lazy Module 임포트를 진행하는 동안 Fallback UI를 표시하는 경우
    - 여러개의 Suspense-Enabled 컴포넌트를 각각 로드 완료되는 시점에 렌더링 하는 대신 모두 로드되었을 때 한번에 표시하고 싶은 경우
    - SSR 단계에서 Streaming 을 구현하기 위해 사용 (Lazy Module, Suspense-Enabled Data Fetching)

- [Reference > Hooks](https://beta.reactjs.org/reference/react)
  - useCallback
    - 컴포넌트 리렌더링 마다 새로운 함수 대신 캐시된 함수 선언을 재사용하기를 원하는 경우
      - 렌더링 하는 자식 컴포넌트가 `memo` 최적화가 되어 있는 상태에서 `arePropsEqual` 의 인자가 부모 컴포넌트에서 전달하는 함수인 경우에 성능 최적화를 노려볼 수 있다.
    - 대부분의 경우에는 함수 선언을 캐싱할 필요가 없으며 오히려 소스 코드의 가독성을 저해한다.
    - 커스텀 훅을 작성하는 경우 내부에 작성하는 함수 선언의 경우에는 캐싱을 적용하는 것이 최적화에 도움이 될 수 있다. 커스텀 훅을 호출하는 다양한 컴포넌트가 캐시된 함수를 사용할 것이기 때문이다.
