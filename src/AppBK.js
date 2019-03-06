// Reactの基本ライブラリのインポート
import React, { Component } from 'react';
// 画像、スタイルシートのインポート
import logo from './logo.svg';
import './App.css';

// Appコンポーネントの定義
class App extends Component {
  // 描画用のrenderメソッド(必須)
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Reactへようこそ</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

// Appクラスコンポーネントをエクスポート
// ここでエクスポートしたものをsrc/index.jsで
// インポートして使用する。
export default App;
