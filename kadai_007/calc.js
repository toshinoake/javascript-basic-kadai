//変数numに0～30までのランダムな整数を代入する
let num = Math.floor(Math.random() * 31)

//変数のnumの値を出力する（確認用…これいらない？…いらないっぽいとりあえずコメントアウト）
//console.log(num);

//numを3と5で割ったら余りが0になる3と5の倍数
if ((num % 3 == 0) && (num % 5 == 0)) {
  console.log('3と5の倍数です');
}

//numを3で割ると余りが0になる3の倍数
else if (num % 3 == 0) {
  console.log('3の倍数です');
}

//numを5で割ると余りが0になる5の倍数
else if (num % 5 == 0) {
  console.log('5の倍数です');
}

//それ以外numを出力する
else {
  console.log(num);
}
