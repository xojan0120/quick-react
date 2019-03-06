import React, { Component } from 'react';

export default class MyRadio extends Component {
  constructor(props) {
    super(props);

    // Stateの初期値を設定
    this.state = {
      sex: 'male',
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
    console.log(`性別:${this.state.sex}`);
  }

  render() {
    return(
      <form>
        <fieldset>
          <legend>性別：</legend>

          <label htmlFor="sex_male">男性</label>
          <input id="sex_male" name="sex" 
            type="radio" checked={this.state.sex === 'male'}
            onChange={this.handleChange} value="male" />

          <label htmlFor="sex_male">女性</label>
          <input id="sex_female" name="sex" 
            type="radio" checked={this.state.sex === 'female'}
            onChange={this.handleChange} value="female" />

          <label htmlFor="sex_other">その他</label>
          <input id="sex_other" name="sex" 
            type="radio" checked={this.state.sex === 'other'}
            onChange={this.handleChange} value="other" />
        </fieldset>

        <button type="button" onClick={this.show}>
          送信
        </button>

      </form>
    );
  }
}
