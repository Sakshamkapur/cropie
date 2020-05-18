import React,{ useState,useEffect,useRef, Profiler} from 'react';
import Draggable from 'react-draggable';
import {storage} from '../firebase';

const options={
    "vertical":{
      initialX:512-(365/2),
      initialY:512-(450/2),
      width: 365,
      height: 450
    },
    "horizontal":{
      initialX:512-(755/2),
      initialY:512-(450/2),
      width: 755,
      height: 450
    },
    "horizontal small":{
      initialX:512-(365/2),
      initialY:512-(212/2),
      width: 365,
      height: 212
    },
    "gallery":{
      initialX:512-(380/2),
      initialY:512-(380/2),
      width: 380,
      height: 380
    }
}
export default function Cropper(props){
    var {file,setFile, setActiveScreen} = props;

    var [filename,setFileName] = useState(file?URL.createObjectURL(file):null);
    var [coordinate,setCoordinate] = useState({x: options["vertical"].initialX,y: options["vertical"].initialY});
    var [activeTab,setActiveTab] = useState("vertical");
    var [mainImg,setImg] = useState(null);
    var [progress,setProgress] = useState(0);
    var [isUploading,setIsUploading] = useState(false);
    var preview = useRef(null);


    useEffect(()=>{
        if(!!preview.current.childNodes[0]){
          var node = preview.current.childNodes[0].getContext('2d');
          var width = options[activeTab].width;
          var height = options[activeTab].height;
          node.clearRect(0, 0, preview.current.childNodes[0].width, preview.current.childNodes[0].height);  
          preview.current.childNodes[0].width = width;
          preview.current.childNodes[0].height = height;
          preview.current.childNodes[0].setAttribute('id',activeTab);
          node.drawImage(mainImg, coordinate.x, coordinate.y, width, height, 0, 0,  width, height);
        }
      },[coordinate])
      
      function download(){
        var link = document.createElement('a');
        link.download = filename;
        link.href = document.getElementById(activeTab).toDataURL()
        link.click();
      }
      function getDimensions({target:img}){
        var canvas = document.createElement('canvas')
        
        if(img.offsetWidth !== 1024 || img.offsetHeight !== 1024){
          alert("Looks Like Image is not 1024 x 1024!!")
          setActiveScreen(0)
        }
        setImg(img)
        var width = options[activeTab].width;
        var height = options[activeTab].height;
        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d').drawImage(img, coordinate.x, coordinate.y, width, height, 0, 0, width, height);
        canvas.setAttribute('id',activeTab);
        preview.current.appendChild(canvas)
      }
    
      function onDrag(e,data){
        setCoordinate({x: data.x,y: data.y})
      }
      
      function handleUpload (){
        const canvas = preview.current.childNodes[0];
        setIsUploading(true)
        canvas.toBlob(function(blob) {
          var width = options[activeTab].width;
          var height = options[activeTab].height;
          const image = new File([blob], file.name+"("+width+"x"+height+")", blob)
            const uploadTask = storage.ref(`images/${file.name+"("+width+"x"+height+")"}`).put(image);
            uploadTask.on('state_changed', 
            (snapshot) => {
              // progrss function ....
              const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
              setProgress(progress)
            },(error) => {
              alert(error)
              setIsUploading(false)
            },()=>{
              setActiveScreen(2)
              setIsUploading(false)
            });
        });
      }
    
      const dragHandlers = {onDrag};
      return (<React.Fragment>
    
        <div className="actions">
          <div>
            <button className="btn danger" onClick={()=>{setFile(null); setActiveScreen(0)}}>Remove</button>
          </div>
          
          {Object.keys(options).map(name=>(
            <button className={name === activeTab?"btn mr active":"btn mr"} onClick={()=>{setCoordinate({x:options[name].initialX,y:options[name].initialY}); setActiveTab(name) }} >{name}</button>
          ))}

          {/* {activeTab === "custom"&&<div className="custominp">
              <input type="number" value={custom.w} onChange={(e)=>setCustom({h: custom.h,w: e.target.value})} placeholder="width" />
              <span>x</span>
              <input type="number" value={custom.h} onChange={(e)=>setCustom({w: custom.w,h: e.target.value})} placeholder="height" />
            </div>
          }
     */}
          <div>
            <button className="btn active mr" onClick={()=>download()}>Download</button>
            <button className="btn success mr" onClick={handleUpload}>Upload {isUploading &&<span>{" "+progress+"%"}</span>}</button>
            <button className="btn" onClick={()=>setActiveScreen(2)}>View Images</button>
          </div>
        </div>
        <div className="container">
          <div>
            <div className="media">
              <Draggable bounds="parent" position={coordinate} defaultPosition={{x: options[activeTab].initialX, y: options[activeTab].initialY}} {...dragHandlers}>
                <div className={activeTab}>
                </div>
              </Draggable>
              <img src={filename} onLoad={getDimensions} />
            </div>
          </div>
          <div className="preview" ref={preview}></div>
        </div>
      </React.Fragment>
    );
}