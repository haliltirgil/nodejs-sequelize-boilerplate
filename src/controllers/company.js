const createCompany = async (_req, res) => {
    try {
        return res.status(200).json({
            message: "Hoşgeéldin kanks!"
        });
    } catch (error) {
        return res.status(400).send(error);
    }
};

const getAllCompanies = async (_req, res) => {
    try {
        return res.status(200).json({
            message: "Hoşgeéldin kanks!"
        });
    } catch (error) {
        return res.status(400).send(error);
    }
};

const getCompanyById = async (_req, res) => {
    try {
        return res.status(200).json({
            message: "Hoşgeéldin kanks!"
        });
    } catch (error) {
        return res.status(400).send(error);
    }
};

const updateCompanyById = async (_req, res) => {
    try {
        return res.status(200).json({
            message: "Hoşgeéldin kanks!"
        });
    } catch (error) {
        return res.status(400).send(error);
    }
};

const deleteCompanyById = async (_req, res) => {
    try {
        return res.status(200).json({
            message: "Hoşgeéldin kanks!"
        });
    } catch (error) {
        return res.status(400).send(error);
    }
};

module.exports = { createCompany, getAllCompanies, getCompanyById, updateCompanyById, deleteCompanyById };