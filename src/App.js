import './App.css';
import Header from './componets/Header/Header'
import Sidebar from './componets/Sidebar/Sidebar'

function App() {
  return (
    // BEM convention 
    <div className="app">
      <Header/> 

      <div className="app__body">
        <Sidebar/>
        {/* sidebar */}
        {/* feed */}
        {/* wigets */}
      </div>
        

    </div>

    
  );
}

export default App;
