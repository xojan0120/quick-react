import React, { Component } from 'react';

export default class MyTest1 extends Component {
  constructor(props) {
    super(props);

    // Stateの初期値を設定
    this.state = {
      v: "abc"
    };
  }

  // updateメソッド
  update(e) {
    { console.log("updateメソッドのなかのthis↓") }
    { console.log(this) }

    this.setState({ v: e.target.value });
  };

  render() {
    return(
      <React.Fragment>
        { console.log("returnのなかのthis↓") }
        { console.log(this) } {/* このthisはMyTestコンポーネント自体を表す */}

        <p>値: {this.state.v}</p>

        {/*
            下記では動かない。
            <input type="text" onChange={this.update)} />

            これは、onChange時に、MyTestコンポーネントのupdateメソッドを引き渡して
            実行せよ、という意味だが、this(MyTestコンポーネント自身)を引き渡している
            わけではないため、updateメソッド内で使用しているthisがundefinedになる。

            そこで下記のようにthis.update.bind(this)とする。
            これは、this.updateメソッドに対して、thisは、MyTestコンポーネントであると
            明示している。これにより、updateメソッド内でthisが使えるようになる。

            このbindに関する書き方はいくつかある。
            詳しくは、MyEvent.js参照。
        */}
        <input type="text" onChange={this.update.bind(this)} />
      </React.Fragment>
    );
  }

}
