import {Request, Response, NextFunction, Router} from "express";

class CafeController{
  public get(req: Request, res:Response) {
    return res.json({
      response: 'Rota GET cafe'
    });
  }
}

export const cafeController = new CafeController();