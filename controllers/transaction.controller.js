const transactionService = require('../services/transaction.services');

exports.getTransactions = async (req, res) => {
  try {
    const getTransactions = await transactionService.getTransactions(req.body);
    return res.status(200).json(getTransactions);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


// TODO: add logic for double loading
exports.importTransactions = async (req, res) => {
  try {
    const importTransactions = await transactionService.importTransactions(req.body);
    return res.status(201).json(importTransactions);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};