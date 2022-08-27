import express from "express";
const jsonResponse = (res : express.Response, status : number, message : string, data : [] | unknown) => {
    if(status === 200){
        return res.status(200).json({
            status,
            message,
            data
        })
    } else {
        return res.status(status).json({
            status,
            message,
        })
    }
}

export default jsonResponse;