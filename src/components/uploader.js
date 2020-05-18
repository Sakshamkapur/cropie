import React,{useState,useRef} from 'react';

export default function Uploader(props){
    var [isdragOver,setIsDragOver] = useState(false);
    var [errorNotification,setError] = useState(null);
    var image = useRef(null);
    var {setFile,setActiveScreen} = props;

    function handleDragEnter(e) {
       e.preventDefault();
    }
    function handleDragOver(e) {
        e.preventDefault();
        if (!isdragOver) {
            setIsDragOver(true)
        }
    }
    function handleDragLeave(e) {
        e.preventDefault();
        setIsDragOver(false)
    }
    function handleDrop(e) {
        e.preventDefault();
        let file = e.dataTransfer.files[0];
        
        validate(file)
    }

    function handleAddImage(e) {
        e.preventDefault();
        let file = e.target.files[0];
        
        validate(file)
           
    }

    function validate(file){
        var fileType;
        if(!file){
            setFile(null);
            setError("No File Found!");
            setIsDragOver(false);
            setTimeout(() => {
                setError(null)
            }, 3000);
            return false;
        }
        fileType = file.type.split("/")[0];
        if(!fileType)return;
        if (fileType !== "image") {
            setFile(null);
            setError("Please add an Image File");
            setIsDragOver(false);
            setTimeout(() => {
                setError(null)
            }, 3000);
            return false;
        }
        
        var _URL = window.URL || window.webkitURL;
        var img = new Image();
        var objectUrl = _URL.createObjectURL(file);
        img.onload = function () {
            if(this.width !== 1024 || this.height != 1024){
                setFile(null);
                setIsDragOver(false);
                setError("The Image is not 1024 x 1024");
                setTimeout(() => {
                    setError(null)
                }, 3000);
                return false;
            }else{
                setFile(file);
                setActiveScreen(1)
                setIsDragOver(false);
            }
            _URL.revokeObjectURL(objectUrl);
        }
        img.src = objectUrl;
    }
    
    let dragOverClass = isdragOver
        ? `display-box drag-over`
        : `display-box`;
    
    let error = errorNotification
        ? <div className="error-notification">
            <p>{errorNotification}</p>
        </div>
        : null;
       
       
    return (
        
        <div className="image-uploader-wrapper">
            <div className={dragOverClass}>
                <div className="icon-text-box">
                    <div className="upload-icon">
                        <i className="fa fa-upload" aria-hidden="true" />
                    </div>
                    <div className="upload-text">
                        Drag an Image or Browse... 
                    </div>
                    {error}
                </div>
                <div>
                    <input
                        type="file"
                        ref={image}
                        id="upload-image-input"
                        className="upload-image-input"
                        accept="image/*"
                        onDrop={handleDrop}
                        onDragEnter={handleDragEnter}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onChange={handleAddImage}
                    />
                </div>
            </div>
            <div className="rules">
                <p>*Please Make sure you are adding only one image (in case of multiple images selected the first one will be picked)</p>
                <p>*Please Make sure that the Image is 1024 x 1024</p>
            </div>
        </div>

    );
}
 

 