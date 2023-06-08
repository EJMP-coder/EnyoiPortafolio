import { DataTypes } from "sequelize";
import db from "../db/connection";


 
const ExperienciaLaboral = db.define('experiencia_laboral', {
 
  idexperiencia_laboral : {
    type: DataTypes.BIGINT,
    autoIncrement: false,
    primaryKey: true
  },
  fecha_inicio: {
    type: DataTypes.DATE
    },
  fecha_fin: {
    type: DataTypes.DATE
  },
 
  nombre: {
    type: DataTypes.STRING
  },
  url: {
    type: DataTypes.STRING
  },
  foto: {
    type: DataTypes.STRING
  }
 
}, 

{
  tableName: 'experiencia_laboral'

})

 
export default ExperienciaLaboral;