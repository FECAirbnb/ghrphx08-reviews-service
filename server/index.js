const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist/')));

// app.get('/', (req, res) => {
//   res.send('Hi');
// });

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
