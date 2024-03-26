const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 4000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/curl', (req, res) => {
  const {url, method='GET', data='', header={}} = req.body
  // res.send('url'+url)
  fetch(url, {
    method: method,
    // headers: header,
    // body: data
  })
  .then(response => {
    // 检查响应状态
    if (!response.ok) {
      // throw new Error('Network response was not ok ' + response.statusText);
      return 404;
    }

    // 获取Content-Type头部
    const contentType = response.headers.get('Content-Type');

    // 根据Content-Type处理响应
    if (contentType && contentType.includes('application/json')) {
      // 如果响应是JSON格式
      return response.json();
    } else if (contentType && contentType.includes('text/html')) {
      // 如果响应是HTML格式
      return response.text();
    } else {
      // 如果响应类型未知或不被支持
      // throw new Error('Unsupported media type');
      return 404;
    }
  })
  .then(data => {
    res.send(data)
  })
  .catch(error => {
    res.send(error)
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
