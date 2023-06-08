import { DataTypes } from "sequelize";
import db from "../db/connection";



const Proyecto = db.define('proyecto', {
 
    idproyecto : {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.INTEGER
    },
    descripcion: {
      type: DataTypes.STRING
    },
    url: {
        type: DataTypes.STRING
    },
    imagen: {
        type: DataTypes.STRING
       
    },   
    fecha: {
        type: DataTypes.DATE
    }
   

    
  },
  
  {
    tableName: 'proyecto'
  })

    
  export default Proyecto;