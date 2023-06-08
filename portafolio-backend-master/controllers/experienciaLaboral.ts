import { Request, Response } from 'express';
import ExperienciaLaboral from '../models/experienciaLaboral';



export const getExperiencia_laboral = async (req: Request, res: Response) => {

  const users = await ExperienciaLaboral.findAll();

  res.json({
      msg: 'getexperiencia_laboral',
      users
  })
}

export const getExperiencia_laboralId = async (req: Request, res: Response) => {

  const { id } = req.params;

  const user = await ExperienciaLaboral.findByPk(id);

  if(user){
    res.json({
      msg: 'getexperiencia_laboral',
      id,
      user
    })
  }else{
    res.status(404).json({
      msg: 'las experiencias laborales no existe',
    })
  }
}

export const postExperiencia_laboral = (req: Request, res: Response) => {  
  const { body } = req;

  res.json({
      msg: 'post experiencia_laboral',
      body
  })
}

export const putExperiencia_laboral = (req: Request, res: Response) => {

  const { id } = req.params;
  const { body } = req;

  res.json({
      msg: 'put experiencia_laboral',
      body,
      id
  })
}

export const deleteExperiencia_laboral = (req: Request, res: Response) => {

  const { id } = req.params;

  res.json({
      msg: 'delete experiencia laboral',
      id
  })
}