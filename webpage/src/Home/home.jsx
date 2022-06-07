import {useEffect, useState} from 'react';
import './home.css'
import VisitDataDisplay from '../components/VisitCard'; 
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import DataCard from '../components/Data';
import Loader from './Loader';


function Home(){
    return(
            <div className="home-container">
                <section>
                <div className="first-container">
                    <div className='titulo'>
                        <div className="titulo-container">
                        <h1>Endomarketing</h1>
                        </div>
                       <div className=''>
                        <select className="filter-input">
                             <option value={0}>TIPO</option>
                            <option value={1}>Comunicado</option>
                            <option value={2}>Evento</option>
                            <option value={3}>Publicação</option>
                        </select>
                    <button type='submit' className='btn-create'>Criar +</button>
                    
                       
                    </div>
                </div>
              
            </div>
                </section>
                <aside>
                    <div className='aside-box'>
                        <div className='aside-title'>
                            <h1>Endomarketing</h1>
                        <div className='par-aside'>
                            <p>Endomarketing está relacionado as ações de treinamento ou qualificação dos
                                colaboradores da empresa visando um melhor serviço para o cliente. Marketing
                                interno,devido ao nome,é usualmente confundido com Endomarketing mesmo sendo
                                conceitos diferentes.</p>
                        </div>
                        
                            <div className='aside-btn'>
                             <button className='button-aside'><p className='par-btn'>Dispensar</p></button>
                             
                            </div>
                         </div>
                    </div>
                </aside>
                        <aside>
                        <div className='aside-box2'>
                            <h2>Quadro de Visitas</h2>
                            {
                                <VisitDataDisplay/>
                            }
                           
                        </div>
                </aside>
            </div>

    )
}

export default Home;