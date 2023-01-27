import { createServer, ServerResponse, IncomingMessage } from 'http';

import { host, port } from './config/server.config';
import { provideHeaders } from './providers/headers.provider'

function listener(
  req: IncomingMessage,
  res: ServerResponse<IncomingMessage>
): void {
  req.method === 'GET' ?
    provideHeaders(res)
      .end(JSON.stringify({ message: 'Hello world!' })) :
    provideHeaders(res)
      .end(JSON.stringify({ data: 'Post request' }))
}

const server = createServer(listener);

server.listen(port, host, () => {
  console.log(`Server listening on ${host}:${port}`);
})
