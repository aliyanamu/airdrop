import { Keypair } from '@solana/web3.js';
import * as fs from 'fs';

const args = process.argv.slice(2);
const filename = args[0] || 'dev-wallet.json';

// Generate a new keypair
let keypair = Keypair.generate();
const publicKey: string = keypair.publicKey.toBase58();
const secretKey: number[] = Array.from(keypair.secretKey);

console.log(`You've generated a new Solana wallet: ${publicKey}`);
console.log(`Secret Key: ${secretKey}`);

fs.writeFileSync(filename, JSON.stringify(secretKey));
console.log(`Wallet saved to ${filename}`);
