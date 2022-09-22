/* 入力されたURLから数値をクエリとして受けとって、その数値に応じたレスポンスを返すAPI */

/* Next.jsではファイル名を[]で囲むことで、URLから様々なクエリを受け取れるようになる（他フレームワークで言うところの/:idみたいなもの） */
/* []に囲まれたワードが、クエリとして扱われる */

//リクエストオブジェクトとレスポンスオブジェクトの型をそれぞれ導入
import type { NextApiRequest, NextApiResponse } from "next";

//処理で使用する変数の型を設定
type FizzBuzzAnswerType = "fizzbuzz" | "fizz" | "buzz" | number;

//受け取った値に応じて、返す値を切り分ける
//fizzBuzz関数の引数はnum(number型)、返り値はFizzBuzzAnswerType型となる
const fizzBuzz   = (num: number): FizzBuzzAnswerType => {
  if (num % 3 == 0 && num % 5 == 0) {
    return "fizzbuzz";  //numが3と5の公倍数（=15の倍数）
  } else if (num % 3 == 0) {
    return "fizz";  //numが3の公倍数（ただし、15の倍数を除く）
  } else if (num % 5 == 0) {
    return "buzz";  //numが5の公倍数（ただし、15の倍数を除く）
  } else {
    return num;
  };
};

export default function handler(
  req: NextApiRequest,
  //res: NextApiResponse<string> //レスポンスは文字列の要素を持った配列  //ここにstring型を指定するのはおかしい
  /*  
    N予備校のカリキュラム内のコードでは、文字列の要素を持った配列をレスポンスするよう記載されているが、
    fizzBuzz関数の返り値の型はFizzBuzzAnswerTypeである以上、レスポンスする配列の要素もFizzBuzzAnswerTypeにすべき。
    実際、string型で指定すると、VScodeにもエラーが表示される。
  */
  res: NextApiResponse<FizzBuzzAnswerType>  //こちらが正解のはずである
) {
  if (req.method === "GET") {
    console.log(req.query.num);  //デバッグ用に受け取ったURLクエリをコンソールに表示
    if (typeof req.query.num === "string") {

      //req.query.numが数字なら、数値に変換してfizzBuzz()に引数として渡す
      /* 
        N予備校のカリキュラムではこのようにコードが記述されているが、
        req.query.numの値がparseIntできないものである場合(例えば文字列）、この処理ではダメな気がする（引数がnullになる）
        （学習のために、URLに含めるクエリは数値だけに限定としているのかも）
      */
      res.status(200).send(fizzBuzz(parseInt(req.query.num)));
    } else {
      res.status(404).end();
    }
  } else {
    //GETメソッド以外は受けとらないので、ステータス405をレスポンス
    res.status(405).end();
  }
}