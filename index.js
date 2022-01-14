const express = require('express');
const app = express();
const PORT = 3000;
const { log } = console;

app.get('/', (req, res) => {
	res.send('Hello world');
});

app.listen(PORT, () => {
	log(`Listening at http://localhost:${PORT}`);
});
