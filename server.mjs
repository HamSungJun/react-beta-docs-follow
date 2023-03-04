import express from 'express';
import { createServer as createViteServer } from 'vite';

async function createServer() {
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(vite.middlewares);
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const { render } = await vite.ssrLoadModule('/src/entry.server.tsx');
      const { pipe } = render(url, {
        onShellReady() {
          res.setHeader('Content-Type', 'text/html');
          pipe(res);
        },
        onShellError(error) {
          console.error(error);
          res.statusCode = 500;
          res.setHeader('content-type', 'text/html');
          res.send('<h1>Something went wrong</h1>');
        },
        onError(error) {
          console.error(error);
        },
      });
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
  app.listen(5173);
}

createServer();
