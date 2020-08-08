import express from 'express';
import bodyparser from 'body-parser';
import studyRoute from './routes/studyRoute'
import teachRoute from './routes/teachRoute'
import indexRoute from './routes/indexRoute'
import nunJucks from 'nunjucks';

import MongoDB from './services/MongoDB';
import dotenv from "dotenv";

dotenv.config();
MongoDB.conectar(process.env.URL_BANCO || "")? console.log('conectado') : console.log('Erro ao conectar');

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());
app.use(express.static("public"))
app.use('/study',studyRoute);
app.use('/teach',teachRoute);
app.use('/',indexRoute);
nunJucks.configure('./scr/views',{
    express:app,
    noCache: true,
});
export default app;
