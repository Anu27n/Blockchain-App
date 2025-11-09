# Deployment Guide - GitHub Pages

## ⚠️ Important Note

**GitHub Pages can only host the frontend.** For full functionality, you need to:
1. Deploy the **smart contract** to a blockchain network (Sepolia testnet recommended)
2. Deploy the **frontend** to GitHub Pages

---

## Step 1: Deploy Smart Contract to Sepolia Testnet

### 1.1 Get Sepolia ETH (Free)
- Go to https://sepoliafaucet.com/
- Enter your wallet address
- Get free test ETH

### 1.2 Get Infura API Key (Free)
- Go to https://infura.io/
- Create free account
- Create new project
- Copy the API key

### 1.3 Configure Hardhat

Create `.env` file in `smart_contract/` folder:
```bash
PRIVATE_KEY=your_metamask_private_key_here
INFURA_API_KEY=your_infura_api_key_here
```

Update `smart_contract/hardhat.config.js`:
```javascript
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
```

### 1.4 Deploy Contract
```bash
cd smart_contract
npm install dotenv
npx hardhat run scripts/deploy.js --network sepolia
```

**Save the contract address!** It will show something like:
```
Transactions to Contract Address: 0xABC...123
```

---

## Step 2: Update Frontend with Contract Address

Update `client/src/context/TransactionContext.jsx`:

1. Replace the contract address with your deployed one:
```javascript
const contractAddress = "0xYOUR_DEPLOYED_CONTRACT_ADDRESS";
```

2. Update the network URL:
```javascript
const HARDHAT_NETWORK_URL = `https://sepolia.infura.io/v3/${YOUR_INFURA_KEY}`;
```

Or better yet, use MetaMask for production!

---

## Step 3: Enable GitHub Pages

### 3.1 Push Code to GitHub
```bash
git add .
git commit -m "Prepare for GitHub Pages deployment"
git push origin main
```

### 3.2 Enable GitHub Pages
1. Go to your GitHub repository: https://github.com/Anu27n/Blockchain-App
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select: **GitHub Actions**
4. Click **Save**

### 3.3 Trigger Deployment
The deployment will automatically start when you:
- Push to the `main` branch
- Or go to **Actions** tab → Select the workflow → Click **Run workflow**

---

## Step 4: Access Your Deployed App

After deployment completes (2-3 minutes):

🌐 **Your app will be live at:**
```
https://anu27n.github.io/Blockchain-App/
```

---

## Alternative: Quick Local-Only Demo

If you want to deploy **just for demo** without blockchain:

### Option A: Build and Deploy Static Files
```bash
cd client
npm run build
```

Then upload the `dist/` folder to:
- GitHub Pages
- Netlify (drag & drop)
- Vercel

### Option B: Use Mock Data
For a demo without blockchain connection, I can modify the app to use mock/demo data instead of real blockchain.

---

## Troubleshooting

### Issue: App loads but can't connect
- **Solution**: Make sure contract is deployed to Sepolia
- Update contract address in TransactionContext.jsx
- Users need MetaMask installed and connected to Sepolia

### Issue: GitHub Pages shows 404
- **Solution**: Check that `base: '/Blockchain-App/'` in vite.config.js matches your repo name exactly

### Issue: Deployment fails
- **Solution**: Check the **Actions** tab on GitHub for error logs

---

## What's Next?

Choose your deployment path:

**A) Full Production Deployment:**
1. ✅ Deploy contract to Sepolia (free testnet)
2. ✅ Update frontend with contract address
3. ✅ Push to GitHub → Auto-deploys to GitHub Pages
4. ✅ Users connect with MetaMask

**B) Demo Mode:**
- I can modify the app to work with mock data (no blockchain needed)
- Good for showcasing the UI

Which would you like me to help with? 🚀
