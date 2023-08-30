const http = require('http'); //http 패키지


// createServer 서버 생성 -> 콜백 함수(req, res)를 받아서 요청과 응답을 하는 함수
// listen: 서버를 대기 시킬 수 있는 함수
// 라우팅 : url(요청)에 맞게 분기 처리
http.createServer((req, res) => {
  if(req.url === '/'){
    res.writeHead(200);
    res.end('main url');
  }else if(req.url === '/upload'){
    res.writeHead(200);
    res.end('upload url');
  }else if(req.url === '/delete'){
    res.writeHead(200);
    res.end('delete url');
  }else{
    res.writeHead(404);
    res.end('not found');
  }
}).listen(3000, ()=>{
 console.log('3000번 포트 접속 완료!!');
})

// 정상 : 200
// 오류 : 404