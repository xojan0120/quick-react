import React, { Component } from 'react';

// Reactでフォームを扱う流れ
// ・Stateでフォーム要素の初期値を定義＆フォームに紐づけ
//   フォームのname属性と、stateのプロパティ名は同じにしておくのがポイント
//   あとで、下記のように使えるため。
//    this.setState({
//      [e.target.name]: e.target.value
//    });
//  ・フォーム要素の変更都度、入力値をStateに反映
//  ・入力値が必要になったら、State値を参照する

//   下記のようにフォーム配下の入力をStateで管理する方式のコンポーネントを
//   Controlled Componentという。
//   入力値をStateで管理せず、必要になった時点で要素から取得するコンポーネントは
//   Uncontrolled Componectという。一般的には前者の実装がよい。
//   Uncontrolled Componectの実装方法については、速習React No.1387参照。

export default class MyForm extends Component {
  constructor(props) {
    super(props);

    // Stateの初期値を設定
    this.state = {
      name: '山田太郎',
      email: 'aaa@exmaple.com'
    };

    // thisを固定
    this.handleChange = this.handleChange.bind(this);
    this.show = this.show.bind(this);
  }

  // 入力ボックスの変更をStateに反映
  // [e.target.name] はES2015のComputed property namesという構文で
  // 「要素名(e.target.name)をそのままプロパティ名として使用する、
  // という意味である。
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // 送信ボタンで入力値をログ出力
  show() {
    console.log(`name:${this.state.name}`);
    console.log(`email:${this.state.email}`);
  }

  render() {
    return(
      <form>
        {/* 
            State値を個々のフォーム要素に反映
            ReactのonChangeイベントは、フォームからフォーカスが外れたタイミングで
            発生ではなく、内容が変更される都度発生する。(キー入力途中でも発生する
            ということ）
        */}
        <div>
          <label htmlFor="name">名前：</label>
          <input id="name" name="name" type="text"
            onChange={this.handleChange} value={this.state.name} />
        </div>

        <div>
          <label htmlFor="email">メールアドレス：</label>
          <input id="email" name="email" type="mail"
            onChange={this.handleChange} value={this.state.email} />
        </div>

        <button type="button" onClick={this.show}>
          送信
        </button>

      </form>
    );
  }
}
