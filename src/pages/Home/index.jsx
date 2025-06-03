import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const modules = [
  {
    title: 'React 概念',
    desc: 'JSX、条件渲染、列表渲染、样式处理、事件处理等核心知识点。',
    to: '/concepts',
  },
  
  {
    title: '函数组件',
    desc: '函数组件的结构、props、纯函数思想与实时演示。',
    to: '/components/function',
  },
  {
    title: '类组件',
    desc: '类组件结构、生命周期、state 管理与实时演示。',
    to: '/components/class',
  },
  {
    title: '组件组合',
    desc: '父子通信、复用模式、受控与非受控组件等进阶用法。',
    to: '/components/composition',
  },
  {
    title: 'Hooks 详解',
    desc: 'useState、useEffect、useRef、useMemo、useCallback 等常用 Hooks 用法与演示。',
    to: '/usehooks',
  },
  {
    title: 'useContext 用法',
    desc: '全局状态管理与跨层级数据传递，Provider/Consumer 实战。',
    to: '/usecontext',
  },
  {
    title: '数据交互',
    desc: 'fetch、axios 请求、异步数据处理模式与最佳实践。',
    to: '/data',
  },
  {
    title: 'Todo List',
    desc: 'Todo List 案例，包括添加、删除、编辑、排序等功能。',
    to: '/todo',
  },
  {
    title: '参考资料',
    desc: '一些常见的参考资料，方便大家查看。',
    to: '/about',
  },
];

function Home() {
  

  return (
    <div className="home">
      <section className="hero">
        <h1>React 基础培训</h1>
        <p className="subtitle">掌握 React 核心概念，开启前端开发之旅</p>
      </section>

      <section className="modules-section">
        <h2>知识模块导航</h2>
        <div className="modules-grid">
          {modules.map((mod) => (
            <div className="module-card" key={mod.to}>
              <h3>{mod.title}</h3>
              <p>{mod.desc}</p>
              <Link className="learn-btn" to={mod.to}>进入学习</Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home; 