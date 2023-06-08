import React from 'react';
import { Footer } from '../../components/footer/footer';



const Inicio = () => {
  return (
    <>
     
    <div className='inicio' key="background" style={{ backgroundImage: 'url(./assets/Rectangleverde.png)', backgroundSize: 'contain' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around',textAlign:'center', minHeight: '100vh' }}>
          <div style={{ display: 'flex', alignItems: 'center' , justifyContent: 'space-around'}}>
            <p style={{ color: 'white', fontSize: '40px', marginRight: '300px', justifyContent: 'space-around' }}>Soy Edwin Medina y
              soy desarrollador web <button style={{ fontSize:'30px' ,color: 'green' }}>mira mis proyectos</button></p>
          </div>
          <div>
            <img src="./assets/imagenamarilla.png" alt="Imagen" style={{ width: '600px', marginRight: '80px' }} />  
          </div>
      </div>  
    </div>
  
    <div style={{ display: 'flex', flexDirection: 'column' ,alignItems:'center', padding:'150px'}}>
  <div style={{ display: 'flex', justifyContent: 'space-between' ,alignItems:'center', alignContent:'center'}}>
    <div style={{ flex: 1, justifyContent:'center', alignItems:'center' ,backgroundColor: 'white', height: '100px' }}>
        <h1>¿Que me hace diferente?</h1>    
    </div>
   
  </div>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, backgroundColor: 'white', height: '100px' }}>
            <div  style={{ display: 'flex', alignItems: 'center', alignContent: 'center' }}>
              <img src="./assets/Icondiseno.png" alt="Imagen" style={{ width: '40px', marginLeft: '250px'}} /> 
          </div>
            <h3 style={{ display: 'flex', justifyContent:'center' ,alignItems: 'center', alignContent: 'center', marginTop: '20px' }}>Diseño atractivo</h3>
           <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: '20px' }}>El diseño es nuestro principal fuerte ya que nos encargamos que tu página web siga los estándares y tendencias internacionales.</p> 
          </div>
          <div style={{ flex: 1, backgroundColor: 'white', height: '100px' }}>
            <img src="./assets/Iconsearch.png" alt="Imagen" style={{ width: '40px', marginLeft: '250px' }} /> 
            <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: '20px' }}>posicionamiento web</h3>
            <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: '20px' }}>El diseño es nuestro principal fuerte ya que nos encargamos que tu página web siga los estándares y tendencias internacionales.</p> 
          </div>
          <div style={{ flex: 1, backgroundColor: 'white', height: '100px' }}>
            <img src="./assets/Iconfuego.png" alt="Imagen" style={{ width: '40px', marginLeft: '250px' }} /> 
            <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: '20px' }}>Desarrollo eficaz</h3>
            <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: '20px' }}>El diseño es nuestro principal fuerte ya que nos encargamos que tu página web siga los estándares y tendencias internacionales.</p> 
          </div>
  </div>
      </div>
       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around',textAlign:'center', minHeight: '100vh' }}>
          <div style={{ display: 'flex', alignItems: 'center' , justifyContent: 'space-around'}}>
          <p style={{ color: 'black', fontSize: '60px', marginRight: '200px',marginLeft:'150px', justifyContent: 'space-around' }}>
            Dona Gato <h6>DonaGato es una APP con precio de $10.00 MXN,<br /> la cual tiene el fin de donar un porcentaje de sus
              ganancias a refugios y <br />   albergues de animales necesitados.</h6> <button style={{ fontSize: '30px', color: 'green' }}>mira todos mis proyectos
            </button><a href="" style={{ fontSize: '30px'}}>Visita el proyecto</a></p>
          
          </div>
          <div>
            <img src="./assets/Imagemorada.png" alt="Imagen" style={{ width: '800px', marginRight: '80px' }} />  
          </div>
      </div>  
     
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', minHeight: '100vh' }}>
       
       <div key="background" style={{ height:'600px',backgroundImage: 'url(./assets/Rectangleverde.png)', backgroundSize: 'contain' }}>
            <img src="./assets/foto.png" alt="Imagen" style={{ height:'500px',width: '600px', marginRight: '20px' }} />  
        </div>
        <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'space-around' }}>
          <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>Un poco sobre mi</h1>
          <p style={{ display:'flex',color: 'black',  textAlign: 'center', justifyContent: 'center', padding:'80px' }}>First of all, I wanted
            to say thanks for finding time to go through my page! Even if we won’t work together,<br/> I appreciate you considering me.
            <br/>My name is Michael, and I’m a 19-year-old freelance UI/UX Designer based in Lublin, Poland.<br/>I love helping companies of all sizes 
            impact the world positively and bring their vision to life through great UI/UX.</p>
            <div>
            <a href='' > Conoce más sobre mi </a>
            <div>
              <p>Tecnologias y herramientas</p>
             <div className="container" >
             <div className="row" >
             <div className="col">                   
        <img src="./assets/iconjs2.png" className="img-fluid" style={{ width: '50px', marginRight: '' }} />                     
      </div>
      <div className="col">
        <img src="./assets/iconnodejs.png" className="img-fluid"style={{ width: '50px', marginRight: '' }}/>
      </div>
      <div className="col">
        <img src="./assets/iconreact.png" className="img-fluid"style={{ width: '50px', marginRight: '' }}/>
      </div>
      <div className="col">
        <img src="./assets/mysql.png" className="img-fluid"style={{ width: '50px', marginRight: '' }}/>
      </div>
      
    </div>
  </div>
              

   
    
              </div>
              </div>
            </div>
          </div>
        
     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', minHeight: '100vh' }}>
       
       <div key="background" style={{ }}>
            <img src="./assets/adoplastic.png" alt="Imagen" style={{ width: '400px', marginRight: '20px' }} />  
        </div>
        <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'space-around' }}>          
          <p style={{ display:'flex',color: 'black',  textAlign: 'center', justifyContent: 'center', padding:'80px' }}>First of all, I wanted
            to say thanks for finding time to go through my page! Even if we won’t work together,<br/> I appreciate you considering me.
            <br/>My name is Michael, and I’m a 19-year-old freelance UI/UX Designer based in Lublin, Poland.<br/>I love helping companies of all sizes 
            impact the world positively and bring their vision to life through great UI/UX.</p>
          <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>Adobeplastic</h1>
            <div>
            <a href='' ></a>
            <div>
              <p>01-07-2019</p>
             
            </div>
          </div>
        </div>
        </div>
        
                
<Footer/>
 </>
  );
};

export default Inicio;
