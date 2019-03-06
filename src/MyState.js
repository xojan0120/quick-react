import React, { Component } from 'react';

export default class MyState extends Component {
  // Propsは親コンポーネントから値を引き渡すためのオブジェクト（読み取り専用）
  // Stateはコンポーネントの状態を管理するためのオブジェクト
  constructor(props) {
    super(props);

    // 1.Stateの初期値を設定
    this.state = {
      current: new Date()
    };

    // setIntervalの中身は、setStateでcurrentの値を更新してあげないと、
    // Reactが上記の初期値設定から、currentの値が更新されたかどうか検知できない。
    setInterval(()=> {
      this.setState({
        current: new Date()
      });
    },1000);
    // つまり、下記のように書いても時刻は更新されない。
    //setInterval(()=> {
    // this.state = {
    //   current: new Date()
    // };
    //},1000);
    
    // setStateの第二構文
    // setStateメソッドは、引数として関数を受け取ることもできる
    // 関数は、引数として「変更前のState」「現在のProps」を受け取る
    // this.setState((prevState,props)=>({
    //   current: new Date()
    // }));
  }

  render() {
    return(
      <div>
        現在時刻は、
        {this.state.current.toLocaleString()}
        です。
      </div>
    );
  }

}
