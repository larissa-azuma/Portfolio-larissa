import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import skills from './routes/skills.routes.js';
import projects from './routes/projects.routes.js';
import posts from './routes/blogs.routes.js';
import achievement from './routes/achievements.routes.js';
import experience from './routes/experiences.routes.js';

const PORT =process.env.PORT||4000;

const app =express()

//add middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

//load routes
app.use('/skills',skills)
app.use('/posts',posts)
app.use('/achievement',achievement)
app.use('/experience',experience)


//start the server
app.listen(PORT,() =>{
console.log(`Server is running on port: ${PORT}`);
});