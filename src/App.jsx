import logo from './logo.svg';
import './App.css';
import { MainComponent } from './components/main';
import { NavBar } from './components/navBar';
import { SubComponent}  from './components/sub';
import "./styles/main.css";
import { About } from './components/navBar';
import { useState } from 'react';
import { Anni } from './components/Anni';

function App() {
  const [page,setPage]=useState(About);
  const [pro,setPro]=useState(false)
 
  return (
    // <div className="App">
      <div className='container'>
        <div className='sub'>
          <SubComponent/>

        </div>
        <div className='main-main' >
          <div className='nav'>
            <NavBar props={page} setPage={setPage} setPro={setPro} />
          </div>
          <div className='main'>
            <MainComponent page={page} setPage={setPage} setPro={setPro}/>
          </div>

        </div>
      </div>
      
    // </div>
  );
}

export default App;
