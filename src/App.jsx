import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Concepts from './pages/Concepts'
import UseHooks from './pages/Usehooks'
import UseContextDemo from './pages/usehooks/UseContextDemo'
import DataDemo from './pages/Data'
import FunctionComponent from './pages/Components/FunctionComponent'
import ClassComponent from './pages/Components/ClassComponent'
import ComponentComposition from './pages/Components/ComponentComposition'
import Todo from './pages/Todo'
import './App.css'

function App() {
  return (
    <Router>
      <div className="tech-bg"></div>
      <header className="global-header">
        <h1>全栈开发-Demo</h1>
      </header>
      <div className="app">
        
        <nav className="nav">
          <ul>
            <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>首页</NavLink></li>
            <li><NavLink to="/concepts" className={({ isActive }) => isActive ? 'active' : ''}>React 概念</NavLink></li>
            <li><NavLink to="/components/function" className={({ isActive }) => isActive ? 'active' : ''}>函数组件</NavLink></li>
            <li><NavLink to="/components/class" className={({ isActive }) => isActive ? 'active' : ''}>类组件</NavLink></li>
            <li><NavLink to="/components/composition" className={({ isActive }) => isActive ? 'active' : ''}>组件嵌套</NavLink></li>
            <li><NavLink to="/usehooks" className={({ isActive }) => isActive ? 'active' : ''}>Hooks 详解</NavLink></li>
            <li><NavLink to="/usecontext" className={({ isActive }) => isActive ? 'active' : ''}>useContext 用法</NavLink></li>
            <li><NavLink to="/data" className={({ isActive }) => isActive ? 'active' : ''}>接口请求</NavLink></li>
            <li><NavLink to="/todo" className={({ isActive }) => isActive ? 'active' : ''}>Todo List</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>参考资料</NavLink></li>
          </ul>
        </nav>

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/concepts" element={<Concepts />} />
            <Route path="/components/function" element={<FunctionComponent />} />
            <Route path="/components/class" element={<ClassComponent />} />
            <Route path="/components/composition" element={<ComponentComposition />} />
            <Route path="/usehooks" element={<UseHooks />} />
            <Route path="/usecontext" element={<UseContextDemo />} />
            <Route path="/data" element={<DataDemo />} />
            <Route path="/about" element={<About />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
