import React, { Component } from 'react';
import MyNew from './MyNew';

export default class MyArticle extends Component {

  renderIfNew(isNew) {
    if(isNew) {
      return <MyNew />
    }
  }

  render() {
    return(
      <React.Fragment>
        <dt>
          <a href={this.props.url}>
            {this.props.title}

            {/* ?: 演算子 */}
            {/* {this.props.isNew ? <MyNew /> : null } */}

            {/* && 演算子 */}
            {/* {this.props.isNew && <MyNew />}

            {/* if文(即時関数を使う) */}
            {/*
            {(
              ()=>{
                if(this.props.isNew) {
                  return <MyNew />
                }
              }
            )()}
            */}

            {/* 複雑な条件分岐は関数／メソッドに切り出す */}
            {this.renderIfNew(this.props.isNew)}
          </a>
        </dt>
        <dd>
          {this.props.description}
        </dd>
      </React.Fragment>
    );
  }
}
