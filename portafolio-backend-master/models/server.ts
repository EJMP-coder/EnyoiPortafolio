import express, { Application } from 'express';
import db from '../db/connection';
import userRoutes from '../routes/usuario';
import tecnologiasRoutes from '../routes/tecnologias';
import proyectoRoutes from '../routes/proyecto';
import experienciaLaboralRoutes from '../routes/tecnologias';

const cors = require('cors');

class Server {
  private app: Application;
  private port: string | undefined;
  private apiPaths = {
    usuarios: '/api/users',
    tecnologias: '/api/tecnologias',
    proyecto: '/api/proyecto',
    experiencia_laboral: '/api/experiencia_laboral'    

  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log('database online');
    } catch (error) {
      console.log(error);
    }
  }

  middlewares(){
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes(){
    this.app.use(this.apiPaths.usuarios, userRoutes),
    this.app.use(this.apiPaths.tecnologias, tecnologiasRoutes),
    this.app.use(this.apiPaths.proyecto, proyectoRoutes),
    this.app.use(this.apiPaths.experiencia_laboral, experienciaLaboralRoutes)
  }

  listen() {
    this.app.listen(this.port, () => {
        console.log('SERVIDOR CORRIENDO EN EL PUERTO', this.port)
    })
  }
}

export default Server;