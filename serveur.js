const express = require("express");

const app = express();
const port = 3000;

app.get("/add/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  res.send({ result: a + b });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

console.log("hello 123");

module.exports = app;
// test change
// test change
// test change
// test change
// test webhook
// test webhook
// test webhook
// test webhook
// test webhook
// test webhook
// test webhook
// test webhook
