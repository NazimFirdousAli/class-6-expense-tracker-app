import Child from './child.js'
import './App.css';
import {TransProvider} from './transContext.js';

function App() {
  return (
    <div>
      <TransProvider>
      <Child/>
      </TransProvider>
    </div>
  )
}

export default App;
