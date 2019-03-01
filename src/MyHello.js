import React, { Component } from 'react';

// prop-typesライブリをインポート
import PropTypes from 'prop-types';

export default class MyHello extends Component {
  render() {
    return(
      <div>こんにちは、{this.props.name}さん！</div>
    );
  }
}

// 型情報を宣言
MyHello.propTypes = {
  name: PropTypes.string.isRequired
};
