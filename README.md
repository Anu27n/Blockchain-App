# Blockchain App - Crypto Transaction DApp

A decentralized application for sending cryptocurrency across the Ethereum network. Built with React, Vite, Tailwind CSS, Hardhat, and ethers.js.

## Features

- 🔗 Connect to local Hardhat blockchain (no MetaMask required!)
- 💸 Send ETH transactions between accounts
- 📝 Store transaction messages and keywords on-chain
- 🎨 Beautiful gradient UI with glassmorphism effects
- 📊 View transaction history
- 👤 Switch between multiple test accounts

## Tech Stack

### Frontend
- **React** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **ethers.js v6** - Ethereum interaction

### Smart Contract
- **Solidity** - Smart contract language
- **Hardhat** - Development environment
- **Local Hardhat Network** - Testing blockchain

## Project Structure

```
Blockchain-App/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── context/       # TransactionContext for blockchain state
│   │   └── assets/        # Images and static files
│   └── package.json
│
└── smart_contract/        # Hardhat project
    ├── contracts/         # Solidity smart contracts
    ├── scripts/           # Deployment scripts
    └── package.json
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### 1. Install Dependencies

#### Smart Contract
```bash
cd smart_contract
npm install
```

#### Client
```bash
cd client
npm install
```

### 2. Start Hardhat Local Blockchain

In one terminal, start the local Hardhat node:

```bash
cd smart_contract
npx hardhat node
```

This will:
- Start a local blockchain at `http://localhost:8545`
- Provide 20 test accounts, each with 10,000 ETH
- Display account addresses and private keys

**Keep this terminal running!**

### 3. Deploy the Smart Contract

In a new terminal, deploy the contract:

```bash
cd smart_contract
npx hardhat run scripts/deploy.js --network localhost
```

You'll see output like:
```
Transactions to Contract Address: 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

**Note:** The contract address is already configured in the app. If you redeploy and get a different address, update it in `client/src/context/TransactionContext.jsx`.

### 4. Start the Frontend

In another terminal:

```bash
cd client
npm run dev
```

The app will be available at `http://localhost:5173`

## How to Use

1. **Connect to Network**: Click "Connect to Local Network" button
   - The app automatically connects to your local Hardhat blockchain
   - Account #0 is selected by default

2. **Switch Accounts**: Use the account selector dropdown to switch between test accounts

3. **Send a Transaction**:
   - **Address To**: Enter recipient's Ethereum address (try using another account from the Hardhat list)
   - **Amount (ETH)**: Enter amount to send (e.g., 0.5)
   - **Keyword (Gif)**: Enter a keyword for the transaction
   - **Message**: Enter a message to store on-chain
   - Click "Send now"

4. **View Transactions**: Scroll down to see all transactions stored on the blockchain

## Smart Contract Details

**Contract Address**: `0x5FbDB2315678afecb367f032d93F642f64180aa3`

**Network**: Hardhat Local Network (`http://localhost:8545`)

**Chain ID**: 31337

### Contract Functions

- `addToBlockchain(address receiver, uint256 amount, string message, string keyword)` - Store transaction details
- `getAllTransactions()` - Retrieve all transactions
- `getTransactionCount()` - Get total transaction count

## Test Accounts

The Hardhat network provides 20 test accounts. Here are the first 3:

```
Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
Account #1: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 (10000 ETH)
Account #2: 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC (10000 ETH)
```

You can use any of these addresses to test transactions!

## Development Commands

### Smart Contract

```bash
# Compile contracts
npx hardhat compile

# Run tests
npx hardhat test

# Deploy to localhost
npx hardhat run scripts/deploy.js --network localhost

# Clean artifacts
npx hardhat clean
```

### Client

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Troubleshooting

### Contract Connection Issues
- Make sure Hardhat node is running on port 8545
- Check that the contract address in `TransactionContext.jsx` matches your deployment

### Transaction Failures
- Ensure you have enough ETH in the selected account
- Verify the recipient address is valid
- Check the Hardhat node terminal for error messages

### Port Already in Use
```bash
# Find and kill process on port 8545
lsof -ti:8545 | xargs kill -9

# For port 5173 (Vite)
lsof -ti:5173 | xargs kill -9
```

## Features Explained

### No MetaMask Required
Unlike traditional DApps, this app connects directly to the local Hardhat network using ethers.js JsonRpcProvider. No browser wallet needed!

### Account Switching
Easily switch between 20 pre-funded test accounts to simulate different users and test transactions.

### On-Chain Storage
Every transaction stores metadata (message, keyword, timestamp) permanently on the blockchain.

### Real-Time Updates
Transaction list updates automatically after each successful transaction.

## Future Enhancements

- [ ] Add GIF support based on keywords (Giphy API)
- [ ] Transaction filtering and search
- [ ] Account balance display
- [ ] Gas price estimation
- [ ] Export transaction history
- [ ] Network status indicator
- [ ] Dark/Light theme toggle

## License

MIT

## Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

**Built with ❤️ using React, Hardhat, and ethers.js**
