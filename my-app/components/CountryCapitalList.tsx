const countryCapitals = [
  {country: '日本', capital: '東京'},
  {country: 'アメリカ', capital: 'ワシントンD.C'},
  {country: '中国', capital: '北京'},
  {country: 'イギリス', capital: 'ロンドン'}
];

const Card = (props) => { 
  /* 
    親コンポーネント内で、本コンポーネントはCountryCapitalItemコンポーネントをネストしている。
    このような場合、props.childrenで、ネストした子要素（ここではCountryCapitalItemコンポーネント）を表示できるようにする。
    
    Reactにおけるprops.childrenとは、Vue.jsにおける、<slot>のようなもの
  */
  return (
    <div
      style={{
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

const CountryCapitalItem = (props) => {  //親コンポーネント（CountryCapitalList）からpropsで値を受け取る
  return (
    <>
      <div style={{fontSize: "0.7em", lineHeight: "1em"}}>
        {props.country}
      </div>
      <div style={{fontSize: "1.1em", fontWeight: "bold", lineHeight: "1em"}}>
        {props.capital}
      </div>
    </>
  )
}

const CountryCapitalList = () => {
  return (
    <div>
      <h1>国の首都リスト</h1>
      {countryCapitals.map(countryCapital => {
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