import React, { useEffect, useState, createContext } from 'react';
import { ethers } from 'ethers';

export const TransactionContext = createContext();

// Connect to local Hardhat node instead of MetaMask
// Use proxy for Codespaces/dev container compatibility
const HARDHAT_NETWORK_URL = window.location.origin + "/api";
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const contractABI = [
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "message",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "keyword",
        "type": "string"
      }
    ],
    "name": "addToBlockchain",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "message",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "keyword",
        "type": "string"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "getAllTransactions",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "message",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "keyword",
            "type": "string"
          }
        ],
        "internalType": "struct Transactions.TransferStruct[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTransactionCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

const getEthereumContract = async (signerIndex = 0) => {
  try {
    const provider = new ethers.JsonRpcProvider(HARDHAT_NETWORK_URL);
    const signer = await provider.getSigner(signerIndex);
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
    return transactionContract;
  } catch (error) {
    console.error("Error getting contract:", error);
    return null;
  }
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('');
  const [accounts, setAccounts] = useState([]);
  const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount') || 0);
  const [transactions, setTransactions] = useState([]);
  const [selectedAccountIndex, setSelectedAccountIndex] = useState(0);

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const getAllTransactions = async () => {
    try {
      const transactionContract = await getEthereumContract();
      if (!transactionContract) return;

      const availableTransactions = await transactionContract.getAllTransactions();
      
      const structuredTransactions = availableTransactions.map((transaction) => ({
        addressTo: transaction.receiver,
        addressFrom: transaction.sender,
        timestamp: new Date(Number(transaction.timestamp) * 1000).toLocaleString(),
        message: transaction.message,
        keyword: transaction.keyword,
        amount: ethers.formatEther(transaction.amount)
      }));

      setTransactions(structuredTransactions);
    } catch (error) {
      console.log(error);
    }
  };

  const loadLocalAccounts = async () => {
    try {
      console.log("Connecting to Hardhat network at:", HARDHAT_NETWORK_URL);
      const provider = new ethers.JsonRpcProvider(HARDHAT_NETWORK_URL);
      
      // Test connection first
      const network = await provider.getNetwork();
      console.log("Connected to network:", network.chainId.toString());
      
      const accountsList = await provider.listAccounts();
      const accountAddresses = accountsList.map(acc => acc.address);
      console.log(`Loaded ${accountAddresses.length} accounts`);
      setAccounts(accountAddresses);
      
      if (accountAddresses.length > 0) {
        setCurrentAccount(accountAddresses[0]);
        getAllTransactions();
      }
    } catch (error) {
      console.error("Error loading local accounts:", error);
      alert("Cannot connect to local Hardhat network. Make sure Hardhat node is running on port 8545.\n\nRun: cd smart_contract && npx hardhat node");
    }
  };

  const checkIfTransactionsExist = async () => {
    try {
      const transactionContract = await getEthereumContract();
      if (!transactionContract) return;

      const transactionCount = await transactionContract.getTransactionCount();
      window.localStorage.setItem("transactionCount", transactionCount.toString());
    } catch (error) {
      console.log("Error checking transactions:", error);
    }
  };

  const connectWallet = async (accountIndex = 0) => {
    try {
      if (accounts.length > 0) {
        setSelectedAccountIndex(accountIndex);
        setCurrentAccount(accounts[accountIndex]);
      } else {
        await loadLocalAccounts();
      }
    } catch (error) {
      console.log("Error connecting wallet:", error);
    }
  };

  const switchAccount = (accountIndex) => {
    if (accountIndex >= 0 && accountIndex < accounts.length) {
      setSelectedAccountIndex(accountIndex);
      setCurrentAccount(accounts[accountIndex]);
    }
  };

  const sendTransaction = async () => {
    try {
      const { addressTo, amount, keyword, message } = formData;
      
      if (!addressTo || !amount || !keyword || !message) {
        alert("Please fill in all fields");
        return;
      }

      const provider = new ethers.JsonRpcProvider(HARDHAT_NETWORK_URL);
      const signer = await provider.getSigner(selectedAccountIndex);
      const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
      const parsedAmount = ethers.parseEther(amount);

      setIsLoading(true);
      console.log("Sending transaction...", { 
        from: currentAccount,
        to: addressTo, 
        amount, 
        keyword, 
        message,
        parsedAmount: parsedAmount.toString()
      });

      // First: Send ETH directly to recipient
      console.log("Step 1: Sending ETH to recipient...");
      const ethTx = await signer.sendTransaction({
        to: addressTo,
        value: parsedAmount,
      });
      console.log(`ETH Transfer TX: ${ethTx.hash}`);
      const ethReceipt = await ethTx.wait();
      console.log(`ETH Transfer confirmed in block ${ethReceipt.blockNumber}`);

      // Second: Store transaction metadata in smart contract
      console.log("Step 2: Storing transaction data in contract...");
      const contractTx = await transactionContract.addToBlockchain(
        addressTo, 
        parsedAmount, 
        message, 
        keyword
      );
      console.log(`Contract TX: ${contractTx.hash}`);
      const contractReceipt = await contractTx.wait();
      console.log(`Contract TX confirmed in block ${contractReceipt.blockNumber}`);

      setIsLoading(false);
      console.log(`✅ Transaction completed successfully!`);
      alert("Transaction successful! 🎉\n\nETH sent and transaction recorded on blockchain!");

      const transactionCount = await transactionContract.getTransactionCount();
      setTransactionCount(transactionCount.toString());
      console.log(`Total transactions: ${transactionCount}`);

      // Reload transactions
      await getAllTransactions();
      
      // Clear form
      setFormData({ addressTo: '', amount: '', keyword: '', message: '' });
    } catch (error) {
      setIsLoading(false);
      console.error("❌ Transaction error:", error);
      console.error("Error details:", {
        code: error.code,
        reason: error.reason,
        message: error.message
      });
      
      let errorMessage = "Transaction failed:\n\n";
      if (error.message.includes("insufficient funds")) {
        errorMessage += "Insufficient funds in account";
      } else if (error.message.includes("invalid address")) {
        errorMessage += "Invalid recipient address";
      } else if (error.reason) {
        errorMessage += error.reason;
      } else {
        errorMessage += error.message;
      }
      
      alert(errorMessage);
    }
  };

  useEffect(() => {
    loadLocalAccounts();
    checkIfTransactionsExist();
  }, []);

  return (
    <TransactionContext.Provider value={{
      connectWallet,
      switchAccount,
      currentAccount,
      accounts,
      selectedAccountIndex,
      formData,
      setFormData,
      handleChange,
      sendTransaction,
      transactions,
      isLoading,
      transactionCount
    }}>
      {children}
    </TransactionContext.Provider>
  );
};
