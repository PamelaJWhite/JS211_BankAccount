// The class should have the following fields:
let currentBalance = 0

class BankAccount {
    // The constructor should take in the following input: 
        // accountNumber - String representing the account number; // owner - String representing the owner of the account
    constructor(accountNumber, owner ) {
        // accountNumber - The account Number
        this.accountNumber = accountNumber
        // owner - The name of the person who owns this account
        this.owner = owner
        // NOTE: When an account is created, you should initialize the transactions array to be an empty array
        // transactions - An array of transactions representing the history of all transactions associated with this account
        this.transactions = []
    }
// The class should have the following 3 methods:
    // (1) balance() - This method does not take any input, 
    balance() {
        //Because the for loop will add all the transactions in the transactions array, we should start this function with a 0 balance
        let currentBalance = 0
        //The balance is computed by summing up the amounts in the transactions array.
        for (let i=0; i<this.transactions.length; i++) {
            console.log(`B ${i}`)
            // console.log(`B currently adding this transaction: ${this.transactions[i].amount}`)
            currentBalance = currentBalance + this.transactions[i].amount
            console.log(`B current balance = ${currentBalance}`) 
        }
        //and returns the current balance on the account. 
        return currentBalance
    }

    // (2) deposit(amt) - This method takes in a single input, the deposit amount.   
    deposit(amt){
        // NOTE: You should not be able to deposit a negative amount
        if (amt <= 0) {
            console.log(`You cannot deposit ${amt}`)
            return false
        }

        //create a new transaction representing the deposit,
        let newDeposit = new Transaction(this.owner, amt)
        console.log(`D the deposit ${JSON.stringify(newDeposit, null, 2)}`)

        //and add it to the transactions array.
        this.transactions.push(newDeposit)
        console.log(`D new array of transactions: ${JSON.stringify(this.transactions, null, 2)}`)
    }

    // (3) charge(payee, amt) - This method takes in the payee and amount, 
    charge(payee, amt) {
        console.log(`C the balance: ${this.balance()}`)
        //TO DO! NOTE: You should not be able to charge an amount that would make your balance dip below 0
        if (amt > this.balance()) {
            console.log(`You don't have an overdraft account, dufus. You can't withdraw ${amt}`)
            return false
        }
        
        //creates a new transaction with the payee and amount,
        let newWithdrawl = new Transaction(payee, amt)

        //and adds the transaction to the transaction array.
        this.transactions.push(newWithdrawl)
        console.log(`C new array of transactions: ${JSON.stringify(this.transactions, null, 2)}`)
    }  
}

// Transaction class - This class represents a single transaction in a bank account.
class Transaction {
    // The constructor should take in the following input:
    // amount - The amount on the transaction
    // payee - The payee or description on the transaction
    constructor(payee, amt){
        // date - The date of the transaction
        this.date = new Date() // NOTE: The date is not passed into the constructor. The constructor should set the date to be the current date automatically.
        // payee - The description or payee on the transaction
        this.payee = payee
        // amount - The amount of the transaction. Positive amounts are money going into the account (deposit, refund). Negative amounts are money coming out of the account (a charge or debit).
        this.amount = amt
        
    }
}
// let firstTransaction = new Transaction(5, "Pamela")
// console.log(`${JSON.stringify(firstTransaction,null, 2)}`)

let firstAccount = new BankAccount("12345", "Pamela") //this works
// console.log(firstAccount)  ////this works

firstAccount.deposit(30)
firstAccount.balance() //calling balance() is adding or keeping that $30 for the next time I check balance
firstAccount.charge("rent", -24)
firstAccount.balance()
firstAccount.charge("Spec's", 47)


