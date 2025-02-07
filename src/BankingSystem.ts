// 🏦 Create a banking system where users can create accounts, deposit, withdraw, and check their balance.
// 2. Implement a function `processTransaction` that allows deposits and withdrawals and stores them in the transactions array. It should return a string.
// 3. Implement a function `getBalance` that returns the balance of a given account number.
// 4. Implement a function `getTransactionHistory` that returns the list of transactions for an account.
// 5. Implement a function `checkActiveStatus` that returns the active status of an account number.
// 6. Implement a function `closeAccount` that removes an account from the array and returns a confirmation string.

enum TransactionType {
  Deposit = "Deposit" ,
  Withdraw = "Withdraw"
}

type Transaction = {
  accountNo: number;
  amount: number;
  type: TransactionType;
};

type BankAccount = {
  accountNo: number;
  firstname: string;
  lastname: string;
  balance: number;
  isActive: boolean;
  transactions: Transaction[]
}

let accounts: BankAccount[] = [];

// 1. Implement a function `createAccount` that adds a new account to the `accounts` array. It should return a `BankAccount` object.
function createAccount(accountNo:number, firstname: string, lastname:string, initialDeposit:number, isActive = true): BankAccount[]{
  accounts.push(
    {
      accountNo: accountNo,
      firstname: firstname,
      lastname: lastname,
      balance: initialDeposit,
      isActive: isActive,
      transactions: []
    }
  )
  return accounts
}

// 2. Implement a function `processTransaction` that allows deposits and withdrawals and stores them in the transactions array. It should return a string.
function processTransaction(accountNo: number, amount: number, transactionType: TransactionType): string {
  accounts.forEach(account=>{
    if(account.accountNo = accountNo){
      if(transactionType == "Withdraw"){
        if(account.balance > amount){
          account.balance-=amount
          account.transactions.push({ accountNo:accountNo,amount: amount,type: transactionType})
        }else{
          return "Insuficient Founds"
        }
      }else{
        account.balance+=amount
        account.transactions.push({ accountNo:accountNo,amount: amount,type: transactionType}) 
      }
    }""  
  })
  return "Action Completed"
}

// 3. Implement a function `getBalance` that returns the balance of a given account number.
function getBalance(accountNo: number): number {
  let balance = 0
  accounts.forEach(account => {
    account.accountNo == accountNo ? balance = account.balance : ""
  })
  return balance
}

// 4. Implement a function `getTransactionHistory` that returns the list of transactions for an account.
function getTransactionHistory(accountNo: number) {
  let transactions
  accounts.forEach(account =>{
    account.accountNo == accountNo ? transactions = account.transactions : ""
  })
  return transactions
}

// 5. Implement a function `checkActiveStatus` that returns the active status of an account number.
function checkActiveStatus(accountNo: number) {
  let status
  accounts.forEach(account => {
    account.accountNo == accountNo ? status = account.isActive : ""
  })
  return status
}

// 6. Implement a function `closeAccount` that removes an account from the array and returns a confirmation string.
function closeAccount(accountNo:number):string {
  accounts = accounts.filter(account =>{
    account.accountNo !== accountNo ? account : ""
  })
  console.log(accounts)
  return "Account removed"
}

// Test cases (students should add more)
console.log(createAccount(1, "John", "Smith", 100)) // { accountNo: 1, firstname: "John", lastname: "Smith", balance: 100, isActive: true, transactions: [] }
console.log(processTransaction(1, 50, TransactionType.Deposit)) // "50 deposited into account number 1"
console.log(processTransaction(1, 20, TransactionType.Withdraw)) // "20 withdrawn from account number 1"
console.log(processTransaction(1, 500, TransactionType.Withdraw)) // "Insufficient funds for withdrawal"
console.log(getBalance(1)) // 130
console.log(getTransactionHistory(1)) // [{ accountNo: 1, amount: 50, type: TransactionType.Deposit }, { accountNo: 1, amount: 20, type: TransactionType.Withdraw }]
console.log(checkActiveStatus(1)) // true
console.log(closeAccount(1)) // "Account number 1 closed"