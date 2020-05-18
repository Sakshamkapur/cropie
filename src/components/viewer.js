import React,{ useState,useEffect } from 'react';
import {storage} from '../firebase';

export default function Viewer(props){
    var [images,setImages] = useState([]);
    var {setActiveScreen} = props;
    
    async function getImages(){
        var arr = []
        storage.ref().child('images/').listAll().then((res)=>{
            res.items.forEach((imgref)=>{
                imgref.getDownloadURL().then((url)=>{
                    arr.push(url);
                    if(res.items.length === arr.length){
                        setImages(arr)
                    }
                })
            });
        })
    }

    useEffect(()=>{
        getImages();
    },[])

    return (<React.Fragment>
        <div className="back" onClick={()=>setActiveScreen(1)}>
            <i class="fa fa-arrow-left"></i>
        </div>
        <h3 style={{width: "80vw",margin: "5% auto"}}>Uploaded Images</h3>
        <div className="masonry my2">
            {images.map((img)=>(
                <div className="aspect">
                    <a download="sample.png" target="_blank" href={img}>
                        <img src={img} />
                    </a>
                    {/* <a class="download" href={img} target="_blank" download>Download</a> */}
                </div>
            ))}
        </div>
    </React.Fragment>)
}