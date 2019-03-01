import React, { Component } from 'react';

export default class MyEvent extends Component {

  // 入力ボックス変更時にメッセージ出力
  show(e) {
    console.log(`${this.props.greet}, ${e.target.value}!!`);
  }

  render() {
    return(
      <form>
        <label htmlFor="txtName">名前：</label>
        <input id="txtName" type="text" onChange={this.show.bind(this)} />
      </form>
    );
  }
}
