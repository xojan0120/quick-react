import React, { Component } from 'react';

export default class MyCheckMulti extends Component {
  constructor(props) {
    super(props);

    // Stateの初期値を設定
    this.state = {
      fruit: ['apple','melon'],
    };

    // thisを固定
    this.handleChange = this.handleChange.bind(this);
    this.show = this.show.bind(this);
  }

  // 変更をStateに反映
  handleChange(e) {
    const fs = this.state.fruit;
    if(e.target.checked) {
      fs.push(e.target.value);
    }else{
      fs.splice(fs.indexOf(e.target.value),1);
    }
    this.setState({
      [e.target.name]: fs
    });
  }

  // 送信ボタンで入力値をログ出力
  show() {
    console.log(`好きな果物:${this.state.fruit}`);
  }

  render() {
    return(
      <form>
        <fieldset>
          <legend>好きな果物:</legend>

          <label htmlFor="fruit_apple">りんご</label>
          <input id="fruit_apple" name="fruit" 
            type="checkbox" value="apple"
            checked={this.state.fruit.includes('apple')}
            onChange={this.handleChange} />

          <label htmlFor="fruit_melon">メロン</label>
          <input id="fruit_melon" name="fruit" 
            type="checkbox" value="melon"
            checked={this.state.fruit.includes('melon')}
            onChange={this.handleChange} />
        </fieldset>

        <button type="button" onClick={this.show}>
          送信
        </button>

      </form>
    );
  }
}
