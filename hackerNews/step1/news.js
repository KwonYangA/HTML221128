const requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
  .then((response) => response.json())
  //.then((result) => console.log(result))
  .then((result) => {
    //ul태그를 js를 활용해서 생성하기
    const ul = document.createElement("ul");
    for (let i = 0; i < 10; i++) {
      //
      const li = document.createElement("li"); //li태그를 5개 생성
      //<li>뉴스제목</li>
      console.log(result[i].title);
      li.innerHTML = result[i].title; //해커뉴스에서 반환값으로 제공되는 json에서 title가져와서
      //for문에서 만들어진 li태그를 ul태그에 넣기
      ul.appendChild(li);
      //console.log(result[i].title);
    }
    //news.html문서의 body에 정의된 <div id =root><ul></ul></div>
    document.getElementById("root").appendChild(ul);
  })
  .catch((error) => console.log("error", error));
