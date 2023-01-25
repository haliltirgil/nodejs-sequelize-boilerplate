const app = require('./app');
const sequelize = require('./services/database');

const databaseConnection = async () => {
  try {
    await sequelize.sync();
    console.log('Database connection successful.');
  } catch (error) {
    console.log(error);
    setTimeout(databaseConnection, 3000);
  }
};

const start = async () => {
  await databaseConnection();

  app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server started on port ${process.env.SERVER_PORT}`);
  });
};

start();
