import React, { useCallback } from 'react'
import data from '../components/management'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './style.css'




function VisitDataDisplay(){
    const DisplayData= data.map(
        (info,index)=>{
            return(
                <div key={info.id}>
               <h3 className='visit-title'>{info.title}</h3>
                <img className='imga' src={index.toString()}></img>
            </div>
            
            )
        }
    )
  
    return(
        <div>
            <ul>
                <li>
             
                    {DisplayData}
                </li>
            </ul>     
        </div>
    )
 }


export default  VisitDataDisplay;