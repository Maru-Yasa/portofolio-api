import { NextFunction, Request, Response } from 'express';

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({
        status : 'success',
        msg : "Hello World!",
        data : {}
      });
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
