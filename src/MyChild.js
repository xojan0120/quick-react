import React, { Component } from 'react';

export default class MyChild extends Component {
  constructor(props) {
    super(props);

    // Stateの初期値を設定
    this.state = {
      date: 'child data'
    };

    // 親コンポーネントのupdateParentメソッドを呼び出す。
    // 引数には、MyChildコンポーネントのsateを渡す。
    // これにより、子のstateを親コンポーネントへ引き渡すことになる。
    this.props.method1(this.state);
  }

  render() {
    return(
      <p>MyChild: {this.state.date}</p>
    );
  }

}
