// Reactの基本ライブラリのインポート
import React, { Component } from 'react';
// 画像、スタイルシートのインポート
import logo from './logo.svg';
import './App.css';
// ルーティング関連の機能をインポート
import { BrowserRouter as Router, Link, Route, Switch, NavLink } from "react-router-dom";
// ルーティングで利用するコンポーネントをインポート
import MyTop from './MyTop';
import MyHello from './MyHello';
import MyArticle2 from './MyArticle2';

export default class App extends Component {
  render() {
    const current = { color: 'Red', backgroundColor:'pink' };
    // Routerでルーティング機能を有効化
    return (
      <Router>
        <div>
          {/* ルーティング経由のリンクリストを準備 */}
          <ul>
            <li><Link to="/">トップ</Link></li>
            <li><Link to="/hello">Hello</Link></li>
            <li><Link to="/article/108">公開記事</Link></li>
            <li><Link to="/hoge">どれにもマッチしないリンク</Link></li>
          </ul>

          <hr />

          {/* NavLinkでリンク先が現在のパスと同じ場合に、異なるスタイルを適用できる */}
          <ul>
            <li><NavLink exact to="/" activeStyle={current}>/</NavLink></li>
            <li><NavLink to="/hello" activeStyle={current}>/hello</NavLink></li>
            <li><NavLink to="/article/108" activeStyle={current}>/article</NavLink></li>
          </ul>

          <hr />

          {/* ルーティング設定(条件にマッチしたコンポーネントを出力) */}
          <Switch>
            {/* exact属性はpath属性を完全一致で判定せよ、という意味
                これがないと、/helloや/articleも"/"にマッチしてしまい
                MyTopしか表示されなくなる */}
            <Route exact path="/" component={MyTop} />
            <Route path="/hello" component={() => <MyHello name="hoge" />} />
            <Route path="/article/:id" component={MyArticle2} />
            {/* path属性無しのRouteを最後に書けば、上記でマッチしないURLの場合に
                表示するコンポーネントを指定することもできる */}
            <Route component={MyTop} />
          </Switch>
        </div>
      </Router>
    );
  }
}
