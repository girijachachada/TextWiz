import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark Mode has been enabled.","success");
      // document.title = "TextWiz - Dark Mode Enabled"
      // setInterval(() => {
      //   document.title = "TextWiz is Amazing"
      // }, 1000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled.","success");
    }
  }

  return (
    <>
      <Navbar title="TextWiz" mode={mode} toggleMode={toggleMode} aboutText="About Us"/>
      <Alert alert={alert} />
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
