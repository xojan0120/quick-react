import React, { Component } from 'react';

// prop-typesライブリをインポート
import PropTypes from 'prop-types';

// 独自クラス
export class Member { }

export default class MyProp extends Component {
  render() {
    console.log(this.props);
    return(
      <p>結果はコンソールを確認して下さい。</p>
    );
  }
}

// 型情報を宣言
MyProp.propTypes = {
  prop1:PropTypes.instanceOf(Member),
  prop2:PropTypes.oneOf(['男','女','不明']),
  prop3:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  prop4:PropTypes.arrayOf(PropTypes.number),
  prop5:PropTypes.shape({
    name: PropTypes.string.isRequired,
    age:  PropTypes.number,
    sex:  PropTypes.oneOf(['男','女','不明']),
  }),
};
