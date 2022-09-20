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
          <div key={countryCapital.country} style={{color: 'red'}}>
            {countryCapital.country} ... {countryCapital.capital}
          </div>
        );
      })}
    </div>
  );
};

export default CountryCapitalList;