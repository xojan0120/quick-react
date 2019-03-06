import React, { Component } from 'react';
import MyChild from './MyChild';

export default class MyParent extends Component {
  constructor(props) {
    super(props);

    // Stateの初期値を設定
    this.state = {
      date: null
    };
  }

  // このupdateメソッドは子コンポーネントへ引き渡す用
  // 引数のstateは、MyChildコンポーネント側で指定される。
  updateParent(state) {
    this.setState(state);
  };

  render() {
    return(
      <React.Fragment>
        <p>MyParent: {this.state.date}</p>
        {/*
            3.MyChildのonUpdateChild属性に、updateParentメソッドを渡す。
            bind(this) -> this(MyPrentコンポーネント)を明示的に引き渡す。
            これにより、updateParentメソッド内のthisが、MyPrentコンポーネントととなる。
        */} 
        <MyChild method1={this.updateParent.bind(this)} />
      </React.Fragment>
    );
  }

}
