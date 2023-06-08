
import { Router } from 'express';
import { getExperiencia_laboral,getExperiencia_laboralId,postExperiencia_laboral,putExperiencia_laboral,deleteExperiencia_laboral } from '../controllers/experienciaLaboral';


const router = Router();

router.get('/', getExperiencia_laboral);
router.get('/:id', getExperiencia_laboralId);
router.post('/', postExperiencia_laboral);
router.put('/:id', putExperiencia_laboral);
router.delete('/:id', deleteExperiencia_laboral);

export default router;