//useState...React Hooksの一つで、関数コンポーネント内の状態を管理する
//useEffect...React Hooksの一つで、関数コンポーネントのレンダリング時に実行する
import { useState, useEffect } from "react";


const SwitchDemo = () => {

  /* 
    useStateは、返り値として長さ2に配列を返す。
    一つ目は状態を表す変数の名前、二つ目は状態を表す変数の値を変更する関数
    状態を表す変数の初期値は、useStateに引数として渡した値になる。
  */
  const [pushed, setPushed] = useState(false);

  /* 
    useEffectは、二つの引数を持つ（第二引数の指定によって、useEffectの実行タイミングが変わる）
    第一引数は、実行する関数。

    第二引数に値を配列で渡すと、第二引数で指定した変数の値に変化があったときだけ、第一引数で渡した関数が実行されるようになる。

    第二引数を省略すると、レンダリングの度（マウント時、更新時、アンマウント時）に、第一引数の関数が実行される。
      →stateやpropsに更新があっても、コンポーネントはレンダリングされるので、予期しないタイミングでuseEffectが実行されてしまう。
      →よって、第二引数を省略するのは非推奨。

    第二引数に空配列[]を渡すと、初回のレンダリング時のみ、useEffectが実行される。
  */
  useEffect(() => {
    document.title = `現在のボタンの状態：${pushed ? "ON" : "OFF"}`;
  }, [pushed]);

  return (
    <main style={{textAlign: "center"}}>
      <p>ボタンを押すと、ボタンの色が変わります（useState）</p>
      <p>ボタンを押すと、ページタイトルが変わります（useEffect）</p>
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