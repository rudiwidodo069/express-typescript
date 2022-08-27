import mongoose from "mongoose";

import { IGeneralDocument, IGenral } from "../interface/interface";

export type GeneralFilterquery = mongoose.FilterQuery<IGeneralDocument>

export interface GeneralModelInterface extends mongoose.Model<IGeneralDocument>{
    bind(attr : IGenral) : IGeneralDocument
}

const generalSchema = new mongoose.Schema({
    firstName : String,
    lastName : String
},{
    timestamps : true,
    toJSON : {
        transform : (doc, ret) => {
            ret.id = ret._id;
            delete ret._id;
        }
    }
})


const General = mongoose.model<IGeneralDocument, GeneralModelInterface>('general', generalSchema)

generalSchema.statics.build = (attr : IGenral) => {
    return new General(attr)
}

export default General;