# Blockchain Cryptocurrency App

A decentralized cryptocurrency transaction platform built with React and Ethereum smart contracts.

## Live Demo

**[https://anu27n.github.io/Blockchain-App/](https://anu27n.github.io/Blockchain-App/)**

Currently running in DEMO MODE - No real blockchain or cryptocurrency involved.

## Features

- Send cryptocurrency between accounts
- View transaction history
- Attach GIFs to transactions
- Switch between multiple test accounts
- Real-time transaction updates

## Tech Stack

- React 18.3.1
- Vite 6.0.3
- Tailwind CSS 3.4.16
- Solidity 0.8.28
- Hardhat 2.22.15
- ethers.js 6.13.4

## Installation

```bash
# Clone the repository
git clone https://github.com/Anu27n/Blockchain-App.git
cd Blockchain-App

# Install client dependencies
cd client
npm install

# Install smart contract dependencies
cd ../smart_contract
npm install
```

## Development

Start the local blockchain:
```bash
cd smart_contract
npx hardhat node
```

Deploy smart contracts:
```bash
cd smart_contract
npx hardhat run scripts/deploy.js --network localhost
```

Start the frontend:
```bash
cd client
npm run dev
```

Visit http://localhost:5173

## Building for Production

```bash
cd client
npm run build
```

## License

MIT
