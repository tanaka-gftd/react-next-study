/* /* FizzBuzz APIにおけるAPI側の処理 */
/* 入力されたURLから数値をクエリとして受けとって、その数値に応じたレスポンスを返すAPI */

/* Next.jsではファイル名を[]で囲むことで、URLから様々なクエリを受け取れるようになる（他フレームワークで言うところの/:idみたいなもの） */
/* []に囲まれたワードが、クエリとして扱われる */

//リクエストオブジェクトとレスポンスオブジェクトの型をそれぞれ導入
import type { NextApiRequest, NextApiResponse } from "next";

//処理で使用する変数の型をインポート
import type { FizzBuzzInterface } from "../../../answers";

//受け取った値に応じて、返す値を切り分ける
//レスポンスに応じてスタイルを設定したいので、CSSで使用する色やフォントサイズもレスポンスに含める
//fizzBuzz関数の引数はnum(number型)、返り値はFizzBuzzInterface型となる
const fizzBuzz   = (num: number): FizzBuzzInterface => {
  if (num % 3 == 0 && num % 5 == 0) {
    return {answer: "fizzbuzz", color: "green", size: 100};  //numが3と5の公倍数（=15の倍数）
  } else if (num % 3 == 0) {
    return {answer: "fizz", color: "blue", size: 50};  //numが3の公倍数（ただし、15の倍数を除く）
  } else if (num % 5 == 0) {
    return {answer: "buzz", color: "red", size: 25};  //numが5の公倍数（ただし、15の倍数を除く）
  } else {
    return {answer: num, color: "black", size: 10};
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FizzBuzzInterface>  //レスポンスはFizzBuzzInterface型の要素を持つ配列
) {
  if (req.method === "GET") {
    console.log(req.query.num);  //デバッグ用に受け取ったURLクエリをコンソール(ターミナル)に表示
    if (typeof req.query.num === "string") {

      //URLクエリは文字列として受け取るので、数値に変換してからfizzBuzz()に引数として渡す
      res.status(200).json(fizzBuzz(parseInt(req.query.num)));  //結果はJSON形式にする
    } else {
      res.status(404).end();
    }
  } else {
    //GETメソッド以外は受けとらないので、ステータス405をレスポンス
    res.status(405).end();
  }
}