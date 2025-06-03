import React, { useState } from 'react';
import './styles.css';

// 纯函数组件示例
const Greeting = ({ name }) => {
  return <h2>你好, {name}!</h2>;
};

// Props 使用示例
const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>角色: {user.role}</p>
      <p>邮箱: {user.email}</p>
    </div>
  );
};

function FunctionComponent() {
  const [name, setName] = useState('');
  const [showPropsDemoCode, setShowPropsDemoCode] = useState(false);
  const [showPureDemoCode, setShowPureDemoCode] = useState(false);

  // 示例用户数据
  const users = [
    { id: 1, name: '张三', role: '开发者', email: 'zhangsan@example.com' },
    { id: 2, name: '李四', role: '设计师', email: 'lisi@example.com' },
    { id: 3, name: '王五', role: '产品经理', email: 'wangwu@example.com' },
  ];

  return (
    <div className="component-page">
      <section className="header">
        <h1>函数组件</h1>
        <p className="subtitle">React 中最基础的组件形式</p>
      </section>

      <div className="content">
        <section className="concept-section">
          <h2>1. 基本结构</h2>
          <div className="demo-box">
            <h3>最简单的函数组件</h3>
            <pre>
              {`function Welcome() {
  return <h1>欢迎使用 React!</h1>;
}`}
            </pre>
            <div className="explanation">
              <p>函数组件是返回 JSX 的普通 JavaScript 函数。它们：</p>
              <ul>
                <li>接收 props 作为参数</li>
                <li>返回 React 元素</li>
                <li>没有自己的状态（除非使用 Hooks）</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="concept-section">
          <h2>2. Props 的使用</h2>
          <div className="demo-box">
            <h3>Props 传递示例</h3>
            <pre>
              {`// 父组件
<UserCard user={userData} />

// 子组件
const UserCard = ({ user }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.role}</p>
    </div>
  );
};`}
            </pre>
            <div className="demo">
              <h4>实时演示</h4>
              <div className="user-cards">
                {users.map(user => (
                  <UserCard key={user.id} user={user} />
                ))}
              </div>
              <button
                className="show-code-btn"
                onClick={() => setShowPropsDemoCode(v => !v)}
              >
                {showPropsDemoCode ? '收起代码' : '查看代码'}
              </button>
              {showPropsDemoCode && (
                <pre>{`const users = [
  { id: 1, name: '张三', role: '开发者', email: 'zhangsan@example.com' },
  ...
];
{users.map(user => (
  <UserCard key={user.id} user={user} />
))}`}</pre>
              )}
            </div>
          </div>
        </section>

        <section className="concept-section">
          <h2>3. 纯函数概念</h2>
          <div className="demo-box">
            <h3>纯函数组件示例</h3>
            <pre>
              {`// 纯函数组件
const Greeting = ({ name }) => {
  return <h2>你好, {name}!</h2>;
};`}
            </pre>
            <div className="explanation">
              <p>纯函数组件的特点：</p>
              <ul>
                <li>相同的输入总是产生相同的输出</li>
                <li>没有副作用（不修改外部状态）</li>
                <li>不依赖外部状态</li>
                <li>易于测试和维护</li>
              </ul>
            </div>
            <div className="demo">
              <h4>实时演示</h4>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="输入你的名字"
                className="name-input"
              />
              <Greeting name={name || '访客'} />
              <button
                className="show-code-btn"
                onClick={() => setShowPureDemoCode(v => !v)}
              >
                {showPureDemoCode ? '收起代码' : '查看代码'}
              </button>
              {showPureDemoCode && (
                <pre>{`const [name, setName] = useState('');
<input
  type="text"
  value={name}
  onChange={e => setName(e.target.value)}
  placeholder="输入你的名字"
/>
<Greeting name={name || '访客'} />`}</pre>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FunctionComponent; 