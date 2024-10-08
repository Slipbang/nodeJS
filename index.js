const PORT = process.env.PORT || 5000;
const Application = require('./framework/Application');
const userRouter = require('./src/user-router');
const jsonParser = require('./framework/parseJson');
const parseUrl = require('./framework/parseUrl');
const mongoose = require('mongoose');

const app = new Application();

app.use(jsonParser);
app.use(parseUrl('http://localhost:5000'))
app.addRouter(userRouter)
// app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://kiseldimon1:nCSRnoHfLmWjkhLF@cluster0.ox7cb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
    } catch (err) {
        console.log(err)
    }
}

start();
