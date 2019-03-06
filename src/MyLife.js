import React, { Component } from 'react';

export default class MyLife extends Component {
  constructor(props) {
    super(props);

    // Stateの初期値を設定
    this.state = {
      current: new Date()
    };
  }

  // componentDidMountはコンポーネントの配置後に呼び出されるメソッド
  // タイマーの初期化
  componentDidMount() {
    this.timer = setInterval(
      ()=> {
        this.setState({
          current: new Date()
        });
      },
      1000);
  }

  // componentWillUnmountはコンポーネントの破棄時に呼び出されるメソッド
  // タイマーの破棄
  componentWillUnmount() {
    clearInterval(this.timer);
  };

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
