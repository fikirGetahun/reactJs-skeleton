 

import React from "react";
import { useState, useRef } from "react";
// import { useDispatch } from "react-redux";
// import { albumActions, artistAddSliceActions } from "../../store/postData";
import '../../css/helperComponent.css';
// drag drop file component
const DragDropFile = ( props ) => {
//   const dispatch = useDispatch();
  // drag state
  const [dragActive, setDragActive] = useState(false);
  const [photo, setPhoto] = useState();
  // ref
  const [se, setSe] = useState();
  const inputRef = useRef(null);
  //   if (dragActive) {
  //     alert("yes");
  //   } else {
  //     alert("no");
  //   }

  // handle drag events
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

  // triggers when file is dro pped
  const handleDrop = function (e) {
    alert('handleDrop')
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
      setPhoto(e.dataTransfer.files[0]);
      props.onChange(photo, props.dbName)
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
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
      setPhoto(e.target.files[0]);
      props.onChange(photo, props.dbName)


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
 