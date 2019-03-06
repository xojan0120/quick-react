import React, { Component } from 'react';

export default class MyPool extends Component {

  // Reactでは、パフォーマンス上の理由からSyntheticEvent(合成イベント)を
  // 都度生成しない。下記のsetTimeoutのように非同期の中で再度参照することは
  // できない。
  show(e) {
    console.log(e.type);   // => clickと表示される

    setTimeout(()=> {
      console.log(e.type); // => nullになる
    },1000);
  }

  // 方法1.上記を回避するには、typeプロパティの値をあらかじめ変数に退避する
  show2(e) {
    const t = e.type;

    console.log(t);   // => clickと表示される

    setTimeout(()=> {
      console.log(t); // => clickと表示される
    },1000);
  }

  // 方法2.persistメソッドを使う
  // persistメソッドを使うことで、イベントオブジェクトがプールから切り離され
  // 維持されるようになる。
  show3(e) {
    e.persist();

    console.log(e.type);   // => clickと表示される

    setTimeout(()=> {
      console.log(e.type); // => clickと表示される
    },1000);
  }

  render() {
    return(
      <div>
        <button type="button" onClick={this.show.bind(this)}>
          イベント情報1
        </button>
        <button type="button" onClick={this.show2.bind(this)}>
          イベント情報(変数退避)
        </button>
        <button type="button" onClick={this.show3.bind(this)}>
          イベント情報(persist)
        </button>
      </div>
    );
  }

}
