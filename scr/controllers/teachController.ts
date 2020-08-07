import { Request, Response } from 'express';
export default {
  async rotaIndex(req: Request, res: Response) {
    return res.sendfile('./scr/views/teach.html')
  },
}