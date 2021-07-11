/*
 * @Author: json
 * @Date: 2021-07-11 17:02:51
 * @LastEditTime: 2021-07-11 22:12:35
 * @LastEditors: json
 * @Description:服务端渲染
 * @FilePath: /webpack/server/index.js
 */
if (typeof window === 'undefined') {
  global.window = {};
}

const express = require('express');
const { renderToString } = require('react-dom/server');
const SSR = require('../dist/search-server.js');
console.log('SSR :>> ', SSR);
const renderMarkUp = (str) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root">
    ${str}
  </div>
</body>
</html>`;

const server = (port) => {
  const app = express();
  app.use(express.static('dist'));
  app.get('/search', (req, res) => {
    const html = renderMarkUp(renderToString(SSR));
    console.log('html :>> ', html);
    res.status(200).send(html);
  });
  app.listen(port, () => console.log(`Server is Running on port: ${port}`));
};

server(process.env.PORT || 3000);
