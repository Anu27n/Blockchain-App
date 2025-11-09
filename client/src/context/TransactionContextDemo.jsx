import React, { useEffect, useState, createContext } from 'react';

export const TransactionContext = createContext();

// Mock mode - no blockchain needed, perfect for GitHub Pages!
const DEMO_MODE = true;

// Mock accounts for demo
const MOCK_ACCOUNTS = [
  "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
  "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
  "0x90F79bf6EB2c4f870365E785982E1f101E93b906",
  "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",
  "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",
  "0x976EA74026E726554dB657fA54763abd0C3a0aa9",
  "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955"
];

// Mock transaction storage
const getMockTransactions = () => {
  const stored = localStorage.getItem('mockTransactions');
  return stored ? JSON.parse(stored) : [];
};

const saveMockTransactions = (transactions) => {
  localStorage.setItem('mockTransactions', JSON.stringify(transactions));
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('');
  const [accounts, setAccounts] = useState([]);
  const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [selectedAccountIndex, setSelectedAccountIndex] = useState(0);

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const loadMockAccounts = () => {
    console.log("🎭 Running in DEMO MODE - No blockchain required!");
    setAccounts(MOCK_ACCOUNTS);
    setCurrentAccount(MOCK_ACCOUNTS[0]);
    
    // Load saved transactions
    const savedTransactions = getMockTransactions();
    setTransactions(savedTransactions);
    setTransactionCount(savedTransactions.length);
  };

  const connectWallet = async (accountIndex = 0) => {
    if (accounts.length > 0) {
      setSelectedAccountIndex(accountIndex);
      setCurrentAccount(accounts[accountIndex]);
      console.log(`Connected to account ${accountIndex}: ${accounts[accountIndex]}`);
    } else {
      loadMockAccounts();
    }
  };

  const switchAccount = (accountIndex) => {
    if (accountIndex >= 0 && accountIndex < accounts.length) {
      setSelectedAccountIndex(accountIndex);
      setCurrentAccount(accounts[accountIndex]);
      console.log(`Switched to account ${accountIndex}: ${accounts[accountIndex]}`);
    }
  };

  const sendTransaction = async () => {
    try {
      const { addressTo, amount, keyword, message } = formData;
      
      if (!addressTo || !amount || !keyword || !message) {
        alert("Please fill in all fields");
        return;
      }

      setIsLoading(true);
      console.log("🎭 Demo: Simulating transaction...", { 
        from: currentAccount,
        to: addressTo, 
        amount, 
        keyword, 
        message
      });

      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Create mock transaction
      const newTransaction = {
        addressFrom: currentAccount,
        addressTo: addressTo,
        amount: amount,
        message: message,
        keyword: keyword,
        timestamp: new Date().toLocaleString()
      };

      // Save transaction
      const allTransactions = getMockTransactions();
      allTransactions.push(newTransaction);
      saveMockTransactions(allTransactions);

      setTransactions(allTransactions);
      setTransactionCount(allTransactions.length);

      setIsLoading(false);
      console.log(`✅ Demo transaction completed!`);
      alert("🎉 Demo Transaction Successful!\n\nNote: This is a demo mode. No real cryptocurrency was transferred.\n\nYour transaction has been saved locally!");

      // Clear form
      setFormData({ addressTo: '', amount: '', keyword: '', message: '' });
    } catch (error) {
      setIsLoading(false);
      console.error("❌ Demo transaction error:", error);
      alert("Transaction failed: " + error.message);
    }
  };

  useEffect(() => {
    loadMockAccounts();
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
