"use strict";
// 🏦 Create a banking system where users can create accounts, deposit, withdraw, and check their balance.
// 2. Implement a function `processTransaction` that allows deposits and withdrawals and stores them in the transactions array. It should return a string.
// 3. Implement a function `getBalance` that returns the balance of a given account number.
// 4. Implement a function `getTransactionHistory` that returns the list of transactions for an account.
// 5. Implement a function `checkActiveStatus` that returns the active status of an account number.
// 6. Implement a function `closeAccount` that removes an account from the array and returns a confirmation string.
var TransactionType;
(function (TransactionType) {
    TransactionType["Deposit"] = "Deposit";
    TransactionType["Withdraw"] = "Withdraw";
})(TransactionType || (TransactionType = {}));
var accounts = [];
// 1. Implement a function `createAccount` that adds a new account to the `accounts` array. It should return a `BankAccount` object.
function createAccount(accountNo, firstname, lastname, initialDeposit, isActive) {
    if (isActive === void 0) { isActive = true; }
    accounts.push({
        accountNo: accountNo,
        firstname: firstname,
        lastname: lastname,
        balance: initialDeposit,
        isActive: isActive,
        transactions: []
    });
    return accounts;
}
// 2. Implement a function `processTransaction` that allows deposits and withdrawals and stores them in the transactions array. It should return a string.
function processTransaction(accountNo, amount, transactionType) {
    accounts.forEach(function (account) {
        if (account.accountNo = accountNo) {
            if (transactionType == "Withdraw") {
                if (account.balance > amount) {
                    account.balance -= amount;
                    account.transactions.push({ accountNo: accountNo, amount: amount, type: transactionType });
                }
                else {
                    return "Insuficient Founds";
                }
            }
            else {
                account.balance += amount;
                account.transactions.push({ accountNo: accountNo, amount: amount, type: transactionType });
            }
        }
        "";
    });
    return "Action Completed";
}
// 3. Implement a function `getBalance` that returns the balance of a given account number.
function getBalance(accountNo) {
    var balance = 0;
    accounts.forEach(function (account) {
        account.accountNo == accountNo ? balance = account.balance : "";
    });
    return balance;
}
// 4. Implement a function `getTransactionHistory` that returns the list of transactions for an account.
function getTransactionHistory(accountNo) {
    var transactions;
    accounts.forEach(function (account) {
        account.accountNo == accountNo ? transactions = account.transactions : "";
    });
    return transactions;
}
// 5. Implement a function `checkActiveStatus` that returns the active status of an account number.
function checkActiveStatus(accountNo) {
    var status;
    accounts.forEach(function (account) {
        account.accountNo == accountNo ? status = account.isActive : "";
    });
    return status;
}
// 6. Implement a function `closeAccount` that removes an account from the array and returns a confirmation string.
function closeAccount(accountNo) {
    accounts = accounts.filter(function (account) {
        account.accountNo !== accountNo ? account : "";
    });
    console.log(accounts);
    return "Account removed";
}
// Test cases (students should add more)
console.log(createAccount(1, "John", "Smith", 100)); // { accountNo: 1, firstname: "John", lastname: "Smith", balance: 100, isActive: true, transactions: [] }
console.log(processTransaction(1, 50, TransactionType.Deposit)); // "50 deposited into account number 1"
console.log(processTransaction(1, 20, TransactionType.Withdraw)); // "20 withdrawn from account number 1"
console.log(processTransaction(1, 500, TransactionType.Withdraw)); // "Insufficient funds for withdrawal"
console.log(getBalance(1)); // 130
console.log(getTransactionHistory(1)); // [{ accountNo: 1, amount: 50, type: TransactionType.Deposit }, { accountNo: 1, amount: 20, type: TransactionType.Withdraw }]
console.log(checkActiveStatus(1)); // true
console.log(closeAccount(1)); // "Account number 1 closed"
