import React, { Component } from 'react';

export default class MyTest2 extends Component {
  constructor(props) {
    // ・superはextendsしている親クラス(ここではComponentクラス)のコンストラクタを呼び出す。
    //
    // ・コンストラクタは、オブジェクトの初期化などを行う関数またはメソッド。
    //
    // ・括弧内はコンストラクタに引き渡す引数である。
    //   つまりここでは、親クラスのComponentクラスのコンストラクタを、引数propsを渡して
    //   実行していることになる。
    //
    // ・ここで使うpropsとは、このMyTest1コンポーネントの呼び出し元で指定された
    //   プロパティのことである。呼び出し元は下記のようになっている。
    //   ReactDOM.render(
    //     <MyTest2 name1="hoge" name2="huga" />,
    //     document.getElementById('root2')
    //   );
    //   name1やname2がpropsの中身である。
    super(props); // props = { name1: "hoge", name2: "huga" }

    // propsの中身には、下記のようにアクセスできる。
    this.state = {
      v1: props.name1,
      v2: props.name2
    };
  }

  update(e) {
    // setState関数で、this.stateの内容を書き換えることで、Reactが変更を検知して、
    // 変更内容をrenderしてくれる。よって、this.state.v1 = "aaa"と直接内容を変更しても
    // renderしてくれない。
    this.setState(
      {
        v1: "aaa",
        v2: "bbb"
      }
    );
  }

  render() {
    return(
      <React.Fragment>
        <p>与えられたプロパティ1 {this.state.v1}</p>
        <p>与えられたプロパティ2 {this.state.v2}</p>
        <button onClick={this.update.bind(this)}>
          updateメソッド実行
        </button>
      </React.Fragment>
    );
  }

}
