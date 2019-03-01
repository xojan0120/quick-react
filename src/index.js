// React関連のライブラリをインポート
import React from 'react';
import ReactDOM from 'react-dom';
// アプリ固有のファイルをインポート
import './index.css';
// クラスコンポーネントをインポート
import App from './App';
import MyHello from './MyHello';
import MyType from './MyType';
import MyAttrMulti from './MyAttrMulti';
import MyHelloContent from './MyHelloContent';
import MyBook from './MyBook';
import MyProp, { Member } from './MyProp'; // MemberはMyProp.js内で定義した独自クラス
import MyHelloDef from './MyHelloDef';
import MyArticle from './MyArticle';
import MyNew from './MyNew';
import MyEvent from './MyEvent';
// キャッシュのためのサービスをインポート
import * as serviceWorker from './serviceWorker';

// --------------------------------------------------------------------------------------
// クラスコンポーネントを使った出力
// --------------------------------------------------------------------------------------
// Appクラスコンポーネントをid="root"要素へ出力するという意味。
// コンポーネントとは、ページを構成するUI部品のことである。
// Reactアプリとは、１つ以上のコンポーネントの集合体である。
// <App /> は文字列ではなく、JSXである。
// render(comp, target)
//   - comp:   出力コンポーネント
//   - target: 出力先の要素
ReactDOM.render(<App />, document.getElementById('root'));

// --------------------------------------------------------------------------------------
// 関数コンポーネントを使った出力
// --------------------------------------------------------------------------------------
//function showTime() {
//  return (new Date()).toLocaleString();
//}
//setInterval( () => {
//  ReactDOM.render(<div>{showTime()}</div>, document.getElementById('root2'));
//},1000);

// --------------------------------------------------------------------------------------
// React.Fragment
// --------------------------------------------------------------------------------------
// renderの第一引数は1つの要素(ルート要素)でなくてはならない。
// よって<div>要素などで囲むか、無駄に囲むためだけの要素を増やしたくない場合は、
// 下記のようにReact.Fragment要素を使用する。この要素は最終的な出力には含まれない。
//ReactDOM.render(
//  <React.Fragment>
//    <p>hello</p>
//    <p>world</p>
//  </React.Fragment>,
//  document.getElementById('root2')
//);


// --------------------------------------------------------------------------------------
// テンプレートにJavaScript式を埋め込む
// --------------------------------------------------------------------------------------
//const name = '山田';
//ReactDOM.render(
//  <p>こんにちは、{name + '太郎'}さん！</p>,
//  document.getElementById('root2')
//);

// --------------------------------------------------------------------------------------
// エスケープ処理を解除する
// --------------------------------------------------------------------------------------
//const name = '山田<strong>太郎</strong>';
//ReactDOM.render(
//  <p>こんにちは、<span dangerouslySetInnerHTML={{__html:name}}></span>さん！</p>,
//  document.getElementById('root2')
//);

// --------------------------------------------------------------------------------------
// 属性値前後のクォートは付けない
// --------------------------------------------------------------------------------------
//const url = 'https://www.google.co.jp/';
//ReactDOM.render(
//  // <a href="{url}">google</a>, はNG
//  <a href={url}>google</a>,
//  document.getElementById('root2')
//);

// --------------------------------------------------------------------------------------
// style属性の指定にはオブジェクトを利用する
// --------------------------------------------------------------------------------------
// style属性名はハイフン形式ではなく、キャメルケース記法を使う
//const style = { color:'red', backgroundColor: 'yellow' };
//ReactDOM.render(
//  <p style={style}>TEST</p>,
//  document.getElementById('root2')
//);

// --------------------------------------------------------------------------------------
// クラスコンポーネントへのパラメータ引き渡し
// --------------------------------------------------------------------------------------
// クラスコンポーネント側の受け取りは this.props.name でできる。(MyHello.js参照)
//ReactDOM.render(<MyHello name="山田" />, document.getElementById('root2'));

// --------------------------------------------------------------------------------------
// 関数コンポーネントへのパラメータ引き渡し
// --------------------------------------------------------------------------------------
// 関数コンポーネント側の受け取りは 引数経由のprops.name でできる。
// ※関数コンポーネントの頭文字は大文字でないといけない。
//function SayHello(props) {
//  return (
//    <div> こんにちは、{props.name}さん </div>
//  );
//}
//ReactDOM.render(<SayHello name="山田" />, document.getElementById('root2'));

// --------------------------------------------------------------------------------------
// さまざまな型の値をコンポーネントに渡す
// --------------------------------------------------------------------------------------
//ReactDOM.render(
//  <div>
//    {/* 文字列 ( {...} を利用しない場合) */}
//    <MyType value="山田" />
//    {/* 文字列 */}
//    <MyType value={'鈴木'} />
//    {/* 数値 */}
//    <MyType value={ 108 } />
//    {/* 真偽値 */}
//    <MyType value={ true } />
//    {/* 配列 */}
//    <MyType value={ ['うめ', 'もも', 'さくら'] } />
//    {/* オブジェクト */}
//    <MyType value={ {name: "山田太郎", age:40} } />
//    {/* 関数 */}
//    <MyType value={ () => console.log('Hoge') } />
//  </div>,
//  document.getElementById('root2')
//);

