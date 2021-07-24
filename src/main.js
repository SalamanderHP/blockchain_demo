const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('24b7a1c4fa0ef5670cd3c1e5f783e427a70aa1c1e6f3c0bafcce41d6ff04ded4');
const myWalletAddress = myKey.getPublic('hex');

let myCoin = new Blockchain();

console.log('\n Starting the miner...');
myCoin.minePendingTransactions(myWalletAddress);
console.log('\n Starting the miner again...');
myCoin.minePendingTransactions(myWalletAddress);

const txt1 = new Transaction(myWalletAddress, 'some_other_address', 10);
txt1.signTransaction(myKey);
myCoin.createTransaction(txt1);

myCoin.minePendingTransactions('some_account');

console.log(`\n Balance of rewarded address: ${myCoin.getBalanceOfAddress(myWalletAddress)}`);
console.log(`========================================= \n Blockchain: \n ${JSON.stringify(myCoin.chain)}`);
