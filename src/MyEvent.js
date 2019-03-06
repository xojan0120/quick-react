import React, { Component } from 'react';

export default class MyEvent extends Component {

  // 入力ボックス変更時にメッセージ出力
  // eはイベントハンドラから無条件で渡されるイベントオブジェクト。
  // これは、生のイベントオブジェクトではなくブラウザー間の仕様差を
  // 吸収したSyntheticEvent(合成イベント)である。
  // 以下のメンバーを共通して利用可能。
  // ・bubbles イベントがバブルしているか
  // ・cancelable イベントがキャンセル可能か
  // ・currentTarget イベントの現在のターゲット要素を取得
  // ・defaultPreventedpreventDefault が呼び出されたか
  // ・eventPhase イベントのフェーズを取得（1：CAPTURING_PHASE、2：AT_TARGET、3：BUBBLING_PHASE）
  // ・isTrusted イベントがユーザーの操作によって発生したか
  // ・nativeEvent 生のイベントオブジェクトを取得
  // ・target イベントの発生元の要素
  // ・timeStamp イベントの作成日時を取得
  // ・type イベントの種類を取得
  // ・isDefaultPrevented() preventDefaultが実行されたか
  // ・isPropagationStopped() stopPropagationが実行されたか
  // ・preventDefault() 既定の動作をキャンセル
  // ・stopPropagation() イベントの伝播を停止
  show(suffix,e) {
    console.log(`入力内容：${this.props.greet}, ${e.target.value} ${suffix}`);
  }

  render() {
    return(
      <form>
        <label htmlFor="txtName">名前：</label>
        {/* 
            イベントハンドラはonEventで設定する。
            onChangeはすべて小文字ではなく、キャメルケース 
            this.show.bind(this)は、「showメソッド配下のthisを現在のthis(
            コンポーネント)でバインド(固定)しなさい」という意味。
        */}
        <input id="txtName" type="text" onChange={this.show.bind(this,'様')} />
      </form>
    );
  }

  // 別の書き方３パターン

  // 1.コンストラクタでbindする(おすすめ)
  // 下記のように書くこともできる
  // バインドの宣言を１か所にまとめられること、
  // onChangeの中身は若干シンプルになることがメリット
  //constructor(props) {
  //  super(props)
  //  this.show = this.show.bind(this);
  //}
  //・・・中略・・・
  //      <input id="txtName" type="text" onChange={this.show} />

  // 2.アロー関数で宣言する
  //show(e) {
  //  console.log(`入力内容：${this.props.greet}, ${e.target.value}`);
  //}
  //      <input id="txtName" type="text" onChange={(e)=>this.show(e)} />

  // 3.クラスプロパティを利用することもできる
  //export default class MyEvent extends Component {
  //show = (e)=>{
  //  console.log(`入力内容：${this.props.greet}, ${e.target.value}`);
  //}
  //  ・・・中略・・・
  //        <input id="txtName" type="text" onChange={this.show} />
}
