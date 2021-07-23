const {Blockchain, Transaction} = require('./blockchain');

let myCoin = new Blockchain();
myCoin.createTransaction(new Transaction('address1', 'address2', 100));
myCoin.createTransaction(new Transaction('address2', 'address1', 50));

console.log('\n Starting the miner...');
myCoin.minePendingTransactions('some_address');

console.log(`\n Balance of rewarded address: ${myCoin.getBalanceOfAddress('some_address')}`);

console.log('\n Starting the miner again...');
myCoin.minePendingTransactions('some_address');

console.log(`\n Balance of rewarded address: ${myCoin.getBalanceOfAddress('some_address')}`);

console.log(`========================================= \n Blockchain: \n ${JSON.stringify(myCoin.chain)}`);
