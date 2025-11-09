<h1 align="center"># Blockchain App - Crypto Transaction DApp

  <br>

  <img src="https://raw.githubusercontent.com/Anu27n/Blockchain-App/main/client/images/images/logo.png" alt="Blockchain App" width="200">A decentralized application for sending cryptocurrency across the Ethereum network. Built with React, Vite, Tailwind CSS, Hardhat, and ethers.js.

  <br>

  Blockchain Cryptocurrency App## Features

  <br>

</h1>- 🔗 Connect to local Hardhat blockchain (no MetaMask required!)

- 💸 Send ETH transactions between accounts

<h4 align="center">A decentralized cryptocurrency transaction platform built with React and Ethereum smart contracts.</h4>- 📝 Store transaction messages and keywords on-chain

- 🎨 Beautiful gradient UI with glassmorphism effects

<p align="center">- 📊 View transaction history

  <a href="#live-demo">Live Demo</a> •- 👤 Switch between multiple test accounts

  <a href="#features">Features</a> •

  <a href="#tech-stack">Tech Stack</a> •## Tech Stack

  <a href="#quick-start">Quick Start</a> •

  <a href="#usage">Usage</a>### Frontend

</p>- **React** - UI framework

- **Vite** - Build tool

<p align="center">- **Tailwind CSS** - Styling

  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">- **ethers.js v6** - Ethereum interaction

  <img src="https://img.shields.io/badge/Vite-6.0.3-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">

  <img src="https://img.shields.io/badge/Solidity-0.8.28-363636?style=for-the-badge&logo=solidity&logoColor=white" alt="Solidity">### Smart Contract

  <img src="https://img.shields.io/badge/Hardhat-2.22.15-FFF100?style=for-the-badge&logo=hardhat&logoColor=black" alt="Hardhat">- **Solidity** - Smart contract language

  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.16-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind">- **Hardhat** - Development environment

  <img src="https://img.shields.io/badge/ethers.js-6.13.4-3C3C3D?style=for-the-badge&logo=ethereum&logoColor=white" alt="ethers.js">- **Local Hardhat Network** - Testing blockchain

</p>

## Project Structure

---

```

## Live DemoBlockchain-App/

├── client/                 # Frontend React application

<div align="center">│   ├── src/

  │   │   ├── components/    # React components

  ### [View Live Application](https://anu27n.github.io/Blockchain-App/)│   │   ├── context/       # TransactionContext for blockchain state

  │   │   └── assets/        # Images and static files

  > Currently running in **DEMO MODE** - No real blockchain or cryptocurrency involved│   └── package.json

  │

</div>└── smart_contract/        # Hardhat project

    ├── contracts/         # Solidity smart contracts

---    ├── scripts/           # Deployment scripts

    └── package.json

## Features```



<table>## Setup Instructions

<tr>

<td>### Prerequisites

- Node.js (v16 or higher)

### Core Features- npm or yarn

- **Send Cryptocurrency** - Transfer crypto between accounts with custom messages

- **Transaction History** - View all past transactions with timestamps### 1. Install Dependencies

- **GIF Integration** - Attach animated GIFs to transactions via keywords

- **Multi-Account Support** - Switch between multiple test accounts#### Smart Contract

- **Real-time Updates** - Live transaction count and status updates```bash

cd smart_contract

</td>npm install

<td>```



### Technical Features#### Client

- **Smart Contracts** - Deployed on Ethereum blockchain```bash

- **Demo Mode** - localStorage-based transactions for GitHub Pagescd client

- **Responsive Design** - Works on desktop, tablet, and mobilenpm install

- **Modern UI** - Gradient backgrounds and glassmorphism effects```

- **Type Safety** - Built with modern JavaScript practices

### 2. Start Hardhat Local Blockchain

</td>

</tr>In one terminal, start the local Hardhat node:

</table>

```bash

---cd smart_contract

npx hardhat node

## Tech Stack```



### FrontendThis will:

```- Start a local blockchain at `http://localhost:8545`

React 18.3.1        - UI framework- Provide 20 test accounts, each with 10,000 ETH

Vite 6.0.3          - Build tool and dev server- Display account addresses and private keys

