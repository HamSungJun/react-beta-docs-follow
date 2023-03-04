import { Suspense, lazy } from 'react';

const LazyModule1 = lazy(async () => {
  await delay(2);
  return import('@/common/components/Comp01');
});

const LazyModule2 = lazy(async () => {
  await delay(4);
  return import('@/common/components/Comp02');
});

const LazyModule3 = lazy(async () => {
  await delay(6);
  return import('@/common/components/Comp03');
});

const LazyModule4 = lazy(async () => {
  await delay(8);
  return import('@/common/components/Comp04');
});

const LazyModule5 = lazy(async () => {
  await delay(10);
  return import('@/common/components/Comp05');
});

export default function Home() {
  return (
    <div>
      <div>
        <Suspense fallback={<h1>Loading Lazy Module - Comp01</h1>}>
          <LazyModule1 />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<h1>Loading Lazy Module - Comp02</h1>}>
          <LazyModule2 />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<h1>Loading Lazy Module - Comp03</h1>}>
          <LazyModule3 />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<h1>Loading Lazy Module - Comp04</h1>}>
          <LazyModule4 />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<h1>Loading Lazy Module - Comp05</h1>}>
          <LazyModule5 />
        </Suspense>
      </div>
    </div>
  );
}

async function delay(t: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
}
