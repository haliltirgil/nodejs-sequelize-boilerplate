const createEmployee = async (_req, res) => {
    try {
        return res.status(200).json({
            message: "Hoşgeéldin kanks!"
        });
    } catch (error) {
        return res.status(400).send(error);
    }
};

const getAllEmployees = async (_req, res) => {
    try {
        return res.status(200).json({
            message: "Hoşgeéldin kanks!"
        });
    } catch (error) {
        return res.status(400).send(error);
    }
};

const getEmployeeById = async (_req, res) => {
    try {
        return res.status(200).json({
            message: "Hoşgeéldin kanks!"
        });
    } catch (error) {
        return res.status(400).send(error);
    }
};

const updateEmployeeById = async (_req, res) => {
    try {
        return res.status(200).json({
            message: "Hoşgeéldin kanks!"
        });
    } catch (error) {
        return res.status(400).send(error);
    }
};

const deleteEmployeeById = async (_req, res) => {
    try {
        return res.status(200).json({
            message: "Hoşgeéldin kanks!"
        });
    } catch (error) {
        return res.status(400).send(error);
    }
};

module.exports = { createEmployee, getAllEmployees, getEmployeeById, updateEmployeeById, deleteEmployeeById };