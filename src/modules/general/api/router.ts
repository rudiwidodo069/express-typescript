import express, {Router} from "express";
import { generalController } from "./controller";

const router = Router();

const controller = new generalController()

router
.get('/', controller.getAll)
.get('/:id', controller.getOne)
.post('/create', controller.create)
.put('/update/:id', controller.updateOne)
.delete('/delete/:id', controller.deleteOne)

export {router as generalsRouter}