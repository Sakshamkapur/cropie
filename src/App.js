import React,{useState} from 'react';
import Uploader from './components/uploader';
import Cropper from './components/cropper';
import Viewer from './components/viewer';
import './App.css';

function App() {
  var [activeScreen,setActiveScreen] = useState(0);
  var [file,setFile] = useState(null);
  switch(activeScreen){
    case 0: return <Uploader setFile={setFile} setActiveScreen={setActiveScreen} />; break;
    case 1: {
      if(file) return <Cropper file={file} setFile={setFile} setActiveScreen={setActiveScreen} />
      else{
        setActiveScreen(0)
      }
      break;
    }
    case 2: return <Viewer setActiveScreen={setActiveScreen} />; break;
    default: return <Uploader setFile={setFile} setActiveScreen={setActiveScreen} />; break;
  }

  
}

export default App;
