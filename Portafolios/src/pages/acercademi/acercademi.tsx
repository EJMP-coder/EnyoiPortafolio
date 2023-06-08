import React from 'react';
import { Footer } from '../../components/footer/footer';
export default function Acercademi() {
  return (
    <>
      <div className='acercademi' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', minHeight: '100vh' }}>
       
       <div key="background" style={{ height:'600px',backgroundImage: 'url(./assets/Rectangleverde.png)', backgroundSize: 'contain' }}>
            <img src="./assets/foto.png" alt="Imagen" style={{ height:'500px',width: '600px', marginRight: '20px' }} />  
        </div >
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around',
         height:'600px',backgroundColor:'skyblue', backgroundSize: 'contain' }}>
          <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>Un poco sobre mi</h1>
          <p style={{ display:'flex',color: 'black',  textAlign: 'center', justifyContent: 'center', padding:'80px' }}>First of all, I wanted
            to say thanks for finding time to go through my page! Even if we won’t work together,<br/> I appreciate you considering me.
            <br/>My name is Michael, and I’m a 19-year-old freelance UI/UX Designer based in Lublin, Poland.<br/>I love helping companies of all sizes 
            impact the world positively and bring their vision to life through great UI/UX.</p>
            <div> </div>          
           
    </div>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'
      , height:'400px',backgroundColor:'skyblue', backgroundSize: 'contain', marginLeft:'50px', marginRight:'50px'}}>
        <p style={{fontSize:'35px', fontFamily:'monospace'}}>Tecnologias y herramientas</p>
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
