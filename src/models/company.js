module.exports = (sequelize, Sequelize) => {
    const company = sequelize.define(
        'Company',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            }
        },
        {
            timestamps: false,
            freezeTableName: true
        }
    );
    return company;
};
