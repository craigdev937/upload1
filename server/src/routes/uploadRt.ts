import express from "express";
import { IndexHome } from "../controllers/uploadCon";

export const uploadRt: express.Router = express.Router();
    uploadRt.get("/", IndexHome);