Tailwind CSS 3.4.16 - Utility-first CSS framework

ethers.js 6.13.4    - Ethereum JavaScript library**Keep this terminal running!**

React Icons 5.4.0   - Icon components

```### 3. Deploy the Smart Contract



### Smart ContractsIn a new terminal, deploy the contract:

```

Solidity 0.8.28     - Smart contract language```bash

Hardhat 2.22.15     - Ethereum development environmentcd smart_contract

OpenZeppelin        - Secure contract librariesnpx hardhat run scripts/deploy.js --network localhost

``````



### DeploymentYou'll see output like:

``````

GitHub Actions      - CI/CD pipelineTransactions to Contract Address: 0x5FbDB2315678afecb367f032d93F642f64180aa3

GitHub Pages        - Static site hosting```

Vite Build          - Production optimization

```**Note:** The contract address is already configured in the app. If you redeploy and get a different address, update it in `client/src/context/TransactionContext.jsx`.



---### 4. Start the Frontend



## Quick StartIn another terminal:



### Prerequisites```bash

- Node.js (v18 or higher)cd client

- npm or yarnnpm run dev

- Git```



### InstallationThe app will be available at `http://localhost:5173`



```bash## How to Use

# Clone the repository

git clone https://github.com/Anu27n/Blockchain-App.git1. **Connect to Network**: Click "Connect to Local Network" button

cd Blockchain-App   - The app automatically connects to your local Hardhat blockchain

   - Account #0 is selected by default

# Install client dependencies

cd client2. **Switch Accounts**: Use the account selector dropdown to switch between test accounts

npm install

3. **Send a Transaction**:

# Install smart contract dependencies   - **Address To**: Enter recipient's Ethereum address (try using another account from the Hardhat list)

cd ../smart_contract   - **Amount (ETH)**: Enter amount to send (e.g., 0.5)

npm install   - **Keyword (Gif)**: Enter a keyword for the transaction

```   - **Message**: Enter a message to store on-chain

   - Click "Send now"

### Development Mode

4. **View Transactions**: Scroll down to see all transactions stored on the blockchain

#### Terminal 1: Start Hardhat Local Blockchain

```bash## Smart Contract Details

cd smart_contract

npx hardhat node**Contract Address**: `0x5FbDB2315678afecb367f032d93F642f64180aa3`

```

**Network**: Hardhat Local Network (`http://localhost:8545`)

#### Terminal 2: Deploy Smart Contract

```bash**Chain ID**: 31337

cd smart_contract

npx hardhat run scripts/deploy.js --network localhost### Contract Functions

```

- `addToBlockchain(address receiver, uint256 amount, string message, string keyword)` - Store transaction details

#### Terminal 3: Start Frontend- `getAllTransactions()` - Retrieve all transactions

```bash- `getTransactionCount()` - Get total transaction count

cd client

npm run dev## Test Accounts

```

The Hardhat network provides 20 test accounts. Here are the first 3:

Visit `http://localhost:5173` to view the application.

```

---Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)

Account #1: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 (10000 ETH)

## UsageAccount #2: 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC (10000 ETH)

```

### Demo Mode (Current Deployment)

The live version runs in demo mode, storing transactions in browser localStorage:You can use any of these addresses to test transactions!

- No blockchain connection required

- Instant transactions## Development Commands

- Data persists in browser

- Perfect for testing and demonstration### Smart Contract



### Development Mode```bash

For local development with real blockchain:# Compile contracts

1. Start local Hardhat nodenpx hardhat compile

2. Deploy smart contracts

3. Update `client/src/main.jsx` to use `TransactionContext` instead of `TransactionContextDemo`# Run tests

4. Restart frontend servernpx hardhat test



### Sending a Transaction# Deploy to localhost

1. Select sender account from dropdownnpx hardhat run scripts/deploy.js --network localhost

2. Enter recipient address

3. Specify amount in ETH# Clean artifacts

4. Add a keyword for GIFnpx hardhat clean

5. Write a message```

6. Click "Send Now"

### Client

---

```bash

## Project Structure# Start development server

npm run dev

