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
          <div key={countryCapital.country}>
            {countryCapital.country} ... {countryCapital.capital}
          </div>
        );
      })}
    </div>
  );
};

const prefectureCapitals = [
  {prefecture: '東京都', capital: '新宿区'},
  {prefecture: '北海道', capital: '札幌市'},
  {prefecture: '宮城県', capital: '仙台市'},
  {prefecture: '愛知県', capital: '名古屋市'},
  {prefecture: '大阪府', capital: '大阪市'},
  {prefecture: '広島県', capital: '広島市'},
  {prefecture: '福岡県', capital: '福岡市'},
];

const PrefectureCapitalList = () => {
  return (
    <div>
      <h1>都道府県庁所在地リスト</h1>
      {prefectureCapitals.map(prefectureCapital => {
        return (
        <div key={prefectureCapital.prefecture}>
          {prefectureCapital.prefecture} ... {prefectureCapital.capital}
        </div>
        );
      })}
    </div>
  );
};

const TopPage = () => {
  return (
    <div>
      <CountryCapitalList/>
      <PrefectureCapitalList/>
    </div>
  );
};

export default TopPage;