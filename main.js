class Customer {
    constructor() {
      this.transactions = [];
      this.totalSpent = 0;
      this.isEligibleForDiscount = false;
    }
  
    addTransaction(amount) {
      this.transactions.push(amount);
      this.totalSpent += amount;
      if (this.totalSpent >= 1000) {
        this.isEligibleForDiscount = true;
      }
    }
  
    getTotalSpent() {
      return `You have spent $${this.totalSpent}`;
    }
  
    getTotalCups() {
      return `Total cups purchased: ${this.transactions.length}`;
    }
  
    getIsEligibleForDiscount() {
      return this.isEligibleForDiscount;
    }
  }
  
  const customers = {}; // Object to store customers
  
  document.getElementById('customerForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const cups = parseInt(document.getElementById('cups').value);
  
    let customer;
  
    if (customers[name]) {
      // Customer already exists, use existing customer
      customer = customers[name];
    } else {
      // Create a new customer if it doesn't exist
      customer = new Customer();
    }
    
    for (let i = 0; i < cups; i++) {
      customer.addTransaction(100);
    }
  
    customers[name] = customer; // Store the customer with the given name
  
    console.log(`Customer ${name} has spent: ${customer.getTotalSpent()}`);
    console.log(`Customer ${name} has purchased: ${customer.getTotalCups()} cups`);
    console.log(`Is ${name} eligible for a discount? ${customer.getIsEligibleForDiscount()}`);
  });
  