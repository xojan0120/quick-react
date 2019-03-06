import React, { Component } from 'react';

export default class MyList extends Component {
  constructor(props) {
    super(props);

    // Stateの初期値を設定
    this.state = {
      fruit: []
    };

    // thisを固定
    this.handleChange = this.handleChange.bind(this);
    this.show = this.show.bind(this);
  }

  // 変更をStateに反映
  handleChange(e) {
    // 選択値を格納するための配列
    const data = [];
    // option要素を走査し、選択されたものを取得
    const opts = e.target.options;
    for(let i=0; i<opts.length;i++) {
      if(opts[i].selected) {
        data.push(opts[i].value);
      }
    }
    this.setState({
      [e.target.name]: data
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
          size="2" multiple={true}
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
