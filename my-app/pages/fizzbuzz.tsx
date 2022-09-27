/* FizzBuzz APIにおけるクライアント側の処理 */

import React, { useState } from "react";

//処理で使用する変数の型をインポート
import type { FizzBuzzInterface } from "../answers";

const fizzBuzz = () => {

  //useStateにも型を設定できる（型の設定がない場合は初期値の方によって推論される）
  //データをもらう前の状態も指定しておきたいので、FizzBuzzInterface型に加えてnull型も指定
  /* 
    fizzBuzzAnswer...状態を格納する変数。[num].ts内での処理結果が格納される（初期値はnull）
    setFizzBuzzAnswer...fizzBuzzAnswerの値を更新するための関数
  */
  const [fizzBuzzAnswer, setFizzBuzzAnswer] = useState<FizzBuzzInterface|null>(null);

  /* 
    num...状態を格納する変数。フォーム部分に表示される数値で使用（初期値は0）
    setNum...numの値を更新するための関数
  */
  const [num, setNum] = useState(0);

  //Web APIにリクエストを投げ、レスポンスをJSON化し、fizzBuzzAnswerの値を更新する
  //ここで使用するnumは、fetchResult(Number(e.target.value));で取得したもの（setNumの結果ではない）
  const fetchResult = (num: Number) => {

    //Web API側のURLを指定
    const url = `/api/fizzbuzz/${num}`;

    //指定したAPIのURLにリクエストを送り、レスポンスをJSON化
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        //レスポンスされたJSONを引数としてsetFizzBuzzAnswer関数を実行し、fizzBuzzAnswerの値を更新
        setFizzBuzzAnswer(json);  
      });
    console.log(url);  //デバッグ用に指定したWeb APIのURL（クエリを含む）をブラウザのコンソールの表示
  };

  return (
    <>
      <div>
        <h1>FizzBuzz</h1>
        <label>数字を入力してね
          <input
            type="number"
            value={num}
            onChange={(e) => {
              
              //選択された数値を引数としてsetNum関数を実行して、numの値を更新
              setNum(Number(e.target.value)); 

              //選択された数値を引数として、fetchResult関数を実行
              fetchResult(Number(e.target.value));
            }}
          />
        </label>
      </div>
      <div>
        {fizzBuzzAnswer! && <p style={{color: fizzBuzzAnswer.color, fontSize:fizzBuzzAnswer.size}}>{fizzBuzzAnswer.answer}</p>}
      </div>
    </>
  );
};

export default fizzBuzz;