import React, { Component } from 'react';

export default class MyType extends Component {
  render() {
    console.log(this.props.value);
    return(
      <p>結果はコンソールを確認して下さい。</p>
    );
  }
}
