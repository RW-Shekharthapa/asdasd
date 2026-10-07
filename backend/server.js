const express = require('express');
const app = express();
app.get('/api/health', (_q, r) => r.json({ status: 'ok' }));

const port = process.env.PORT || 8080;
app.listen(port, '0.0.0.0', () => console.log('API on :' + port));
