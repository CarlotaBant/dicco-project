import React from "react";
import './App.css';

export default function Photos(props) {
   if (props.photos) {
   console.log(props.photos);
   return (
      <section className="photos">
         <div className="row">
{props.photos.map(function(photo, index){
   return (
   <div className="col-4" key={index}>
   <img src={photo.src.landscape} className="pics img-fluid" alt="fox" />
   </div>
    );
   })}
   </div>
      </section>
   );
} else {
   return null;
}
}