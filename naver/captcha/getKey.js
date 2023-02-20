const express = require("express"); //웹어플리케이션을 위한 프레임워크 선언
//선언하면 프레임워크가 제공하는 API를 누릴 수 있다.그럴때 nodejs에서는 require함수를 사용
//리액트에서는 import가 제공됨
//<script type="module"></script> 지원하게 되면서 넥플리스가 서버사이드를 nodejs 기반
const app = express();
//네이버 서버에서 발급한 고유ID값-회원가입이 되어 있고 개발자 센터에서 어플리케이션을 
const client_id = "tiraSznCoZ53snQO7o8e"; //개발자센터에서 발급받은 Client ID
const client_secret = "eDaceOgR54"; //개발자센터에서 발급받은 Client Secret
const code = "0";
//expressjs에서 REST API를 지원하는 메소드를 제공하고 있다.
//두번째 파라미터는 콜백함수임
//첫번째 파라미터 요청에 대한 응답을 받기 위해 호출되는 함수임
//http프로토콜을 이용하여 서버에 요청하고 응답 처리를 위해서는
//반드시 어떤 언어이든 요청객체와 응답객체를 제공받아야 한다.
//익스프레스도 그래서 제공하고 있다
//req는 요청객체의 인스턴스변수로 express로 부터 객체주입 받는다-사용자가 생성할 수 없다
//이런 경우를 의존성 주입이라고 할 수 있다.

app.get("/captcha/nkey", function (req, res) {
 //네이버 서버가 제안하는 URL주소-키값을 받아와야 함(인증과정) 
  const api_url = "https://openapi.naver.com/v1/captcha/nkey?code=" + code;
  //네이버가 제공하는 URL주소로 네이버서버에 요청을 해야 하니까..
  //npm i -g request
  const request = require("request"); //요청객체
  const options = {
    url: api_url,
    //http프로토콜을 통해 전송할때 header body가 있는데 get은 그중 header를 이용함
    headers: { 
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      //res.end(body);
      key = body.substring(8,24);
      console.log(key);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});
app.listen(3000, function () {
  console.log("http://127.0.0.1:3000/captcha/nkey app listening on port 3000!");
});

/* 
REST API
우리가 하고싶은 작업에 따라 다른 메소드 요청을 하는 방법을 제공

HTTP메소드 수단으로 이용
GET - 데이터 조회
POST - 데이터 등록 및 전송
PUT  - 데이터 수정
DELETE - 데이터 삭제
*/