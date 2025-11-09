# Quick Start Guide

## Start the Application (3 Easy Steps!)

### Step 1: Start Hardhat Blockchain
Open a terminal and run:
```bash
cd /workspaces/Blockchain-App/smart_contract
npx hardhat node
```
Keep this terminal running. It provides a local blockchain with 20 test accounts, each with 10,000 ETH.

### Step 2: Deploy Smart Contract
Open a NEW terminal and run:
```bash
cd /workspaces/Blockchain-App/smart_contract
npx hardhat run scripts/deploy.js --network localhost
```
You should see: `Transactions to Contract Address: 0x5FbDB2315678afecb367f032d93F642f64180aa3`

### Step 3: Start Frontend
Open another NEW terminal and run:
```bash
cd /workspaces/Blockchain-App/client
npm run dev
```
Open your browser to: **http://localhost:5173**

## Try It Out!

1. Click **"Connect to Local Network"**
2. You'll automatically connect with Account #0 (has 10,000 ETH)
3. To test a transaction:
   - **Address To**: Use one of the test accounts, e.g., `0x70997970C51812dc3A010C7d01b50e0d17dc79C8`
   - **Amount**: `0.5`
   - **Keyword**: `rocket`
   - **Message**: `Test transaction!`
4. Click **"Send now"**
5. Scroll down to see your transaction appear!

## Switch Accounts

Use the dropdown to switch between 20 different test accounts and simulate multiple users.

## Test Accounts (copy/paste these)

```
Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Account #1: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
Account #2: 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC
Account #3: 0x90F79bf6EB2c4f870365E785982E1f101E93b906
Account #4: 0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65
```

## Stop the Application

Press `Ctrl+C` in each terminal to stop:
1. The Hardhat node
2. The Vite dev server

That's it! 🚀
