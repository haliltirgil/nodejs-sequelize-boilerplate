const app = require('./app');

const start = async () => {
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Server started on port ${process.env.SERVER_PORT}`);
        console.log(process.env.TEST);
    })
}

start();