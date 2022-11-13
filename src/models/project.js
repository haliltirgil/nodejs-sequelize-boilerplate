module.exports = (sequelize, Sequelize) => {
    const project = sequelize.define(
        'Project',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
        },
        {
            timestamps: false,
            freezeTableName: true
        }
    );
    return project;
};
