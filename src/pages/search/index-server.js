/*
 * @Author: json
 * @Date: 2021-07-11 17:18:01
 * @LastEditTime: 2021-07-11 22:16:28
 * @LastEditors: json
 * @Description:服务端渲染页面
 * @FilePath: /webpack/src/pages/search/index-server.js
 */
// import React from 'react';
const React = require('react');
// import './search.less';
const s = require('./search.less')
// import logo from '../../images/logo.png';
const logo = require('../../images/logo.png');
// import test1 from '../../images/test1.jpg';
const test1 = require('../../images/test1.jpg');
// import test2 from '../../images/test2.jpg';
const test2 = require('../../images/test2.jpg'); 

class Search extends React.Component {
  constructor() {
    super(...arguments);
    // this.state = {
    //   TestDynamic: null,
    // };
  }

  // loadComponent() {
  //   import('./test-dynamic.js').then((TestDynamic) => {
  //     this.setState({
  //       TestDynamic: TestDynamic.default,
  //     });
  //   });
  // }

  render() {
    // const { TestDynamic } = this.state;
    return (
      <div className="search-text">
        <img src={logo} />
        React Dom Redner
        <div style={{ marginTop: '20px' }}>
          <img src={test2} />
          <img src={test1} />
        </div>
        {/* <div onClick={this.loadComponent.bind(this)}>点击加载动态组件</div>
        { TestDynamic ? <TestDynamic /> : '等待加载' } */}
      </div>
    );
  }
}
module.exports = <Search/>