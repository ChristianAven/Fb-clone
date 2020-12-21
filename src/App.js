import './App.css';
import Header from './componets/Header/Header'
import Sidebar from './componets/Sidebar/Sidebar'
import Feed from './componets/Feed/Feed'; 
import Widgets from "./componets/Widgets/Widgets";
function App() {
  return (
    // BEM convention 
    <div className="app">
      <Header/> 

      <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>
        

    </div>

    
  );
}

export default App;
