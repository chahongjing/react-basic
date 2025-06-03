import React, { useState } from 'react';
import '../Concepts/styles.css';

function DataDemo() {
  const [fetchData, setFetchData] = useState(null);
  const [axiosData, setAxiosData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showFetchDemoCode, setShowFetchDemoCode] = useState(false);
  const [showAxiosDemoCode, setShowAxiosDemoCode] = useState(false);

  // fetch 示例
  const handleFetch = async () => {
    setLoading(true);
    setFetchData(null);
    try {
      const res = await fetch('http://apis.juhe.cn/ip/ipNewV3?key=key&ip=122.193.105.215');
      const data = await res.json();
      setFetchData(data);
    } finally {
      setLoading(false);
    }
  };

  // axios 示例（伪代码，需安装 axios）
  const handleAxios = async () => {
    setLoading(true);
    setAxiosData(null);
    try {
      const axios = await import('axios');
      const res = await axios.default.get('http://t.weather.itboy.net/api/weather/city/101030100');
      setAxiosData(res.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="concepts">
      <section className="concepts-header">
        <h1>数据交互与异步处理</h1>
        <p className="subtitle">常见数据请求方式与异步模式</p>
      </section>
      <div className="content">
        <section className="concept-section">
          <h2>1. fetch API 使用</h2>
          <pre>{`fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data));`}</pre>
          <div className="explanation">
            <ul>
              <li>fetch 是浏览器原生提供的异步请求 API。</li>
              <li>返回 Promise，支持 async/await。</li>
            </ul>
          </div>
          <div className="demo">
            <button onClick={handleFetch} disabled={loading}>请求数据（fetch）</button>
            {fetchData && <pre>{JSON.stringify(fetchData, null, 2)}</pre>}
            <button
              className="show-code-btn"
              onClick={() => setShowFetchDemoCode(v => !v)}
              style={{ marginLeft: 16 }}
            >
              {showFetchDemoCode ? '收起代码' : '查看代码'}
            </button>
            {showFetchDemoCode && (
              <pre>{`const handleFetch = async () => {
  setLoading(true);
  setFetchData(null);
  try {
    const res = await fetch('http://t.weather.itboy.net/api/weather/city/101030100');
    const data = await res.json();
    setFetchData(data);
  } finally {
    setLoading(false);
  }
};`}</pre>
            )}
          </div>
        </section>
        <section className="concept-section">
          <h2>2. axios 库介绍</h2>
          <pre>{`import axios from 'axios';

axios.get('https://api.example.com/data')
  .then(res => console.log(res.data));`}</pre>
          <div className="explanation">
            <ul>
              <li>axios 是流行的第三方 HTTP 请求库，API 更丰富，支持拦截器、取消请求等。</li>
              <li>用法与 fetch 类似，返回 Promise。</li>
            </ul>
          </div>
          <div className="demo">
            <button onClick={handleAxios} disabled={loading}>请求数据（axios）</button>
            {axiosData && <pre>{JSON.stringify(axiosData, null, 2)}</pre>}
            <button
              className="show-code-btn"
              onClick={() => setShowAxiosDemoCode(v => !v)}
              style={{ marginLeft: 16 }}
            >
              {showAxiosDemoCode ? '收起代码' : '查看代码'}
            </button>
            {showAxiosDemoCode && (
              <pre>{`const handleAxios = async () => {
  setLoading(true);
  setAxiosData(null);
  try {
    const axios = await import('axios');
    const res = await axios.default.get('http://t.weather.itboy.net/api/weather/city/101030100');
    setAxiosData(res.data);
  } finally {
    setLoading(false);
  }
};`}</pre>
            )}
          </div>
        </section>
        <section className="concept-section">
          <h2>3. 异步数据处理模式</h2>
          <pre>{`async function getData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    // 错误处理
  }
}`}</pre>
          <div className="explanation">
            <ul>
              <li>推荐使用 async/await 处理异步请求，代码更简洁。</li>
              <li>注意错误处理和 loading 状态管理。</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DataDemo; 