import React, { useContext, useState, useEffect } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const useFetchGif = (keyword) => {
    const [gifUrl, setGifUrl] = useState("");

    const fetchGif = async () => {
        try {
            // Using Giphy's public beta key for demo (get your own at developers.giphy.com)
            const apiKey = "sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh"; // Demo key - replace with your own
            const response = await fetch(
                `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword.split(" ").join("")}&limit=1`
            );
            const { data } = await response.json();

            if (data.length > 0) {
                setGifUrl(data[0]?.images?.downsized_medium?.url || "");
            } else {
                // Fallback image if no GIF found
                setGifUrl("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284");
            }
        } catch (error) {
            console.log("Error fetching GIF:", error);
            setGifUrl("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284");
        }
    };

    useEffect(() => {
        if (keyword) fetchGif();
    }, [keyword]);

    return gifUrl;
};

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount }) => {
    const gifUrl = useFetchGif(keyword);

    return (
        <div className="bg-[#181918] m-4 flex flex-1
            2xl:min-w-[450px]
            2xl:max-w-[500px]
            sm:min-w-[270px]
            sm:max-w-[300px]
            min-w-full
            flex-col p-3 rounded-md hover:shadow-2xl"
        >
            <div className="flex flex-col items-center w-full mt-3">
                <div className="display-flex justify-start w-full mb-6 p-2">
                    <a href={`https://sepolia.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
                        <p className="text-white text-base">From: {addressFrom.slice(0, 8)}...{addressFrom.slice(-6)}</p>
                    </a>
                    <a href={`https://sepolia.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
                        <p className="text-white text-base">To: {addressTo.slice(0, 8)}...{addressTo.slice(-6)}</p>
                    </a>
                    <p className="text-white text-base">Amount: {amount} ETH</p>
                    {message && (
                        <>
                            <br />
                            <p className="text-white text-base">Message: {message}</p>
                        </>
                    )}
                </div>
                {gifUrl && (
                    <img
                        src={gifUrl}
                        alt="gif"
                        className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
                    />
                )}
                <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                    <p className="text-[#37c7da] font-bold">{timestamp}</p>
                </div>
            </div>
        </div>
    );
};

const Transactions = () => {
    const { transactions, currentAccount } = useContext(TransactionContext);

    return (
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
            <div className="flex flex-col md:p-12 py-12 px-4">
                {currentAccount ? (
                    <h3 className="text-white text-3xl text-center my-2">
                        Latest Transactions
                    </h3>
                ) : (
                    <h3 className="text-white text-3xl text-center my-2">
                        Connect your account to see the latest transactions
                    </h3>
                )}

                <div className="flex flex-wrap justify-center items-center mt-10">
                    {transactions.reverse().map((transaction, i) => (
                        <TransactionCard key={i} {...transaction} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Transactions;