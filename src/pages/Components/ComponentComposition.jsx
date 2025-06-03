import React, { useState, useRef } from 'react';
import './styles.css';

// 受控组件示例
const ControlledInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="这是一个受控输入框"
    />
  );
};

// 非受控组件示例
const UncontrolledInput = React.forwardRef((props, ref) => {
  return (
    <input
      type="text"
      ref={ref}
      placeholder="这是一个非受控输入框"
    />
  );
});

// 子组件示例
const ChildComponent = ({ data, onDataChange }) => {
  return (
    <div className="child-component">
      <h3>子组件</h3>
      <p>从父组件接收的数据: {data}</p>
      <button onClick={() => onDataChange('子组件更新了数据')}>
        更新父组件数据
      </button>
    </div>
  );
};

// 高阶组件示例
const withLogging = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log('组件已挂载:', WrappedComponent.name);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

// 使用高阶组件的组件
const EnhancedComponent = withLogging(({ name }) => (
  <div className="enhanced-component">
    <h3>增强的组件</h3>
    <p>你好, {name}!</p>
  </div>
));

function ComponentComposition() {
  const [controlledValue, setControlledValue] = useState('');
  const [parentData, setParentData] = useState('父组件的初始数据');
  const uncontrolledInputRef = React.useRef(null);
  const [showParentDemoCode, setShowParentDemoCode] = useState(false);
  const [showHOCDemoCode, setShowHOCDemoCode] = useState(false);
  const [showControlledDemoCode, setShowControlledDemoCode] = useState(false);
  const [showUncontrolledDemoCode, setShowUncontrolledDemoCode] = useState(false);

  const handleUncontrolledSubmit = (e) => {
    e.preventDefault();
    alert('非受控输入框的值: ' + uncontrolledInputRef.current.value);
  };

  return (
    <div className="component-page">
      <section className="header">
        <h1>组件嵌套</h1>
        <p className="subtitle">React 组件之间的交互和复用</p>
      </section>

      <div className="content">
        <section className="concept-section">
          <h2>1. 父子组件通信</h2>
          <div className="demo-box">
            <h3>Props 传递和回调函数</h3>
            <pre>
              {`// 父组件
const Parent = () => {
  const [data, setData] = useState('初始数据');
  return <Child data={data} onDataChange={setData} />;
};

// 子组件
const Child = ({ data, onDataChange }) => {
  return (
    <div>
      <p>{data}</p>
      <button onClick={() => onDataChange('新数据')}>
        更新数据
      </button>
    </div>
  );
};`} 
</pre>
            <div className="demo">
              <h4>实时演示</h4>
              <ChildComponent
                data={parentData}
                onDataChange={setParentData}
              />
              <button
                className="show-code-btn"
                onClick={() => setShowParentDemoCode(v => !v)}
              >
                {showParentDemoCode ? '收起代码' : '查看代码'}
              </button>
              {showParentDemoCode && (
                <pre>{`const [parentData, setParentData] = useState('父组件的初始数据');
<ChildComponent data={parentData} onDataChange={setParentData} />`}</pre>
              )}
            </div>
          </div>
        </section>

        <section className="concept-section">
          <h2>2. 组件复用模式</h2>
          <div className="demo-box">
            <h3>高阶组件 (HOC) 示例</h3>
            <pre>
              {`const withLogging = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log('组件已挂载');
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};`}
            </pre>
            <div className="explanation">
              <p>组件复用模式：</p>
              <ul>
                <li>高阶组件 (HOC)</li>
                <li>Render Props</li>
                <li>自定义 Hooks</li>
                <li>组合模式</li>
              </ul>
            </div>
            <div className="demo">
              <h4>实时演示</h4>
              <EnhancedComponent name="访客" />
              <button
                className="show-code-btn"
                onClick={() => setShowHOCDemoCode(v => !v)}
              >
                {showHOCDemoCode ? '收起代码' : '查看代码'}
              </button>
              {showHOCDemoCode && (
                <pre>{`const EnhancedComponent = withLogging(({ name }) => (
  <div>
    <h3>增强的组件</h3>
    <p>你好, {name}!</p>
  </div>
));`}</pre>
              )}
            </div>
          </div>
        </section>

        <section className="concept-section">
          <h2>3. 受控组件 vs 非受控组件</h2>
          <div className="demo-box">
            <h3>受控组件示例</h3>
            <pre>
              {`const ControlledInput = ({ value, onChange }) => {
  return (
    <input
      value={value}
      onChange={onChange}
    />
  );
};`}
            </pre>
            <div className="demo">
              <h4>受控组件演示</h4>
              <ControlledInput
                value={controlledValue}
                onChange={(e) => setControlledValue(e.target.value)}
              />
              <p>当前值: {controlledValue}</p>
              <button
                className="show-code-btn"
                onClick={() => setShowControlledDemoCode(v => !v)}
              >
                {showControlledDemoCode ? '收起代码' : '查看代码'}
              </button>
              {showControlledDemoCode && (
                <pre>{`const [controlledValue, setControlledValue] = useState('');
<ControlledInput value={controlledValue} onChange={e => setControlledValue(e.target.value)} />`}</pre>
              )}
            </div>

            <h3>非受控组件示例</h3>
            <pre>
              {`const UncontrolledInput = React.forwardRef((props, ref) => {
  return <input ref={ref} />;
});`}
            </pre>
            <div className="demo">
              <h4>非受控组件演示</h4>
              <form onSubmit={handleUncontrolledSubmit}>
                <UncontrolledInput ref={uncontrolledInputRef} />
                <button type="submit">提交</button>
              </form>
              <button
                className="show-code-btn"
                onClick={() => setShowUncontrolledDemoCode(v => !v)}
              >
                {showUncontrolledDemoCode ? '收起代码' : '查看代码'}
              </button>
              {showUncontrolledDemoCode && (
                <pre>{`const uncontrolledInputRef = useRef(null);
<form onSubmit={handleUncontrolledSubmit}>
  <UncontrolledInput ref={uncontrolledInputRef} />
  <button type="submit">提交</button>
</form>`}</pre>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ComponentComposition; 