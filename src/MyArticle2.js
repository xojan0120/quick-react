import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import MyNew from './MyNew';
import MyPage from './MyPage';

export default class MyArticle2 extends Component {

  render() {
    // idパラメータを取得
    const id = this.props.match.params.id;
    const path = this.props.match.path;
    const url = this.props.match.url
    return(
      <div>
        <div>No.{id}の記事</div>
        {/* 子コンポーネントへのリンク */}
        [<Link to={`${url}/pages/1`}>1</Link>]
        [<Link to={`${url}/pages/2`}>2</Link>]
        <hr />
        <Route path={`${path}/pages/:page`} component={MyPage} />
      </div>
    );
  }
}
