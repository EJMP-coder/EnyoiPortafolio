
import { Request, Response } from 'express';
import Tecnologias from '../models/tecnologias';


export const getTecnologias = async (req: Request, res: Response) => {

  const tecnologia = await Tecnologias.findAll();

  res.json({
      msg: 'getTecnologias',
      tecnologia
  })
}

export const getTecnologiasId = async (req: Request, res: Response) => {

  const { id } = req.params;

  const tecnologias = await Tecnologias.findByPk(id);

  if(tecnologias){
    res.json({
      msg: 'getTecnologia',
      id,
      tecnologias
    })
  }else{
    res.status(404).json({
      msg: 'las habilidades no existe',
    })
  }
}

export const postTecnologias = (req: Request, res: Response) => {  
  const { body } = req;

  res.json({
      msg: 'post Tecnologias',
      body
  })
}

export const putTecnologias = (req: Request, res: Response) => {

  const { id } = req.params;
  const { body } = req;

  res.json({
      msg: 'put Tecnologias',
      body,
      id
  })
}

export const deleteTecnologias= (req: Request, res: Response) => {

  const { id } = req.params;

  res.json({
      msg: 'delete Tecnologias',
      id
  })
}