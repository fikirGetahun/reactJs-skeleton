 

import React from "react";
import { useState, useRef } from "react";
import imageCompression from 'browser-image-compression';
// import { useDispatch } from "react-redux";
// import { albumActions, artistAddSliceActions } from "../../store/postData";
import '../../css/helperComponent.css';
// import imageToBase64 from "fixed-image-to-base64";
  // drag drop file component
const DragDropFile = ( props ) => {
//   const dispatch = useDispatch();
  // drag state
  const [dragActive, setDragActive] = useState(false);
  const [photo, setPhoto] = useState();
  const [buffer, setBuffer] = useState();
  // ref
  const [se, setSe] = useState();
  const inputRef = useRef(null);
  //   if (dragActive) {
  //     alert("yes");
  //   } else {
  //     alert("no");
  //   }

  // handle drag events

  const options = {
    maxSizeMB: 0.45,

    useWebWorker: true
  }
  const handleDrag = function (e) {


    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
    
      setDragActive(true);

    } else if (e.type === "dragleave") {

      setDragActive(false);
    //   alert('handle drag leave')
    }
  };

 async function image_to_base64(file) {
    let result_base64 = await new Promise((resolve) => {
        let fileReader = new FileReader();
        fileReader.onload = (e) => resolve(fileReader.result);
        fileReader.onerror = (error) => {
            console.log(error)
            alert('An Error occurred please try again, File might be corrupt');
        };
        fileReader.readAsDataURL(file);
    });
    return result_base64;
}

  // triggers when file is dro pped
  const handleDrop = async function (e) {
     e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
      setPhoto(e.dataTransfer.files[0]);
   
        var file = e.dataTransfer.files[0];
        let cphoto;
       

    
        try {
          // const compressedFile = await imageCompression(imageFile, options);
          const compressedFile = await imageCompression(file,options)
          cphoto = compressedFile;
          console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB

          let xx =await image_to_base64(compressedFile)
          console.log(xx)
      
          props.onChange(photo, props.dbName, xx)
        } catch (error) {
          console.log(error);
        }
        // reader.onloadend = async function() {
        //   //  setPhoto(reader.result)
        //   // console.log('RESULT', reader.result)
        var reader = new FileReader();
        reader.onloadend = function() {
          //  setPhoto(reader.result)
          // console.log('RESULT', reader.result)
           
            
        }
        let x =   reader.readAsDataURL(cphoto);
        // props.onChange(photo, props.dbName, x  )

         
        // }
       
      // let x =   reader.readAsDataURL(cphoto);
        //  props.onChange(photo, props.dbName, x  )
        //  setPhoto(reader.result)
        setBuffer(reader.result)

        // console.log(photo)
      //  alert(photo)
      
        //dbName is the database name of the photo inputer


    //   if (props == "albumInput") {
    //     // dispatch(albumActions.setCover(e.dataTransfer.files[0]));
    //   } else if (props == "artistInput") {
    //     // dispatch(
    //     // //   artistAddSliceActions.setartist_avatar(e.dataTransfer.files[0])
    //     // );
    //   }
    }
  };

  // triggers when file is selected with click
  const handleChange = async function  (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
      setPhoto(e.target.files[0]);
      
      var file = e.target.files[0];
      var q;
   
  
      try {
        // const compressedFile = await imageCompression(imageFile, options);
        const compressedFile = await imageCompression(file,options)
 
        console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB

        let xx =await image_to_base64(compressedFile)
        console.log(xx)
    
        props.onChange(photo, props.dbName, xx)
      } catch (error) {
        console.log(error);
      }

       //  setPhoto(reader.result)
       setBuffer(q)

      // console.log(photo)
    //  alert(photo)

     

    //   if (props == "albumInput") {
    //     setSe("albumInput");
    //     // dispatch(albumActions.setCover(e.target.files[0]));
    //   } else if (props == "artistInput") {
    //     // dispatch(artistAddSliceActions.setartist_avatar(e.target.files[0]));
    //   }
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="vstack gap-3">
           {/* <i className="">x</i> */}
           <div>
           { photo? <a onClick={()=>setPhoto()} className="btn btn-outline-danger "> X </a>   : <i className=""></i> }

           </div>
      <div className=" "> 
        <img
          className="img-thumbnail"
          style={{width:"40%"}}
          src={photo ? URL.createObjectURL(photo) : photo}
          alt="No Image Selected"
        />
      </div>
      <div className="d-flex justify-content-center ">
        <form
          id="form-file-upload"
          onDragEnter={handleDrag}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={inputRef}
            type="file"
            id="input-file-upload"
            multiple={true}
            onChange={handleChange}
            name={props.dbName}
          />
          <label
            id="label-file-upload"
            htmlFor="input-file-upload"
            className={dragActive ? "drag-active" : ""}
          >
            <div>
              <p>Drag and drop your file here or</p>
              <button className="upload-button" onClick={onButtonClick}>
                Upload a file
              </button>
            </div>
          </label>
           {dragActive && (
            <div
              id="drag-file-element"
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            ></div>
          )} 
        </form>
      </div>
    </div>
  );
};
export default DragDropFile;
 