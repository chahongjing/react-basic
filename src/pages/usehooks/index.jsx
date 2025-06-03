import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import './styles.css';

const tabList = [
  { key: 'useState', label: 'useState' },
  { key: 'useEffect', label: 'useEffect' },
  { key: 'useRef', label: 'useRef' },
  { key: 'useMemo', label: 'useMemo' },
  { key: 'useCallback', label: 'useCallback' },
];

function UseHooks() {
  const [activeTab, setActiveTab] = useState('useState');
  const [showStateDemoCode, setShowStateDemoCode] = useState(false);
  const [showEffectDemoCode, setShowEffectDemoCode] = useState(false);
  const [showRefDemoCode, setShowRefDemoCode] = useState(false);
  const [showMemoDemoCode, setShowMemoDemoCode] = useState(false);
  const [showCallbackDemoCode, setShowCallbackDemoCode] = useState(false);

  // useState 示例
  const [count, setCount] = useState(0);

  // useEffect 示例
  const [effectValue, setEffectValue] = useState(1);
  useEffect(() => {
    let timer = setTimeout(() => {
      setEffectValue((effectValue) => effectValue + 1);
      //setEffectValue(`当前计数：${count}`);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // useRef 示例
  const inputRef = useRef(null);
  const [refValue, setRefValue] = useState('');
  const focusInput = () => {
    inputRef.current && inputRef.current.focus();
  };

  // useMemo 示例
  const [number, setNumber] = useState(1);
  const expensiveResult = useMemo(() => {
    let total = 0;
    for (let i = 1; i <= number * 100000; i++) {
      total += i % 10;
    }
    return total;
  }, [number]);

  // useCallback 示例
  const [callbackCount, setCallbackCount] = useState(0);
  const memoizedCallback = useCallback(() => {
    setCallbackCount(c => c + 1);
  }, []);

  return (
    <div className="concepts">
      <section className="concepts-header">
        <h1>React 常用 Hooks 详解</h1>
        <p className="subtitle">分解讲解 useState、useEffect、useRef、useMemo、useCallback</p>
      </section>

      <div className="tabs">
        {tabList.map(tab => (
          <button
            key={tab.key}
            className={`tab ${activeTab === tab.key ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="content">
        {activeTab === 'useState' && (
          <section className="concept-section">
            <h2>useState</h2>
            <div className="demo-box">
              <h3>基本用法</h3>
              <pre>{`const [count, setCount] = useState(0);`}</pre>
              <div className="explanation">
                <ul>
                  <li>useState 用于在函数组件中声明状态变量。</li>
                  <li>setCount 用于更新 count 的值，组件会重新渲染。</li>
                </ul>
              </div>
              <div className="demo">
                <button onClick={() => setCount(count - 1)}>-</button>
                <span style={{ margin: '0 1rem' }}>{count}</span>
                <button onClick={() => setCount(count + 1)}>+</button>
                <button
                  className="show-code-btn"
                  onClick={() => setShowStateDemoCode(v => !v)}
                  style={{ marginLeft: 16 }}
                >
                  {showStateDemoCode ? '收起代码' : '查看代码'}
                </button>
                {showStateDemoCode && (
                  <pre>{`const [count, setCount] = useState(0);
<button onClick={() => setCount(count - 1)}>-</button>
<span>{count}</span>
<button onClick={() => setCount(count + 1)}>+</button>`}</pre>
                )}
              </div>
            </div>
          </section>
        )}
        {activeTab === 'useEffect' && (
          <section className="concept-section">
            <h2>useEffect</h2>
            <div className="demo-box">
              <h3>基本用法</h3>
              <pre>{`useEffect(() => {
  // 副作用逻辑
  return () => {
    // 清理逻辑
  };
}, [依赖]);`}</pre>
              <div className="explanation">
                <ul>
                  <li>useEffect 用于处理副作用，如数据请求、订阅、手动 DOM 操作等。</li>
                  <li>依赖数组变化时，副作用会重新执行。</li>
                </ul>
              </div>
              <div className="demo">
                <p>{effectValue}</p>
                <button onClick={() => setEffectValue(1)}>计数 +1</button>
                <button
                  className="show-code-btn"
                  onClick={() => setShowEffectDemoCode(v => !v)}
                  style={{ marginLeft: 16 }}
                >
                  {showEffectDemoCode ? '收起代码' : '查看代码'}
                </button>
                {showEffectDemoCode && (
                  <pre>{`useEffect(() => {
  setEffectValue('当前计数：' + count);
}, [count]);`}</pre>
                )}
              </div>
            </div>
          </section>
        )}
        {activeTab === 'useRef' && (
          <section className="concept-section">
            <h2>useRef</h2>
            <div className="demo-box">
              <h3>基本用法</h3>
              <pre>{`const inputRef = useRef(null);
<input ref={inputRef} />`}</pre>
              <div className="explanation">
                <ul>
                  <li>useRef 可获取 DOM 节点或保存可变变量。</li>
                  <li>改变 ref.current 不会引起组件重新渲染。</li>
                </ul>
              </div>
              <div className="demo">
                <input ref={inputRef} value={refValue} onChange={e => setRefValue(e.target.value)} placeholder="输入内容" />
                <button onClick={focusInput} style={{ marginLeft: 8 }}>聚焦输入框</button>
                <button
                  className="show-code-btn"
                  onClick={() => setShowRefDemoCode(v => !v)}
                  style={{ marginLeft: 16 }}
                >
                  {showRefDemoCode ? '收起代码' : '查看代码'}
                </button>
                {showRefDemoCode && (
                  <pre>{`const inputRef = useRef(null);
<input ref={inputRef} />
<button onClick={focusInput}>聚焦输入框</button>`}</pre>
                )}
              </div>
            </div>
          </section>
        )}
        {activeTab === 'useMemo' && (
          <section className="concept-section">
            <h2>useMemo</h2>
            <div className="demo-box">
              <h3>基本用法</h3>
              <pre>{`const result = useMemo(() => {
  // 计算逻辑
  return value;
}, [依赖]);`}</pre>
              <div className="explanation">
                <ul>
                  <li>useMemo 用于缓存计算结果，避免不必要的重复计算。</li>
                  <li>依赖变化时才会重新计算。</li>
                </ul>
              </div>
              <div className="demo">
                <input type="number" value={number} min={1} max={20} onChange={e => setNumber(Number(e.target.value))} />
                <span style={{ marginLeft: 12 }}>计算结果：{expensiveResult}</span>
                <button
                  className="show-code-btn"
                  onClick={() => setShowMemoDemoCode(v => !v)}
                  style={{ marginLeft: 16 }}
                >
                  {showMemoDemoCode ? '收起代码' : '查看代码'}
                </button>
                {showMemoDemoCode && (
                  <pre>{`const [number, setNumber] = useState(1);
const expensiveResult = useMemo(() => {
  let total = 0;
  for (let i = 1; i <= number * 100000; i++) {
    total += i % 10;
  }
  return total;
}, [number]);`}</pre>
                )}
              </div>
            </div>
          </section>
        )}
        {activeTab === 'useCallback' && (
          <section className="concept-section">
            <h2>useCallback</h2>
            <div className="demo-box">
              <h3>基本用法</h3>
              <pre>{`const memoizedFn = useCallback(() => {
  // 逻辑
}, [依赖]);`}</pre>
              <div className="explanation">
                <ul>
                  <li>useCallback 返回记忆化的回调函数，避免子组件不必要的渲染。</li>
                  <li>依赖变化时才会返回新函数。</li>
                </ul>
              </div>
              <div className="demo">
                <button onClick={memoizedCallback}>点击调用 memoizedCallback</button>
                <span style={{ marginLeft: 12 }}>调用次数：{callbackCount}</span>
                <button
                  className="show-code-btn"
                  onClick={() => setShowCallbackDemoCode(v => !v)}
                  style={{ marginLeft: 16 }}
                >
                  {showCallbackDemoCode ? '收起代码' : '查看代码'}
                </button>
                {showCallbackDemoCode && (
                  <pre>{`const [callbackCount, setCallbackCount] = useState(0);
const memoizedCallback = useCallback(() => {
  setCallbackCount(c => c + 1);
}, []);
<button onClick={memoizedCallback}>点击调用 memoizedCallback</button>`}</pre>
                )}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Hooks 对比说明区块 */}
      <section className="hooks-compare-section">
        <h2>五大常用 Hook 对比</h2>
        <div className="hooks-compare-table-wrapper">
          <table className="hooks-compare-table">
            <thead>
              <tr>
                <th>Hook</th>
                <th>作用/用途</th>
                <th>典型用法</th>
                <th>适用场景/特点</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>useState</b></td>
                <td>声明组件的本地状态变量</td>
                <td><code>const [count, setCount] = useState(0)</code></td>
                <td>任何需要响应式数据的地方（如表单、计数器、UI 状态等）</td>
              </tr>
              <tr>
                <td><b>useEffect</b></td>
                <td>处理副作用（如数据请求、订阅、DOM 操作等）</td>
                <td><code>useEffect(() =&gt; &#123; ... &#125;, [deps])</code></td>
                <td>组件渲染后需要执行副作用逻辑时（类似生命周期函数）</td>
              </tr>
              <tr>
                <td><b>useRef</b></td>
                <td>获取/保存可变引用值（如 DOM 节点、定时器 id 等）</td>
                <td><code>const inputRef = useRef(null)</code></td>
                <td>需要访问 DOM 或保存不会引发重新渲染的可变数据时</td>
              </tr>
              <tr>
                <td><b>useMemo</b></td>
                <td>缓存计算结果，避免不必要的重复计算</td>
                <td><code>const value = useMemo(() =&gt; ..., [deps])</code></td>
                <td>计算量大、依赖不常变的场景，只有依赖变化时才重新计算</td>
              </tr>
              <tr>
                <td><b>useCallback</b></td>
                <td>缓存函数引用，避免子组件不必要的渲染</td>
                <td><code>const fn = useCallback(() =&gt; ..., [deps])</code></td>
                <td>需要将函数作为 props 传递给子组件，且依赖不变时保持函数引用稳定</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="hooks-compare-notes">
          <ul>
            <li><b>useState</b>：每次 setState 都会触发组件重新渲染。</li>
            <li><b>useEffect</b>：可模拟生命周期，依赖数组为空时只在挂载/卸载时执行。</li>
            <li><b>useRef</b>：更改 ref.current 不会触发组件重新渲染。</li>
            <li><b>useMemo</b>：只有依赖变化时才重新计算，常用于性能优化。</li>
            <li><b>useCallback</b>：只有依赖变化时才返回新函数，常用于优化子组件渲染。</li>
          </ul>
        </div>
        <div className="hooks-compare-code">
          <pre>{`// useState
const [count, setCount] = useState(0);

// useEffect
useEffect(() => {
  document.title = 计数: ${count};
}, [count]);

// useRef
const inputRef = useRef(null);

// useMemo
const expensiveValue = useMemo(() => computeExpensive(count), [count]);

// useCallback
const handleClick = useCallback(() => setCount(c => c + 1), []);`}</pre>
        </div>
      </section>
    </div>
  );
}

export default UseHooks; 