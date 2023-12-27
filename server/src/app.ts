import express from 'express'
import db from './config/database.js';
import userRoutes from './routes/user.routes';

db.connect()
const app = express();
app.use(express.json());

//const signup = require("./routes/Accounts/signup.js");

app.use("/user", userRoutes);

export default app;