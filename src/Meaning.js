import React from "react";
import Synonyms from "./Synonyms.js"
import './App.css';


export default function Meaning(props) {
    return (
       <div className="Meaning">
         <h6>{props.meaning.partOfSpeech}.</h6>
         {props.meaning.definitions.map(function (definition, index) 
         {
         return (
             <div key={index}>
             
             <div className="definition">
             {definition.definition}
             </div>
             <div className="example">
             <em>{definition.example}</em>
             </div>
             <div>
             <Synonyms synonyms={definition.synonyms} />
             </div>
             
           </div>
          );
       })}
     </div>
    );
   }
