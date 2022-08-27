import { IGeneralDocument } from "../interface/interface";
import General, {GeneralFilterquery, GeneralModelInterface} from "../model/model";

export class GeneralData {
    public model : GeneralModelInterface

    constructor(){
        this.model = General
    }

    getOne(filter : GeneralFilterquery){
        return this.model.findOne(filter)
    }

    create(query : GeneralFilterquery){
        return this.model.create(query)
    }

    getAll(filter : GeneralFilterquery){
        return this.model.find(filter)
    }

    updateOne(filter : GeneralFilterquery, data : GeneralFilterquery){
        return this.model.updateOne(filter, data)
    }

    deleteOne(filter : GeneralFilterquery){
        return this.model.deleteOne(filter)
    }
}