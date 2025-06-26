import bs58 from 'bs58';
import promptSync from 'prompt-sync';
import privateKey from './dev-wallet.json';

const prompt = promptSync();

// Convert base58 string to wallet byte array
function base58ToWallet(): void {
  console.log('Enter your base58 private key:');
  const base58 = prompt('> ');

  if (!base58) {
    console.log('No input provided');
    return;
  }

  try {
    const wallet = bs58.decode(base58);
    console.log('Wallet bytes:', Array.from(wallet));
    console.log('Wallet length:', wallet.length);
  } catch (error) {
    console.error('Invalid base58 string:', error);
  }
}

// Convert wallet byte array to base58 string
function walletToBase58(): void {
  // Example wallet bytes (replace with actual wallet data)
  const walletBuffer = new Uint8Array(privateKey);
  const base58 = bs58.encode(walletBuffer);
  console.log('Base58 private key:', base58);
}

// CLI interface
function main(): void {
  console.log('Wallet Format Converter');
  console.log('1. Convert base58 to wallet bytes');
  console.log('2. Convert wallet bytes to base58');

  const choice = prompt('Choose an option (1 or 2): ');

  switch (choice) {
    case '1':
      base58ToWallet();
      break;
    case '2':
      walletToBase58();
      break;
    default:
      console.log('Invalid choice');
  }
}

// Run if this file is executed directly
if (require.main === module) {
  main();
}

export { base58ToWallet, walletToBase58 };
