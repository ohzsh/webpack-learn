import React from 'react';
import ReactDOM from 'react-dom';
import './search.less'
import logo from '../../images/logo.png';
import test1 from '../../images/test1.jpg';
import test2 from '../../images/test2.jpg';
import { helloworld } from '../index/hello-world';
import { a } from './tree-shaking';
document.write(helloworld())
class Search extends React.Component {
  render() { 
    return <div className="search-text">
      <img src={logo} />
      React Dom Redner {a()}
      <div style={{ marginTop:'20px' }}>
        <img src={test2} />
        <img src={test1} />
      </div>
    </div>
  }
}
ReactDOM.render(<Search/>, document.getElementById('root'))