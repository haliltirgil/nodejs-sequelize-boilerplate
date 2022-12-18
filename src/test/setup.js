require("dotenv/config");
const sequelize = require('../services/database');

beforeAll(async () => {
    try {
        await sequelize.sync();
    } catch (error) {
        console.log(error);
    }
});

beforeEach(async () => {
    await sequelize.sync({ force: true });
});

afterAll(async () => {
    await sequelize.close();
});