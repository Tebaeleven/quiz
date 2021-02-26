const quiz =[
  {
    question:"ゲーム市場もっとも売れたゲーム機は？",
    answers:[
      "スーパーファミコン",
      "プレイステーション２",
      "ニンテンドースイッチ",
      "ニンテンドーDS"
    ],
    correct:"ニンテンドーDS"
  },{
    question:"糸井重里が企画に関わった、任天堂の看板ゲームと言えば？",
    answers:[
      "MOTHER2",
      "スーパーマリオブラザーズ３",
      "スーパドンキーコング",
      "星のカービィ"
    ],
    correct:"MOTHER2"
  },{
    question:"ファイナルファンタジーⅣの主人公の名前は？",
    answers:[
      "フリオニール",
      "クラウド",
      "ディーダ",
      "セシル"
    ],
    correct:"セシル"
  }
]

const quizlength = quiz.length;
let quizIndex=0;
let score=0;

//HTMLのdiv選択 数もあり
const $button=document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz=()=>{
  //質問文作成
  document.getElementById("js-question").    textContent=quiz[quizIndex].question;
  //定数の文字列をHTMLに反映させる
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler=(e)=>{
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！");
    score++;
  }else{
    window.alert("不正解");
  }
  quizIndex++;
  if(quizIndex<quizlength){
    //問題数がまだあればこちらを実行
    setupQuiz();
  }else{
    //問題数がもうなければこちらを実行
    window.alert("終了！あなたの正解数は"+ score + "/" +quizlength+"です！");
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;

while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click",(e)=> {
    clickHandler(e);
  });
  handlerIndex++;
}


