const express = require('express');
const {
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById,
} = require('../controllers/company');

const router = express.Router();

router.post('/create-company', createCompany);
router.get('/get-all-companies', getAllCompanies);
router.get('/get-company-by-id/:id', getCompanyById);
router.put('/update-company-by-id/:id', updateCompanyById);
router.delete('/delete-company-by-id/:id', deleteCompanyById);

module.exports = router;
