const { Blockchain, Transaction } =  require('./src/blockchain');

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey= ec.keyFromPrivate('fe30ee5aab5a9510d1aec5b0bbae5c4381995378f3c6abcf4b63ee87cbb3972c');
const myWalletAddress = myKey.getPublic('hex');

let savejeeCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress,'public key goes here', 10);
tx1.signTransaction(myKey);
savejeeCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
savejeeCoin.minePendingTracsactions(myWalletAddress);

console.log('\nBalance of xavier is', savejeeCoin.getBalanceOfAddress(myWalletAddress));

savejeeCoin.chain[1].transactions[0].amount = 1;

console.log("Is chain valid? ", savejeeCoin.isChainValid());

