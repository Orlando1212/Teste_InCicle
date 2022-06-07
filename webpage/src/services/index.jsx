import React from 'react'
import data from '../components/cards'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './services.css'
import Points from '../imagem/Points.svg'

function JsonDataDisplay(){

        const DisplayData= data.map(
            (info)=>{
                return(
                    <Card className='card-box'>
                        <div key={info.id}>
                    <Card.Img className='card-img' variant="top" src={info.file.url} />
                    <Card.Body>
                      <Card.Title><h1 class="card-title">{info.title}</h1></Card.Title>
                      <Card.Text >
                          <p class="alu">
                          <span>{(info.type)} </span>
                          <span> {info.info.place} </span>
                          <span> {info.info.date}
                          </span></p>
                        <p class="description">{info.description}</p>
                      </Card.Text>
                      <Button  className='btn-card' variant="primary"><img src={Points}></img></Button>
                    </Card.Body>
                    </div>
                  </Card>
                )
            }
        )
      
        return(
            <div>
                <ul>
                    <li class="list-box">
                        {DisplayData}
                    </li>
                </ul>     
            </div>
        )
     }
    
    
  
 export default  JsonDataDisplay;
