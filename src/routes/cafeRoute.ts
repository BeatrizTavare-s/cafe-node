import {cafeController}  from '../controllers/cafeController'
import { Router} from "express";

const routerCafe: Router = Router();

routerCafe.get('/cafe', cafeController.get);

export{ routerCafe };