import express, {Router} from "express";
import { generalsRouter } from "../modules/general/api/router";

const router = Router()

router
    .get('/', (req, res) => {
        res.json({
            status : 200,
            message : 'service is up'
        })
    })

router
.use('/generals', generalsRouter)

    export {router as indexRouter}