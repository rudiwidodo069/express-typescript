import mongoose from "mongoose";

export interface IGeneralDocument extends mongoose.Document{
    firstName : string,
    lastName : string,
}

export interface IGenral {
    firstName : string,
    lastName : string
}