import React, { Component, useState } from 'react';
import './styles.css';

// 计数器组件示例
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 1
    };
  }

  componentDidMount() {
    console.log('组件已挂载');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('计数器已更新');
    }
  }

  componentWillUnmount() {
    console.log('组件即将卸载');
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + this.state.step
    }));
  }

  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - this.state.step
    }));
  }

  changeStep = (e) => {
    this.setState({ step: Number(e.target.value) });
  }

  render() {
    return (
      <div className="counter">
        <h3>当前计数: {this.state.count}</h3>
        <div className="controls">
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
        </div>
        <div className="step-control">
          <label>步长: </label>
          <input
            type="number"
            value={this.state.step}
            onChange={this.changeStep}
            min="1"
            max="10"
          />
        </div>
      </div>
    );
  }
}

function ClassComponent() {
  const [showStateDemoCode, setShowStateDemoCode] = useState(false);
  return (
    <div className="component-page">
      <section className="header">
        <h1>类组件</h1>
        <p className="subtitle">使用 ES6 类语法创建的 React 组件</p>
      </section>

      <div className="content">
        <section className="concept-section">
          <h2>1. 类组件的基本结构</h2>
          <div className="demo-box">
            <h3>类组件示例</h3>
            <pre>
              {`class Welcome extends React.Component {
  render() {
    return <h1>你好, {this.props.name}</h1>;
  }
}`}
            </pre>
            <div className="explanation">
              <p>类组件的特点：</p>
              <ul>
                <li>必须继承 React.Component</li>
                <li>必须实现 render() 方法</li>
                <li>可以使用 this 访问组件实例</li>
                <li>可以维护自己的状态</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="concept-section">
          <h2>2. 生命周期方法简介</h2>
          <div className="demo-box">
            <h3>主要生命周期方法</h3>
            <pre>
              {`class Example extends React.Component {
  constructor(props) {
    super(props);
    // 初始化状态
  }

  componentDidMount() {
    // 组件挂载后执行
  }

  componentDidUpdate(prevProps, prevState) {
    // 组件更新后执行
  }

  componentWillUnmount() {
    // 组件卸载前执行
  }

  render() {
    return <div>内容</div>;
  }
}`}
            </pre>
            <div className="explanation">
              <p>生命周期方法的用途：</p>
              <ul>
                <li>constructor: 初始化状态和绑定方法</li>
                <li>componentDidMount: 进行数据获取、订阅等操作</li>
                <li>componentDidUpdate: 响应 props 或 state 的变化</li>
                <li>componentWillUnmount: 清理工作（取消订阅等）</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="concept-section">
          <h2>3. State 的概念和使用</h2>
          <div className="demo-box">
            <h3>State 管理示例</h3>
            <pre>
              {`class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
}`}
            </pre>
            <div className="explanation">
              <p>State 使用要点：</p>
              <ul>
                <li>在 constructor 中初始化</li>
                <li>使用 setState 更新状态</li>
                <li>状态更新是异步的</li>
                <li>可以基于前一个状态更新</li>
              </ul>
            </div>
            <div className="demo">
              <h4>实时演示</h4>
              <Counter />
              <button
                className="show-code-btn"
                onClick={() => setShowStateDemoCode(v => !v)}
              >
                {showStateDemoCode ? '收起代码' : '查看代码'}
              </button>
              {showStateDemoCode && (
                <pre>{`class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, step: 1 };
  }
  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + this.state.step
    }));
  }
  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - this.state.step
    }));
  }
  changeStep = (e) => {
    this.setState({ step: Number(e.target.value) });
  }
  render() {
    return (
      <div>
        <h3>当前计数: {this.state.count}</h3>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
        <input type="number" value={this.state.step} onChange={this.changeStep} />
      </div>
    );
  }
}`}</pre>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ClassComponent; 