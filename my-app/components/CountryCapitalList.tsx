const countryCapitals = [
  {country: '日本', capital: '東京'},
  {country: 'アメリカ', capital: 'ワシントンD.C'},
  {country: '中国', capital: '北京'},
  {country: 'イギリス', capital: 'ロンドン'}
];

const CountryCapitalList = () => {
  return (
    <div>
      <h1>国の首都リスト</h1>
      {countryCapitals.map(countryCapital => {
        return (
          <div 
            key={countryCapital.country}
            style={{
              borderRadius: 5,
              boxShadow: "0 0 3px #555",
              display: "inline-block",
              padding: "3px 5px",
              margin: "3px 5px"
            }}
          >
            <div style={{fontSize: "0.7em", lineHeight: "1em"}}>
              {countryCapital.country}
            </div>
            <div style={{fontSize: "1.1em", fontWeight: "bold", lineHeight: "1em"}}>
              {countryCapital.capital}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CountryCapitalList;