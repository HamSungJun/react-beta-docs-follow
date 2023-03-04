import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StaticRouter, StaticRouterProps } from 'react-router-dom/server';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));

interface IRouter {
  url?: string;
}

export default function Router({ url = '/' }: IRouter) {
  return import.meta.env.SSR ? (
    <ServerRouter location={url} />
  ) : (
    <ClientRouter />
  );
}

export const ServerRouter = ({ ...props }: StaticRouterProps) => (
  <StaticRouter {...props}>
    <Suspense fallback={<h1>Loading ...</h1>}>
      <AppRoutes />
    </Suspense>
  </StaticRouter>
);
export const ClientRouter = () => (
  <BrowserRouter>
    <Suspense fallback={<h1>Loading ...</h1>}>
      <AppRoutes />
    </Suspense>
  </BrowserRouter>
);

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact />} />
  </Routes>
);
