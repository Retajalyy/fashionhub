const express = require('express');
const connectDB = require('./config/db.config');
const path = require('path');
const cors = require('cors');
const productRouter = require('./routers/product.router');
const userTypeRouter = require('./routers/userType.router');
const userRouter = require('./routers/user.router');
const categoryRouter = require('./routers/category.router');
const port = 3000;
const app = express();
app.use(cors({
origin:'http://localhost:4200' }));
app.use(express.json());
connectDB();
app.use('/Product',productRouter);
app.use('/userType',userTypeRouter);
app.use('/user',userRouter);
app.use('/category',categoryRouter);

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.listen(port, ()=> console.log(`server started at port: ${port}`)); 