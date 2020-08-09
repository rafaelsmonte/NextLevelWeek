import { Request, Response } from 'express';
import Teach from "../models/teach";
import Util from '../services/util'
const classes=Util.getClasses();
const diasDaSeamana=Util.getDiasDaSeamana();

export default {
  rotaIndex(req: Request, res: Response) {
    return res.render('teach.html',{classes, diasDaSeamana})
  },
  rotaGravar(req: Request, res: Response) {
    const form = req.body;

    form.class = Util.convertClasses(form.class);
    form.weekday = Util.convertDiasDaSeamanaArray(form.weekday);
    for(var i=0;i<form.time_to.length;i++)
    {
      form.time_to[i] = Util.convertHourToMinutes(form.time_to[i]);
      form.time_from[i] = Util.convertHourToMinutes(form.time_from[i]);
    }
    const teach = new Teach(form);
    teach.save(form).then(x =>{ 
      return res.redirect('/study');
    })
    .catch(Error=>{
      console.log(Error);
      return res.render('teach.html', { erro: Error });

    });

  },

}