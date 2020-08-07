import express from 'express';
import bodyparser from 'body-parser';
import studyRoute from './routes/studyRoute'
import teachRoute from './routes/teachRoute'
import indexRoute from './routes/indexRoute'

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());
app.use(express.static("public"))
app.use('/study',studyRoute);
app.use('/teach',teachRoute);
app.use('/',indexRoute);

export default app;
