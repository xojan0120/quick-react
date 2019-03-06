import React, { Component } from 'react';

export default class MyCheck extends Component {
  constructor(props) {
    super(props);

    // Stateの初期値を設定
    this.state = {
      send: true,
    };

    // thisを固定
    this.handleChange = this.handleChange.bind(this);
    this.show = this.show.bind(this);
  }

  // 変更をStateに反映
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.checked
    });
  }

  // 送信ボタンで入力値をログ出力
  show() {
    console.log(`メール送付:${this.state.send ? '有効':'無効'}`);
  }

  render() {
    return(
      <form>
        <label htmlFor="send">メール送付？：</label>
        <input id="send" name="send" 
          type="checkbox" checked={this.state.send}
          onChange={this.handleChange} />

        <button type="button" onClick={this.show}>
          送信
        </button>

      </form>
    );
  }
}
