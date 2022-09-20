/* TypeScriptなので、コンポーネント間で受け渡しするpropsにも型を指定する必要がある */


/* 型の定義は事前にしておき、interfaceで使い回せるようにすると、保守性が高まる */
interface CardProps {
  children: React.ReactNode;  //props.childrenの型はReact.ReactNode
};

interface CountryCapitalProps {
  country: string;
  capital: string;
};

//TypeScriptなので、配列の要素となるオブジェクト内の値の型を指定する(countryはstring、capitalもstring)
const countryCapitals: CountryCapitalProps[] = [
  {country: '日本', capital: '東京'},
  {country: 'アメリカ', capital: 'ワシントンD.C'},
  {country: '中国', capital: '北京'},
  {country: 'イギリス', capital: 'ロンドン'}
];

//親コンポーネント（CountryCapitalList）からpropsで値を受け取る（ここでのprops内の値は）
//TypeScriptなので、props内の値の型を指定しておく（指定しないとany型になる）
const Card = (props: CardProps) => { 
  /* 
    親コンポーネント内で、本コンポーネントはCountryCapitalItemコンポーネントをネストしているが、
    本コンポーネントはCountryCapitalItemコンポーネントがどのようなものか把握できていない。
    このような場合、props.childrenで、ネストした子要素（ここではCountryCapitalItemコンポーネント）を表示できるようにする。

    Reactにおけるprops.childrenとは、Vue.jsにおける、<slot>のようなもの
  */
  return (
    <div
      style={{  
        //国名と首都名を表示するウィンドウ（カード）のスタイル
        borderRadius: 5,
        boxShadow: "0 0 3px #555",
        display: "inline-block",
        padding: "3px 5px",
        margin: "3px 5px"
      }}
    >
      {props.children}
    </div>
  );
};

//親コンポーネント（CountryCapitalList）からpropsで値を受け取る
//TypeScriptなので、props内の値の型を指定しておく（指定しないとany型になる）
const CountryCapitalItem = (props: CountryCapitalProps) => { 
  return (
    <>
      <div style={{/* 国名の文字のスタイル */ fontSize: "0.7em", lineHeight: "1em"}}>
        {props.country}
      </div>
      <div style={{/* 首都名の文字のスタイル */ fontSize: "1.1em", fontWeight: "bold", lineHeight: "1em"}}>
        {props.capital}
      </div>
    </>
  )
}

const CountryCapitalList = () => {
  return (
    <div>
      <h1>国の首都リスト</h1>
      {countryCapitals.map(countryCapital => {//配列countryCapitalsの各要素をmap関数でTSXに加工
        return (
          <Card key={countryCapital.country}> 
            <CountryCapitalItem
              /* 子コンポーネントに値を渡す（子コンポーネントはpropsで値を受け取る） */
              country={countryCapital.country}
              capital={countryCapital.capital}
            />
          </Card>
        );
      })}
    </div>
  );
};

export default CountryCapitalList;