import React, { useState } from 'react';
import './styles.css';

function Concepts() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('jsx');
  const [showJsxDemoCode, setShowJsxDemoCode] = useState(false);
  const [showConditionalDemoCode, setShowConditionalDemoCode] = useState(false);
  const [showListDemoCode, setShowListDemoCode] = useState(false);
  const [showStylesDemoCode, setShowStylesDemoCode] = useState(false);
  const [showEventDemoCode, setShowEventDemoCode] = useState(false);
  
  // 示例数据
  const items = [
    { id: 1, text: 'React 基础概念' },
    { id: 2, text: '组件和 Props' },
    { id: 3, text: 'State 和生命周期' },
    { id: 4, text: '事件处理' },
    { id: 5, text: '条件渲染' },
    { id: 6, text: '列表渲染' },
  ];

  // 内联样式示例
  const inlineStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
  };

  // JSX 实时演示
  const [jsxName, setJsxName] = useState('React');

  const [eventMessage, setEventMessage] = useState('');

  return (
    <div className="concepts">
      <section className="concepts-header">
        <h1>React 核心概念详解</h1>
        <p className="subtitle">深入理解 React 的重要概念</p>
      </section>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'jsx' ? 'active' : ''}`}
          onClick={() => setActiveTab('jsx')}
        >
          JSX 基础
        </button>
        <button 
          className={`tab ${activeTab === 'conditional' ? 'active' : ''}`}
          onClick={() => setActiveTab('conditional')}
        >
          条件渲染
        </button>
        <button 
          className={`tab ${activeTab === 'list' ? 'active' : ''}`}
          onClick={() => setActiveTab('list')}
        >
          列表渲染
        </button>
        <button 
          className={`tab ${activeTab === 'styles' ? 'active' : ''}`}
          onClick={() => setActiveTab('styles')}
        >
          样式处理
        </button>
        <button
          className={`tab ${activeTab === 'event' ? 'active' : ''}`}
          onClick={() => setActiveTab('event')}
        >
          事件处理
        </button>
      </div>

      <div className="content">
        {activeTab === 'jsx' && (
          <section className="concept-section">
            <h2>JSX 基础</h2>
            <div className="demo-box">
              <h3>1. JSX 语法简介</h3>
              <pre>{`const element = <h1>Hello, world!</h1>;`}</pre>
              <div className="explanation">
                <ul>
                  <li>JSX 是 JavaScript 的语法扩展，最终会被编译为 React.createElement。</li>
                  <li>JSX 语法类似 HTML，但有一些不同（如 class 要写成 className）。</li>
                </ul>
              </div>
            </div>
            <div className="demo-box">
              <h3>2. 表达式插值</h3>
              <pre>{`const name = 'React';
const element = <h1>Hello, {name}!</h1>;`}</pre>
              <div className="explanation">
                <ul>
                  <li>在 JSX 中可以用 <b>{'{}'}</b> 包裹任意 JS 表达式。</li>
                </ul>
              </div>
            </div>
            <div className="demo-box">
              <h3>3. 属性写法</h3>
              <pre>{`<img src={avatarUrl} alt="头像" />
<button disabled={isDisabled}>按钮</button>`}</pre>
              <div className="explanation">
                <ul>
                  <li>属性值用 <b>{'{}'}</b> 包裹 JS 表达式。</li>
                  <li>属性名采用小驼峰命名（如 onClick、tabIndex）。</li>
                </ul>
              </div>
            </div>
            <div className="demo-box">
              <h3>4. 注释写法</h3>
              <pre>{`{/* 这是 JSX 注释 */}`}</pre>
              <div className="explanation">
                <ul>
                  <li>JSX 注释必须写在 <b>{'{}'}</b> 内部。</li>
                </ul>
              </div>
            </div>
            <div className="demo-box">
              <h3>5. 注意事项</h3>
              <ul className="notes">
                <li>JSX 必须有一个根元素（可用 &lt;&gt;...&lt;/&gt; 片段）。</li>
                <li>class 要写成 className，for 要写成 htmlFor。</li>
                <li>JSX 标签必须闭合。</li>
              </ul>
            </div>
            <div className="demo-box">
              <h3>6. 实时演示</h3>
              <div className="demo">
                <input
                  type="text"
                  value={jsxName}
                  onChange={e => setJsxName(e.target.value)}
                  placeholder="输入名称"
                  style={{ marginBottom: 12 }}
                />
                <div style={{ fontSize: 22, fontWeight: 600 }}>
                  {'<h1>Hello, '}{jsxName || 'React'}{'!</h1>'}
                </div>
                <div style={{ marginTop: 8 }}>
                  实际渲染效果：
                  <span style={{ marginLeft: 8, color: '#007bff', fontWeight: 500 }}>
                    Hello, {jsxName || 'React'}!
                  </span>
                </div>
              </div>
              <button
                className="show-code-btn"
                onClick={() => setShowJsxDemoCode(v => !v)}
              >
                {showJsxDemoCode ? '收起代码' : '查看代码'}
              </button>
              {showJsxDemoCode && (
                <pre>{`<input
  type="text"
  value={jsxName}
  onChange={e => setJsxName(e.target.value)}
  placeholder="输入名称"
