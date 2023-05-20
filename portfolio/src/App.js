import {useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';


function App() {

  const [selectedNav, notSelectedNav] = useState ('AboutMe');
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
                <Content/>
        <Footer/>
        
       
      </header>
    </div>
  );
}

export default App;
