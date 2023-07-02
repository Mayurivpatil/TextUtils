import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import Text from './Components/Text';
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showalert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const replacemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background='#031660';
      showalert("Dark mode has been enabled","Success");
    }
    else{
      setMode('light');
      document.body.style.background='white';
      showalert("Light mode has been enabled","Success")
    }
  }
  return (
    <div>
      <Navbar title="TextUtils" mode={mode} replacemode={replacemode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Text showalert={showalert} heading="TextUtils-Word counter, Character counter, Remove extra spaces" mode={mode}/>
      </div>
      </div>
  );
}

export default App;

