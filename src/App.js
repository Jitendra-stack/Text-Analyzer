import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React , {useState} from 'react';
import Alert from './components/Alert';

let name="Jitendra";

function App() {

  const [mode, setmode] = useState('light');     // whether dark mode is enabled or not
  const [alert, setalert] = useState(null);      // we are passing alert as an object

  const showAlert = (message,type)=>{
      
      setalert ({
         
        msg:message,
        ty:type
      })

      setTimeout(() => {
         
        setalert(null);
      },1000);
  }

  const toggleMode = ()=>{
       
      if(mode==='light')
      {
        setmode('dark');
        document.body.style.backgroundColor ='#042743';
        showAlert("Dark mode has been enabled","success");
        document.title="TextUtils-Dark Mode";
      }
      else
      {
        // document.body.style.backgroundColor='White';
        setmode('light');
        document.body.style.backgroundColor ='White';
        showAlert("Light mode has been enabled","success");
        document.title="TextUtils-Light Mode";
      }
  }

  return (
    
    <>

  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert} />
  <div className="container my-3">
  <TextForm heading="Enter the text to analyze below" mode={mode} />
  {/* <About/> */}
  </div>
 
    </>
  );
}



export default App;
