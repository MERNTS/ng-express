const express = require('express');
const router = express.Router();
const tansactionController = require('../controllers/transaction.controller')

router.get('/', (req, res) => { res.json({ name: 'OmniDevX', website: 'https://omnidevx.netlify.app/' }); });
router.post('/new', (req, res) => { res.status(201).json({ msg: 'new, start' }); });

router.get('/transactions', tansactionController.getTransactions);
router.post('/transactions', tansactionController.importTransactions);

module.exports = router;
