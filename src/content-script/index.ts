import LgtmGif from "../model/lgtmGif";

let lgtmGifsJson:any[]=[];

chrome.runtime.onMessage.addListener(function (message) {
    if (message.type === "eztm") {
      const textArea = document.activeElement as HTMLTextAreaElement;
      const randomIndex = getRandomInt(lgtmGifsJson.length);
      const lgtmGif = LgtmGif.fromJson(lgtmGifsJson[randomIndex]);
      const cursorPotision= textArea.selectionStart;
      const textValue = textArea.value;
      let text1 =textValue.slice(0,cursorPotision);
      const text2 =textValue.slice(cursorPotision,textValue.length);
      text1+=lgtmGif.markdown;
      textArea.value=text1+text2;
    }
  });

window.onload=()=>{
  fetch("https://kakudenbuzo.github.io/eztm/resources/lgtmGifs.json").then((response) => {
      if (!response.ok) {
       console.error("eztm: http error");
      }
      return response.json();
    }).then((resJson) => {
      lgtmGifsJson=resJson.lgtmGifs;
    })
}

function getRandomInt(max:number) {
  return Math.floor(Math.random() * max);
}