/>
<div>{'<h1>Hello, '}{jsxName}{'!</h1>'}</div>`}</pre>
              )}
            </div>
          </section>
        )}

        {activeTab === 'conditional' && (
          <section className="concept-section">
            <h2>条件渲染</h2>
            <div className="demo-box">
              <h3>1. 使用 if 语句</h3>
              <pre>
                {`if (isLoggedIn) {
  return <UserGreeting />;
} else {
  return <GuestGreeting />;
}`}
              </pre>
            </div>

            <div className="demo-box">
              <h3>2. 使用三元运算符</h3>
              <pre>
                {`{isLoggedIn ? (
  <UserGreeting />
) : (
  <GuestGreeting />
)}`}
              </pre>
            </div>

            <div className="demo-box">
              <h3>3. 使用 && 运算符</h3>
              <pre>
                {`{isLoggedIn && <UserGreeting />}`}
              </pre>
            </div>

            <div className="demo-box">
              <h3>实时演示</h3>
              <div className="demo">
                <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                  {isLoggedIn ? '退出登录' : '登录'}
                </button>
                <p>
                  {isLoggedIn ? '欢迎回来！' : '请登录以继续。'}
                </p>
              </div>
              <button
                className="show-code-btn"
                onClick={() => setShowConditionalDemoCode(v => !v)}
              >
                {showConditionalDemoCode ? '收起代码' : '查看代码'}
              </button>
              {showConditionalDemoCode && (
                <pre>{`const [isLoggedIn, setIsLoggedIn] = useState(false);
<button onClick={() => setIsLoggedIn(!isLoggedIn)}>
  {isLoggedIn ? '退出登录' : '登录'}
</button>
<p>
  {isLoggedIn ? '欢迎回来！' : '请登录以继续。'}
</p>`}</pre>
              )}
            </div>
          </section>
        )}

        {activeTab === 'list' && (
          <section className="concept-section">
            <h2>列表渲染</h2>
            <div className="demo-box">
              <h3>1. 使用 map() 方法</h3>
              <pre>
                {`{items.map(item => (
  <li key={item.id}>{item.text}</li>
))}`}
              </pre>
            </div>

            <div className="demo-box">
              <h3>2. 列表渲染注意事项</h3>
              <ul className="notes">
                <li>始终为列表项提供唯一的 key 属性</li>
                <li>key 应该在兄弟元素之间是唯一的</li>
                <li>避免使用数组索引作为 key</li>
              </ul>
            </div>

            <div className="demo-box">
              <h3>实时演示</h3>
              <div className="demo">
                <ul className="demo-list">
                  {items.map(item => (
                    <li key={item.id} className="list-item">
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className="show-code-btn"
                onClick={() => setShowListDemoCode(v => !v)}
              >
                {showListDemoCode ? '收起代码' : '查看代码'}
              </button>
              {showListDemoCode && (
                <pre>{`const items = [
  { id: 1, text: 'React 基础概念' },
  ...
];
<ul>
  {items.map(item => (
    <li key={item.id}>{item.text}</li>
  ))}
</ul>`}</pre>
              )}
            </div>
          </section>
        )}

        {activeTab === 'styles' && (
          <section className="concept-section">
            <h2>样式处理</h2>
            <div className="demo-box">
              <h3>1. className 属性</h3>
              <pre>
                {`<div className="container">
  <h1 className="title">标题</h1>
</div>`}
              </pre>
              <div className="style-demo">
                <div className="container">
                  <h1 className="title">使用 className 的标题</h1>
                </div>
              </div>
            </div>

            <div className="demo-box">
              <h3>2. 内联样式</h3>
              <pre>
                {`const style = {
  backgroundColor: '#f8f9fa',
  padding: '20px',
  borderRadius: '8px'
};

