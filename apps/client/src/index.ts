import { Hono } from 'hono'
import { hc } from 'hono/client'
import type { AppType } from 'server'

const app = new Hono()

const client = hc<AppType>('http://localhost:3000')
/**
const client: {
    index: ClientRequest<{
        $get: {
            input: {};
            output: {
                message: string;
            };
        };
    }>;
} & {
    hello: {
        ":name": ClientRequest<{
            $get: {
                input: {
                    param: {
                        name: string;
                    };
                };
                output: {
                    message: string;
                };
            };
        }>;
    };
}
 */

app.get('/', (c) => c.text('Hello Hono!'))

export default app
