//リクエストオブジェクトとレスポンスオブジェクトの型をそれぞれ導入
import type { NextApiRequest, NextApiResponse } from "next";

//APIの処理を受け持つ関数（ハンドラ）＊ここではアロー関数形式
//リクエストオブジェクトとレスポンスオブジェクトを引数としてハンドラに渡し、レスポンスを返す
const handler = (
  req: NextApiRequest,  //TypeScriptなので型を設定する
  res: NextApiResponse  //TypeScriptなので型を設定する
) => {
  res.status(200).json({  //レスポンス
    message: "Hello API!"
  });
};

export default handler;