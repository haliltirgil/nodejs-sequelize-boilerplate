const Sequelize = require('sequelize');
const sequelize = require('../services/database');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employee = require('./employee')(sequelize, Sequelize);
db.project = require('./project')(sequelize, Sequelize);
db.department = require('./department')(sequelize, Sequelize);
db.company = require('./company')(sequelize, Sequelize);

//M2M relation Employee - Project
db.employee.belongsToMany(db.project, {
  through: 'Employee_Project_Match',
  foreignKey: 'employeeId',
  as: 'projects',
  timestamps: false,
});
db.project.belongsToMany(db.employee, {
  through: 'Employee_Project_Match',
  foreignKey: 'projectId',
  as: 'employees',
  timestamps: false,
});

// O2M relation Department - Employee
db.department.hasMany(db.employee, { foreignKey: 'departmentId', timestamps: false });
db.employee.belongsTo(db.department, { foreignKey: 'departmentId', timestamps: false });

// O2M relation Company - Department
db.company.hasMany(db.department, { foreignKey: 'companyId', timestamps: false });
db.department.belongsTo(db.company, { foreignKey: 'companyId', timestamps: false });

module.exports = db;
