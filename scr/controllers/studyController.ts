import { Request, Response } from 'express';
import teach from '../models/teach'
import mongoose from 'mongoose';
import Util from '../services/util';
const classes = [
  'Artes',
  'Biologia',
  'Ciências',
  'Educação física',
  'Física',
  'Geografia',
  'História',
  'Matemática',
  'Português',
  'Química',
];
const diasDaSeamana = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]
function getClasses(subNumber: any) {
  if (isNaN(subNumber))
    return undefined;
  return classes[subNumber - 1];
}
function getDiaDaSemana(dayNumber: any) {
  if (isNaN(dayNumber))
    return undefined;
  return diasDaSeamana[dayNumber];
}


export default {
  async rotaIndex(req: Request, res: Response) {
    var time: number = 0;
    var filters = req.query;
    if (Object.keys(filters).length == 0) {
      teach.find({}).then(proffys => {
        return res.render('study.html', { proffys, classes, filters, diasDaSeamana });
      })
        .catch(Error => {
          console.log(Error);
          return res.render('study.html', { erro: Error });

        });
    } else {
      filters.class = getClasses(filters.class);
      filters.weekday = getDiaDaSemana(filters.weekday);
      filters.time == '' ? time = 0 : time = Util.convertHourToMinutes(filters.time + "");
      filters = JSON.parse(JSON.stringify(filters));
      if (mongoose.connection.readyState == 0)
        return res.render('study.html', { erro: 'Erro ao conectar ao banco' });
      teach.find({ time_to: { $gte: time }, time_from: { $lte: time }, weekday: filters.weekday, class: filters.class }).then(proffys => {
        return res.render('study.html', { proffys, classes, filters, diasDaSeamana });
      })
        .catch(Error => {
          console.log(Error);
          return res.render('study.html', { erro: Error });

        });
    }
  },



}