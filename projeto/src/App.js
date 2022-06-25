import React from 'react';
import Home from './pages/Home'
import '../src/pages/styles.css'

function App() {
  return (
  <><header className="header">
      <div className="toolbar">
        <div>
          <span>Conecta dev</span>
        </div>
        <div>
          <button>Novo Post</button>
          <span>img1</span>
          <span>img2</span>
        </div>
      </div>
    </header><main className="main">
      <div className='navbar'>navbar</div>
      <div className='feed'>feed</div>      
      </main></> 
  );  
}

export default App;
