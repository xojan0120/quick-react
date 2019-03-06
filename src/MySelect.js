import React, { Component } from 'react';

export default class MySelect extends Component {
  constructor(props) {
    super(props);

    // Stateの初期値を設定
    this.state = {
      fruit: 'apple',
    };

    // thisを固定
    this.handleChange = this.handleChange.bind(this);
    this.show = this.show.bind(this);
  }

  // 変更をStateに反映
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // 送信ボタンで入力値をログ出力
  show() {
    console.log(`好きな果物:${this.state.fruit}`);
  }

  render() {
    return(
      <form>
        <label htmlFor="fruit">好きな果物：</label>
        <select id="fruit" name="fruit" 
          onChange={this.handleChange} value={this.state.fruit}>
          <option value="apple">りんご</option>
          <option value="orange">オレンジ</option>
        </select>

        <button type="button" onClick={this.show}>
          送信
        </button>

      </form>
    );
  }
}
