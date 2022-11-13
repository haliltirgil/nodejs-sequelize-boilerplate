const CompanyDataAccess = require('../data-access/company');

const createCompany = async (req, res) => {
    let company;

    try {
        company = await CompanyDataAccess.createCompany(req.body);
    } catch (error) {
        return res.status(400).send(error);
    }

    return res.status(201).send(company);
};

const getAllCompanies = async (_req, res) => {
    let allCompanies;

    try {
        allCompanies = await CompanyDataAccess.getAllCompanies();
    } catch (error) {
        return res.status(400).send(error);
    }

    return res.status(200).send(allCompanies);
};

const getCompanyById = async (req, res) => {
    let company;

    try {
        company = await CompanyDataAccess.getCompanyById(req.params.id);
    } catch (error) {
        return res.status(400).send(error);
    }

    return res.status(200).send(company);

};

const updateCompanyById = async (req, res) => {
    try {
        await CompanyDataAccess.updateCompanyById(req.params.id, req.body);
    } catch (error) {
        return res.status(400).send(error);
    }

    res.status(204).send({});
};

const deleteCompanyById = async (req, res) => {
    try {
        await CompanyDataAccess.deleteCompanyById(req.params.id);
    } catch (error) {
        return res.status(400).send(error);
    }

    return res.status(204).send({});
};

module.exports = { createCompany, getAllCompanies, getCompanyById, updateCompanyById, deleteCompanyById };