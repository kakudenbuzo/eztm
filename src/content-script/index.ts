chrome.runtime.onMessage.addListener(function (message) {
    if (message.type === "eztm") {
      const textArea = document.activeElement as HTMLTextAreaElement;
      const randomIndex = getRandomInt(gifs.length);
      const gif = gifs[randomIndex];
      const cursorPotision= textArea.selectionStart;
      const textValue = textArea.value;
      let text1 =textValue.slice(0,cursorPotision);
      const text2 =textValue.slice(cursorPotision,textValue.length);
      text1+=gif;
      textArea.value=text1+text2;
    }
  });

  const gifs = ["![NASA LGTM](https://media.giphy.com/media/MUKtQ1aRXwkO8ntpfg/giphy.gif)",
  "![Deadpool LGTM](https://media.giphy.com/media/XD9AhPUPVsGu0hG3YD/giphy.gif)",
"![Cookie Monster](https://media.giphy.com/media/BNIzysgbLQZEf73HG0/giphy.gif)",
"![Yugi Thumb](https://media.giphy.com/media/YOyi3Olf68kjbEB3g9/giphy.gif)",
"![Selena ](https://media.giphy.com/media/2M4BjdQu9j8bZHmog9/giphy.gif)",
"![Praise LGTM](https://media.giphy.com/media/AvbSlgPpbxzuKiVwO4/giphy.gif)",
"![Oprah Crazy](https://media.giphy.com/media/kPTl08vSEcoAnsTvy8/giphy.gif)",
"![Kid Pumped](https://media.giphy.com/media/3iih6qeruA0TzxDLHi/giphy.gif)",
"![Curry Dance](https://media.giphy.com/media/AJMPKDi4jV4me4FZ74/giphy.gif)",
"![Community Thumbs Up](https://media.giphy.com/media/FufPwnJGp6lGwNyqXr/giphy.gif)"]

function getRandomInt(max:number) {
  return Math.floor(Math.random() * max);
}