```

Blockchain-App/# Build for production

├── client/                      # Frontend React applicationnpm run build

│   ├── src/

│   │   ├── components/          # React components# Preview production build

│   │   │   ├── Welcome.jsx      # Main transaction formnpm run preview

│   │   │   ├── Transactions.jsx # Transaction history

│   │   │   ├── Navbar.jsx       # Navigation bar# Run linter

│   │   │   ├── Services.jsx     # Features showcasenpm run lint

│   │   │   └── Footer.jsx       # Footer component```

│   │   ├── context/

│   │   │   ├── TransactionContext.jsx      # Real blockchain## Troubleshooting

│   │   │   └── TransactionContextDemo.jsx  # Demo mode

│   │   ├── App.jsx              # Main app component### Contract Connection Issues

│   │   └── main.jsx             # Entry point- Make sure Hardhat node is running on port 8545

│   ├── public/                  # Static assets- Check that the contract address in `TransactionContext.jsx` matches your deployment

│   ├── vite.config.js          # Vite configuration

│   └── package.json            # Frontend dependencies### Transaction Failures

│- Ensure you have enough ETH in the selected account

├── smart_contract/              # Ethereum smart contracts- Verify the recipient address is valid

│   ├── contracts/- Check the Hardhat node terminal for error messages

│   │   └── Transactions.sol    # Main contract

│   ├── scripts/### Port Already in Use

│   │   └── deploy.js           # Deployment script```bash

│   ├── hardhat.config.js       # Hardhat configuration# Find and kill process on port 8545

│   └── package.json            # Contract dependencieslsof -ti:8545 | xargs kill -9

│

└── .github/workflows/# For port 5173 (Vite)

    └── deploy.yml              # CI/CD pipelinelsof -ti:5173 | xargs kill -9

``````



---## Features Explained



## Smart Contract### No MetaMask Required

Unlike traditional DApps, this app connects directly to the local Hardhat network using ethers.js JsonRpcProvider. No browser wallet needed!

### Transactions.sol

The main smart contract handles:### Account Switching

- Storing transaction records on blockchainEasily switch between 20 pre-funded test accounts to simulate different users and test transactions.

- Emitting events for transaction tracking

- Retrieving transaction history### On-Chain Storage

- Maintaining transaction countEvery transaction stores metadata (message, keyword, timestamp) permanently on the blockchain.



```solidity### Real-Time Updates

function addToBlockchain(Transaction list updates automatically after each successful transaction.

    address payable receiver,

    uint amount,## Future Enhancements

    string memory message,

    string memory keyword- [ ] Add GIF support based on keywords (Giphy API)

) public- [ ] Transaction filtering and search

```- [ ] Account balance display

- [ ] Gas price estimation

---- [ ] Export transaction history

- [ ] Network status indicator

## Configuration- [ ] Dark/Light theme toggle



### Environment Variables## License

Create `.env` file in `smart_contract/` directory:

```envMIT

PRIVATE_KEY=your_private_key

ALCHEMY_API_KEY=your_alchemy_key## Contributing

```

Pull requests are welcome! For major changes, please open an issue first.

### Network Configuration

Edit `hardhat.config.js` to add different networks:---

```javascript

networks: {**Built with ❤️ using React, Hardhat, and ethers.js**

  localhost: {
    url: "http://127.0.0.1:8545"
  },
  sepolia: {
    url: `https://eth-sepolia.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
    accounts: [PRIVATE_KEY]
  }
}
```

---

## Building for Production

```bash
cd client
npm run build
```

The production build will be created in `client/dist/` directory.

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is open source and available under the MIT License.

---

## Acknowledgments

- Ethereum Foundation for blockchain technology
- Hardhat for development environment
- Giphy API for GIF integration
- Tailwind CSS for styling utilities

---

<div align="center">
  
  ### Built with modern web technologies
  
  Made by [Anu27n](https://github.com/Anu27n)
  
  <img src="https://img.shields.io/github/stars/Anu27n/Blockchain-App?style=social" alt="Stars">
  <img src="https://img.shields.io/github/forks/Anu27n/Blockchain-App?style=social" alt="Forks">
  
</div>
