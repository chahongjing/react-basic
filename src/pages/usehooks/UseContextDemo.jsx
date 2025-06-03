import React, { useState, useContext, createContext } from 'react';
import '../Concepts/styles.css';

// 创建 Context
const ThemeContext = createContext('light');

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === 'light' ? '#fff' : '#222',
        color: theme === 'light' ? '#222' : '#fff',
        border: '1px solid #ccc',
        padding: '0.5rem 1.5rem',
        borderRadius: 6,
        marginTop: 8,
      }}
    >
      当前主题：{theme}（点击切换）
    </button>
  );
}

function NestedComponent() {
  return (
    <div style={{ marginTop: 16 }}>
      <span>嵌套组件也能消费 context：</span>
      <ThemedButton />
    </div>
  );
}

function UseContextDemo() {
  const [showDemoCode, setShowDemoCode] = useState(false);
  return (
    <div className="concepts">
      <section className="concepts-header">
        <h1>useContext 用法详解</h1>
        <p className="subtitle">高效管理全局状态，避免多层 props 传递</p>
      </section>
      <div className="content">
        <section className="concept-section">
          <h2>1. 创建 Context</h2>
          <pre>{`const ThemeContext = createContext('light');`}</pre>
        </section>
        <section className="concept-section">
          <h2>2. 提供 Provider</h2>
          <pre>{`<ThemeContext.Provider value={value}>
  <App />
</ThemeContext.Provider>`}</pre>
        </section>
        <section className="concept-section">
          <h2>3. 消费 Context</h2>
          <pre>{`const value = useContext(ThemeContext);`}</pre>
        </section>
        <section className="concept-section">
          <h2>4. 代码示例</h2>
          <pre>{`const ThemeContext = createContext('light');

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      当前主题：{theme}
    </button>
  );
}`}</pre>
        </section>
        <section className="concept-section">
          <h2>5. 实时演示</h2>
          <ThemeProvider>
            <ThemedButton />
            <NestedComponent />
          </ThemeProvider>
          <button
            className="show-code-btn"
            onClick={() => setShowDemoCode(v => !v)}
            style={{ marginTop: 16 }}
          >
            {showDemoCode ? '收起代码' : '查看代码'}
          </button>
          {showDemoCode && (
            <pre>{`function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      当前主题：{theme}
    </button>
  );
}

function NestedComponent() {
  return (
    <div>
      <span>嵌套组件也能消费 context：</span>
      <ThemedButton />
    </div>
  );
}

<ThemeProvider>
  <ThemedButton />
  <NestedComponent />
</ThemeProvider>`}</pre>
          )}
        </section>
        <section className="concept-section">
          <h2>6. 注意事项</h2>
          <ul className="notes">
            <li>Context 适合全局性、跨层级的数据。</li>
            <li>避免滥用 context，频繁变更的数据建议用状态管理库。</li>
            <li>Provider 的 value 变化会导致所有消费组件重新渲染。</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default UseContextDemo; 