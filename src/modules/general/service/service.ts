import { GeneralData } from "../data/data";
import { GeneralFilterquery } from "../model/model";
import { IGeneralDocument} from "../interface/interface";

export class GeneralService {
    protected data : GeneralData

    constructor(){
        this.data =  new GeneralData()
    }

    async one(query : GeneralFilterquery) : Promise<IGeneralDocument | null>{
        return this.data.getOne(query)
    }

    async create(query : GeneralFilterquery) : Promise<IGeneralDocument  | null>{
        return this.data.create(query)
    }

    async getAll(query : GeneralFilterquery) : Promise<IGeneralDocument | {}>{
        return this.data.getAll(query)
    }

    async updateOne(query : GeneralFilterquery, data : GeneralFilterquery) : Promise<IGeneralDocument | {}>{
        return this.data.updateOne(query, data)
    }

    async deleteOne(query : GeneralFilterquery) : Promise<IGeneralDocument | {}>{
        return this.data.deleteOne(query)
    }
}