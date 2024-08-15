import express from "express";
import serverless from "serverless-http";

const app = express();
app.get("/api", (req, res)=>{
    res.send({ setup: "react and express connection with netlify"})
})

export const handler = serverless(app);