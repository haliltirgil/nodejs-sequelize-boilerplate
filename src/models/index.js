const Sequelize = require('sequelize');
// @ts-ignore
const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    port: +process.env.PORT,
    dialect: process.env.dialect,
    pool: {
        max: +process.env.pool_max,
        min: +process.env.pool_min,
        acquire: +process.env.pool_acquire,
        idle: +process.env.pool_idle
    }
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employee = require('./employee')(sequelize, Sequelize);
db.project = require('./project')(sequelize, Sequelize);
db.department = require('./department')(sequelize, Sequelize);
db.company = require('./company')(sequelize, Sequelize);

//M2M relation Employee - Project
db.employee.belongsToMany(db.project, { through: 'Employee_Project_Match', foreignKey: 'employeeId', as: 'projects', timestamps: false });
db.project.belongsToMany(db.employee, { through: 'Employee_Project_Match', foreignKey: 'projectId', as: 'employees', timestamps: false });

// O2M relation Department - Employee
db.department.hasMany(db.employee, { foreignKey: 'departmentId', timestamps: false });
db.employee.belongsTo(db.department, { foreignKey: 'departmentId', timestamps: false });

// O2M relation Company - Department
db.company.hasMany(db.department, { foreignKey: 'companyId', timestamps: false });
db.department.belongsTo(db.company, { foreignKey: 'companyId', timestamps: false });

module.exports = db;
