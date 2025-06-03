import React from 'react';
import './styles.css';

function About() {
  return (
    <div className="about">
      

      <section className="references">
        <h2>参考资料</h2>
        <ul>
        <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox" target="_blank" rel="noopener noreferrer">flex 布局的基本概念 - CSS：层叠样式表 | MDN</a></li>
          <li><a href="https://es6.ruanyifeng.com/" target="_blank" rel="noopener noreferrer">ES6 入门教程</a></li>
          <li><a href="https://javascript.info/" target="_blank" rel="noopener noreferrer">现代 JavaScript 教程</a></li>
          <li><a href="https://zh-hans.react.dev/" target="_blank" rel="noopener noreferrer">React 官方中文文档</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web" target="_blank" rel="noopener noreferrer">MDN Web Docs</a></li>
          <li><a href="https://xiaomi.github.io/hiui/" target="_blank" rel="noopener noreferrer">HIUI</a></li>
          <li><a href="https://ant.design/" target="_blank" rel="noopener noreferrer">Ant Design - 一套企业级 UI 设计语言和 React 组件库</a></li>
          <li><a href="https://lesscss.org/" target="_blank" rel="noopener noreferrer">Less 帮助文档</a></li>
          <li><a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">Sass 帮助文档</a></li>
        </ul>
      </section>
    </div>
  );
}

export default About; 