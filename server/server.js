import express from 'express';
import bodyParser from 'body-parser';
import mentorRoutes from './routes/mentorRoutes';
import userRoutes from './routes/userRoutes';
import sessionRoutes from './routes/sessionRoutes'
require('dotenv').config();

//console.log(process.env.JWT_SECRET);


const app = express();

const port = process.env.PORT || process.env.ENTRY_PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1/', mentorRoutes);
app.use('/api/v1/', userRoutes);
app.use('/api/v1/', sessionRoutes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

export default app;