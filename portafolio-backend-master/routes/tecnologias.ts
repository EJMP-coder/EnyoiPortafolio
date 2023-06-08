
import { Router } from 'express';
import { getTecnologias, getTecnologiasId, postTecnologias, putTecnologias, deleteTecnologias } from '../controllers/tecnologias';


const router = Router();

router.get('/', getTecnologias);
router.get('/:id', getTecnologiasId);
router.post('/', postTecnologias);
router.put('/:id', putTecnologias);
router.delete('/:id', deleteTecnologias);

export default router;