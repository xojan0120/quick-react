import React, { Component } from 'react';

export default class MyCover extends Component {
  render() {
    // 文字列の中で変数やJSを展開したい場合は、バッククオートで囲み
    // ${式}を使う。
    const url = `https://wings.msn.to/books/${this.props.isbn}/${this.props.isbn}.jpg`;
    return(
      <img src={url} title={this.props.title} />
    );
  }
}
