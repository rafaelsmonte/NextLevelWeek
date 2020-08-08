import { Request, Response } from 'express';
export default {
  async rotaIndex(req: Request, res: Response) {
    return res.render('teach.html')
  },
}