import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
      let htmlTemplate = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8',
      );
      htmlTemplate = await vite.transformIndexHtml(url, htmlTemplate);
      const { render } = await vite.ssrLoadModule('/src/entry.server.tsx');
      const serverRenderedHtmlChunk = await render(url);
      const resultHtml = htmlTemplate.replace(
        '<!--ssr-outlet-->',
        serverRenderedHtmlChunk,
      );
      res.status(200).set({ 'Content-Type': 'text/html' }).end(resultHtml);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
  app.listen(5173);
}

createServer();
