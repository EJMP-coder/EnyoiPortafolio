import { Request, Response } from 'express';
import Proyecto from '../models/proyecto';


export const getProyectos = async (req: Request, res: Response) => {

  const users = await Proyecto.findAll();

  res.json({
      msg: 'getProyectos',
      users
  })
}

export const getProyecto = async (req: Request, res: Response) => {

  const { id } = req.params;

  const user = await Proyecto.findByPk(id);

  if(user){
    res.json({
      msg: 'getProyecto',
      id,
      user
    })
  }else{
    res.status(404).json({
      msg: 'el Proyecto no existe',
    })
  }
}

export const postProyecto = (req: Request, res: Response) => {  
  const { body } = req;

  res.json({
      msg: 'post Proyecto',
      body
  })
}

export const putProyecto= (req: Request, res: Response) => {

  const { id } = req.params;
  const { body } = req;

  res.json({
      msg: 'put Proyecto',
      body,
      id
  })
}

export const deleteProyecto= (req: Request, res: Response) => {

  const { id } = req.params;

  res.json({
      msg: 'delete Proyecto',
      id
  })
}