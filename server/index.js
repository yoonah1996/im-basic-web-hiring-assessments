const express = require('express');
const { movies } = require('./data.json');

const app = express();
app.get('/movies',(req,res) => {
  res.send(movies);
})
for(let i=0; i<movies.length; i++){
  app.get('/movies/'+movies[i].id,(req,res) => {
    res.send(movies[i]);
  })
}
// 테스트를 위한 코드입니다. 건드리지 마세요.
if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => {
    console.log('server listen on 3000');
  });
}

module.exports = app;
