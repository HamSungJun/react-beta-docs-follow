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
