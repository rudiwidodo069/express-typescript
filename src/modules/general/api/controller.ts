import { GeneralService } from "../service/service";
import {Request, Response, NextFunction} from "express";
import jsonResponse from "../../../utils/jsonResponse";


export class generalController {
    protected service : GeneralService

    constructor(){
        this.service = new GeneralService()

        this.getOne = this.getOne.bind(this)
        this.create = this.create.bind(this)
        this.getAll = this.getAll.bind(this)
        this.updateOne = this.updateOne.bind(this)
        this.deleteOne = this.deleteOne.bind(this)
    }

    async getOne(req : Request, res : Response, next : NextFunction){
        try {
            const query = {_id : req.params.id}
            const data = await this.service.one(query)
            return jsonResponse(res, 200, 'fetching data success', data)
        } catch (error) {
            return jsonResponse(res, 400, 'data not found', null)    
        }
    }

    async create(req : Request, res : Response, next : NextFunction){
        try {
            const query = {
                firstName : req.body.firstName,
                lastName : req.body.lastName,
            }
            const data = await this.service.create(query)
            return jsonResponse(res, 200, 'data general creation is successful', data)
        } catch (error) {
            return jsonResponse(res, 400, 'bad request', null)
        }
    }


    async getAll(req : Request, res : Response, next : NextFunction){
        try {
            const data = await this.service.getAll({})
            return jsonResponse(res, 200, 'all generals data', data)
        } catch (error) {
            const msg = JSON.stringify(error)
            return jsonResponse(res, 500, msg, null)
        }
    }

    async updateOne(req : Request, res : Response, next : NextFunction){
        try {
            const id = req.params.id
            const {firstName , lastName} = req.body;
            const updated = {
                firstName :firstName,
                lastName : lastName
            }
            const data = await this.service.updateOne({_id : id}, {$set : updated})
            return jsonResponse(res, 200, 'updated successful', data)
        }catch (error) {
            const msg = JSON.stringify(error)
            return jsonResponse(res, 500, msg, null)
        }
    }

    async deleteOne(req : Request, res : Response, next : NextFunction){
        try {
            const id = req.params.id

            const data = await this.service.deleteOne({_id : id})
            return jsonResponse(res, 200, 'deleted', data)
        } catch (error) {
            
        }
    }


}