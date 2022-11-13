module.exports = (sequelize, Sequelize) => {
    const employee = sequelize.define(
        'Employee',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            identityNumber: {
                type: Sequelize.STRING,
                allowNull: false
            },
            firstName: {
                type: Sequelize.STRING
            },
            lastName: {
                type: Sequelize.STRING
            },
        },
        {
            timestamps: false,
            freezeTableName: true
        }
    );
    return employee;
};
