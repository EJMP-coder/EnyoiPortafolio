import React from 'react'
import { Footer } from '../../components/footer/footer'

export default function proyecto() {
  return (
    <>
    <div className='proyecto' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around',textAlign:'center', minHeight: '100vh' }}>
          <div style={{ display: 'flex', alignItems: 'center' , justifyContent: 'space-around'}}>
          <p style={{ color: 'black', fontSize: '60px', marginRight: '200px',marginLeft:'150px', justifyContent: 'space-around' }}>
            CIPSA Electrificaciones<h6>CIPSA Electrificaciones somos una empresa con más de 40  <br /> años de experiencia en el ramo
              energético, <br /> te ayudamos a ahorrar energía a través de  estrategias de reducción de tarifa o consumo energético, hasta en un 40%.</h6>
            <button style={{ backgroundColor:'blue' ,fontSize: '30px', color: 'white' }}>ir a CIPSA Electreficaciones</button></p>
          
          </div>
          <div>
            <img src="./assets/energia.png" alt="Imagen" style={{ width: '800px', marginRight: '80px' }} />  
          </div>
      </div>  
    <Footer/>
    </>
  )
};