// --------------------------------------------------------------------------------------
// オブジェクトを個々の属性に展開する
// --------------------------------------------------------------------------------------
//const data = { name:'山田', age:18, sex:'男' };
//ReactDOM.render(
//  <MyAttrMulti {...data} />,
//  document.getElementById('root2')
//);

// --------------------------------------------------------------------------------------
// 要素配下のテキストを引用する
// --------------------------------------------------------------------------------------
//const data = { name:'山田', age:18, sex:'男' };
//ReactDOM.render(
//  <MyHelloContent>
//    <b>山田</b>
//  </MyHelloContent>,
//  document.getElementById('root2')
//);

// --------------------------------------------------------------------------------------
// プロパティ型の検証基礎(prop-types)
// --------------------------------------------------------------------------------------
// 引数がないのでprop-typesによってコンソールにエラーを出してくれる
//   PropTypes.string：文字列型
//   PropTypes.symbol：シンボル型
//   PropTypes.number：数値型
//   PropTypes.bool：真偽型
//   PropTypes.array：配列（要素の型は任意）
//   PropTypes.object：オブジェクト型（要素の型は任意）
//   PropTypes.func：関数型
//   PropTypes.element：React要素
//   PropTypes.node：element、number、string、arrayのいずれか
//   PropTypes.any：任意の型
//   element、gnodeは（JavaScriptのネイティブ型ではない）prop-types独自の型です。
//   コンポーネント配下の子要素（children）を利用する場合にはnode指定が便利です。
//ReactDOM.render(<MyHello />, document.getElementById('root2'));

// --------------------------------------------------------------------------------------
// プロパティ型の検証 PropTypes.instanceOf
// --------------------------------------------------------------------------------------
// 値が、指定された型のインスタンスであること
//ReactDOM.render(
//  // 正しい例
//  //<MyProp prop1={new Member()} />, // MemberはMyProp.jsで定義した独自クラス
//  // 誤った例
//  <MyProp prop1="hoge" />,
//  document.getElementById('root2')
//);

// --------------------------------------------------------------------------------------
// プロパティ型の検証 PropTypes.oneOf
// --------------------------------------------------------------------------------------
// 値が、指定された列挙値の中のひとつであること
//ReactDOM.render(
//  // 正しい例
//  //<MyProp prop2="男" />,
//  // 誤った例
//  <MyProp prop2="hoge" />,
//  document.getElementById('root2')
//);

// --------------------------------------------------------------------------------------
// プロパティ型の検証 PropTypes.oneOfType
// --------------------------------------------------------------------------------------
// 値が、指定された型の中のひとつであること
//ReactDOM.render(
//  // 正しい例
//  //<MyProp prop3="山田太郎" />,
//  // 誤った例
//  <MyProp prop3={new Member()} />,
//  document.getElementById('root2')
//);

// --------------------------------------------------------------------------------------
// プロパティ型の検証 PropTypes.arrayOf
// --------------------------------------------------------------------------------------
// 配列内の要素型を指定
//ReactDOM.render(
//  // 正しい例
//  //<MyProp prop4={[10,20]} />,
//  // 誤った例
//  <MyProp prop4={[1000,'梅']} />,
//  document.getElementById('root2')
//);

// --------------------------------------------------------------------------------------
// プロパティ型の検証 PropTypes.shape
// --------------------------------------------------------------------------------------
// オブジェクト配下のメンバーを指定できる
//ReactDOM.render(
//  // 正しい例
//  //<MyProp prop5={ {name:'山田', age:40, sex:'男'} } />,
//  // 誤った例
//  <MyProp prop5={ {age: 40, sex: '男'} } />,
//  document.getElementById('root2')
//);

// --------------------------------------------------------------------------------------
// プロパティ値の既定値を定義する
// --------------------------------------------------------------------------------------
// オブジェクト配下のメンバーを指定できる
//ReactDOM.render(
//  <MyHelloDef />,
//  document.getElementById('root2')
//);

// --------------------------------------------------------------------------------------
// プロパティ型の検証 補足
// --------------------------------------------------------------------------------------
// MyHello2.js参照
//ReactDOM.render(<MyHello />, document.getElementById('root2'));

// --------------------------------------------------------------------------------------
// 繰り返し処理/条件分岐処理
// --------------------------------------------------------------------------------------
//const articles = [
//  {
//    url: 'https://www.atmarkit.co.jp/ait/series/9383/',
//    title: 'Angular TIPS',
//    description: '人気のJavaScriptフレームワーク「Angular」の目的別リファレンス',
//    isNew: true
//  },
//  {
//    url: 'https://www.atmarkit.co.jp/ait/series/9384/',
//    title: 'HOGE',
//    description: 'HUGA',
//    isNew: true
//  },
//];
//const list =
//      articles.map(
//        // 配列にはkey属性を持たせないとワーニングが出る
//        //(article) => <MyArticle {...article} key={article.url} />
//        
//        // 適当なkey属性がない場合は、mapメソッドのインデックス値でもOK
//        (article,index) => <MyArticle {...article} key={index} />
//      )
//ReactDOM.render(
//  <dl>{list}</dl>,
//  document.getElementById('root2')
//);

// --------------------------------------------------------------------------------------
// イベント処理の基本
// --------------------------------------------------------------------------------------
ReactDOM.render(
  <MyEvent greet="Hello" />,
  document.getElementById('root2')
);
  
// キャッシュのためのサービスを有効化
serviceWorker.unregister();
