import express from 'express';

import { requireApiKey } from './middleware/auth';
import { teas } from './routes/teas';

const app = express();
app.use('/v1', requireApiKey);
app.use('/v1/teas', teas);

app.listen(process.env.PORT ?? 8080);