<div style={style}>内容</div>`}
              </pre>
              <div className="style-demo">
                <div style={inlineStyle}>
                  使用内联样式的容器
                </div>
              </div>
              <button
                className="show-code-btn"
                onClick={() => setShowStylesDemoCode(v => !v)}
              >
                {showStylesDemoCode ? '收起代码' : '查看代码'}
              </button>
              {showStylesDemoCode && (
                <pre>{`const inlineStyle = {
  backgroundColor: '#f8f9fa',
  padding: '20px',
  borderRadius: '8px',
};
<div style={inlineStyle}>内容</div>`}</pre>
              )}
            </div>

            <div className="demo-box">
              <h3>3. 样式处理最佳实践</h3>
              <ul className="notes">
                <li>优先使用 className 进行样式管理</li>
                <li>内联样式适用于动态样式</li>
                <li>可以使用 CSS Modules 避免样式冲突</li>
                <li>考虑使用 CSS-in-JS 解决方案</li>
              </ul>
            </div>
          </section>
        )}

        {activeTab === 'event' && (
          <section className="concept-section">
            <h2>事件处理</h2>
            <div className="demo-box">
              <h3>1. 基本用法</h3>
              <pre>{`<button onClick={handleClick}>点击我</button>

function handleClick() {
  alert('按钮被点击了');
}`}</pre>
              <div className="explanation">
                <ul>
                  <li>React 事件命名采用小驼峰（如 onClick）。</li>
                  <li>事件处理函数直接传递函数引用，不要加括号。</li>
                </ul>
              </div>
            </div>
            <div className="demo-box">
              <h3>2. 事件对象 event</h3>
              <pre>{`function handleInputChange(event) {
  console.log(event.target.value);
}`}</pre>
              <div className="explanation">
                <ul>
                  <li>事件处理函数的第一个参数是合成事件对象（SyntheticEvent）。</li>
                  <li>可通过 event.target 访问触发事件的元素。</li>
                </ul>
              </div>
            </div>
            <div className="demo-box">
              <h3>3. 常见事件类型</h3>
              <ul className="notes">
                <li>onClick —— 点击事件</li>
                <li>onChange —— 输入框内容变化</li>
                <li>onSubmit —— 表单提交</li>
                <li>onMouseEnter/onMouseLeave —— 鼠标移入移出</li>
                <li>onKeyDown/onKeyUp —— 键盘事件</li>
              </ul>
            </div>
            <div className="demo-box">
              <h3>4. 事件绑定与参数传递</h3>
              <pre>{`<button onClick={() => handleClick('参数')}>带参数点击</button>

function handleClick(msg) {
  alert(msg);
}`}</pre>
              <div className="explanation">
                <ul>
                  <li>通过箭头函数可向事件处理函数传递参数。</li>
                </ul>
              </div>
            </div>
            <div className="demo-box">
              <h3>5. 注意事项</h3>
              <ul className="notes">
                <li>事件处理函数不要直接调用（不要加括号）。</li>
                <li>不要在 render 期间直接调用 setState。</li>
                <li>事件对象是 React 合成事件，行为与原生事件略有不同。</li>
              </ul>
            </div>
            <div className="demo-box">
              <h3>6. 实时演示</h3>
              <div className="demo">
                <button onClick={() => setEventMessage('按钮被点击！')}>点击按钮</button>
                <input
                  style={{ marginLeft: 12 }}
                  placeholder="输入内容"
                  onChange={e => setEventMessage('输入框内容：' + e.target.value)}
                />
                <button
                  style={{ marginLeft: 12 }}
                  onClick={() => setEventMessage('带参数事件：Hello!')}
                >
                  带参数事件
                </button>
                <div style={{ marginTop: 12, color: '#007bff', fontWeight: 500 }}>
                  {eventMessage}
                </div>
              </div>
              <button
                className="show-code-btn"
                onClick={() => setShowEventDemoCode(v => !v)}
              >
                {showEventDemoCode ? '收起代码' : '查看代码'}
              </button>
              {showEventDemoCode && (
                <pre>{`const [eventMessage, setEventMessage] = useState('');
<button onClick={() => setEventMessage('按钮被点击！')}>点击按钮</button>
<input onChange={e => setEventMessage('输入框内容：' + e.target.value)} />
<button onClick={() => setEventMessage('带参数事件：Hello!')}>带参数事件</button>`}</pre>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default Concepts; 