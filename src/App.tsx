import { StrictMode } from 'react';
import Router from './Router';

interface IApp {
  url?: string;
}

export default function App({ url = '/' }: IApp) {
  // Diff
  return (
    <StrictMode>
      <html lang="ko">
        <head>
          <script
            type="module"
            dangerouslySetInnerHTML={{
              __html: `
            import { injectIntoGlobalHook } from "/@react-refresh";
            injectIntoGlobalHook(window);
            window.$RefreshReg$ = () => {};
            window.$RefreshSig$ = () => (type) => type;
          `,
            }}
          ></script>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Vite + React + TS</title>
          <link rel="stylesheet" href="/src/styles/index.css" />
          <script type="module" src="/src/entry.client.tsx"></script>
        </head>
        <body>
          <Router url={url} />
        </body>
      </html>
    </StrictMode>
  );
}
