import { Router } from "express";

const bookmarkRouter = Router();

// create
bookmarkRouter.post('/', (req, res)=>res.send("Create bookmark route"));

// show by id
bookmarkRouter.get('user/:id', (req, res)=>res.send("Show bookmark route by user id"));

// update by id
bookmarkRouter.put('user/:id', (req, res)=>res.send("Update bookmark route by user id"));

// delete by id
bookmarkRouter.delete('user/:id', (req, res)=>res.send("Delete bookmark route by user id"));

export default bookmarkRouter;