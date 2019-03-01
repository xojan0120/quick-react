import React, { Component } from 'react';

// prop-typesライブリをインポート
import PropTypes from 'prop-types';

export default class MyHelloDef extends Component {
  render() {
    return(
      <div>こんにちは、{this.props.name}さん！</div>
    );
  }
}

// 型情報を宣言
MyHelloDef.propTypes = {
  name: PropTypes.string
};

// 既定値の定義
MyHelloDef.defaultProps = {
  name: 'きていち'
};
