import { Router } from "express";
import { borrarColor, crearColor, editarColor, obtenerColor, obtenerColores } from "../controllers/colores.controllers";

const router = Router()

/* app.get('/prueba', (req, res)=>{
    res.send('esto es una prueba de la peticion GET a mi backend');
})  */

router.route('/color').get(obtenerColores).post(crearColor)
router.route('/color/:id').delete(borrarColor).put(editarColor).get(obtenerColor);
export default router;