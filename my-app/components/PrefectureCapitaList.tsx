/* 都道府県庁リストの方でも、propsを用いて細かく分割 */

interface PrefectureCapitalItemProps {
  children: React.ReactNode;
};

interface PrefectureCapitalProps {
  prefecture: string;
  capital: string;
};

const prefectureCapitals: PrefectureCapitalProps[] = [
  {prefecture: '東京都', capital: '新宿区'},
  {prefecture: '北海道', capital: '札幌市'},
  {prefecture: '宮城県', capital: '仙台市'},
  {prefecture: '愛知県', capital: '名古屋市'},
  {prefecture: '大阪府', capital: '大阪市'},
  {prefecture: '広島県', capital: '広島市'},
  {prefecture: '福岡県', capital: '福岡市'},
  {prefecture: '沖縄県', capital: '那覇市'}
];

const PrefectureCapitalItemContainer = (props:PrefectureCapitalItemProps) => {
  return(
    <div style={{display:"flex", marginBottom:"0.5em"}}>
      {props.children}
    </div>
  ); 
};

const PrefectureCapitalItem = (props: PrefectureCapitalProps) => {
  return (
    <>
      <div style={{color:"blue", fontWeight:"bold"}}>
        {props.prefecture}&ensp;...&ensp;
      </div>
      <div style={{color:"green"}}> 
        {props.capital}
      </div>
    </>
  )
}

const PrefectureCapitalList = () => {
  return (
    <div>
      <h1>都道府県庁所在地リスト</h1>
      {prefectureCapitals.map(prefectureCapital => {
        return (
        <PrefectureCapitalItemContainer key={prefectureCapital.prefecture}>
          <PrefectureCapitalItem
            prefecture={prefectureCapital.prefecture}
            capital={prefectureCapital.capital}
          />
        </PrefectureCapitalItemContainer>
        );
      })}
    </div>
  );
};

export default PrefectureCapitalList;