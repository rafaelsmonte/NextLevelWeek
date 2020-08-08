import { Request, Response } from 'express';
import study from '../models/study'
import mongoose from 'mongoose';
/*var proffys =[
  {
    name:"rafael",
    avatar:'https://s2.glbimg.com/3Qhnv2I3Rr2rtpcdR0_9LurZVbc=/695x0/s.glbimg.com/po/tt2/f/original/2016/05/12/whatsapp-logo.jpg',
    whatsapp:'18996352885',
    bio:'ewrkpsljrewojkewoprporiwepiorweoipwreoiprweoipweropiewr',
    subject: 'bola',
    cost:'20'

  },
  
]*/
export default {
  rotaIndex(req: Request, res: Response) {
    if(mongoose.connection.readyState==0)
     return res.render('study.html', { erro:'Erro ao conectar no banco' });
    study.find({}).then(proffys=>{ 
      return res.render('study.html', { proffys });
    })
    .catch(Error=>{
      console.log(Error);
      return res.render('study.html', { erro: Error });

    });

}
}