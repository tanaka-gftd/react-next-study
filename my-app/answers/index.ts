/* Web APIで使用する型を宣言するためだけのファイル */
/* 宣言した型をエキスポートして使い回すことで、バグを減らしたり、修正に柔軟な対応ができる */

type FizzBuzzAnswerType = "fizzbuzz" | "fizz" | "buzz" | number;

//宣言した複数の型を、インターフェースとしてまとめてエキスポート
export interface FizzBuzzInterface {
  answer: FizzBuzzAnswerType;
  color: string;
  size: number;
}