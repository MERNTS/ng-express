const TransactionModel = require('../models/transaction.model');

exports.getTransactions = async () => {
    try {
        const transactions = await TransactionModel.find({});
        return transactions;
    } catch (error) {
        throw error; // Re-throw error for handling in controller
    }
};

exports.importTransactions = async (transactions) => {
    try {
        // Insert into MongoDB using Mongoose model
        const result = await TransactionModel.insertMany(transactions);
        return result; // Return the result of insertMany if needed
    } catch (error) {
        throw error; // Re-throw error for handling in controller
    }
};