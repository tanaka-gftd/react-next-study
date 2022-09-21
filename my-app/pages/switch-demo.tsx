//useState...React Hooksの一つで、関数コンポーネント内の状態を管理する
import { useState } from "react";


const SwitchDemo = () => {

  /* 
    useStateは、返り値として長さ2に配列を返す。
    一つ目は状態を表す変数の名前、二つ目は状態を表す変数の値を変更する関数
    状態を表す変数の初期値は、useStateに引数として渡した値になる。
  */
  const [pushed, setPushed] = useState(false);

  return (
    <main style={{textAlign: "center"}}>
      <p>押すと色が変わります</p>
      <button
        /* 
          HTMLだと 「onClick=関数名」 でonClickに関数が渡せるが、TSX（JSX）ではこの方法では渡せない。
          なので、Reactでは「onClick={()=>関数}」として、onClickに関数を渡す。（関数名を書くのではなく、アロー関数を記述して渡す）

          なお、「onClick={関数}」と記述すると、onClickには関数ではなく、関数の返り値が渡されてしまうので注意。
        */
        onClick={() => {setPushed(!pushed)}}
        style={{background: pushed ? "pink" : "skyblue"}}
      >
        {pushed ? "ON" : "OFF"}
      </button>
    </main>
  );
};

export default SwitchDemo;