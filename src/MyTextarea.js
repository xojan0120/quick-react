import React, { Component } from 'react';

export default class MyTextarea extends Component {
  constructor(props) {
    super(props);

    // Stateの初期値を設定
    this.state = {
      memo: `テキストエリアてすと`,
      memo2: `めも２`,
    };

    // thisを固定
    this.handleChange = this.handleChange.bind(this);
    this.show = this.show.bind(this);
  }

  // 入力ボックスの変更をStateに反映
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // 送信ボタンで入力値をログ出力
  show() {
    console.log(`メモ:${this.state.memo}`);
    console.log(`メモ2:${this.state.memo2}`);
  }

  render() {
    return(
      <form>
        <label htmlFor="memo">メモ１：</label>
        <textarea id="memo" name="memo"
          cols="30" rows="7" 
          onChange={this.handleChange} value={this.state.memo} /><br />

        <label htmlFor="memo">メモ２：</label>
        <textarea id="memo2" name="memo2"
          cols="30" rows="7" 
          onChange={this.handleChange} value={this.state.memo2} /><br />

        <button type="button" onClick={this.show}>
          送信
        </button>

      </form>
    );
  }
}
