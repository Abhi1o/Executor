// import React, { useState } from 'react';
// import axios from 'axios';

// const SendToken: React.FC = () => {
//     const [senderSecretKey, setSenderSecretKey] = useState<string>('');
//     const [receiverAddress, setReceiverAddress] = useState<string>('');
//     const [amount, setAmount] = useState<number>(0);
//     const [status, setStatus] = useState<string>('');

//     const sendToken = async () => {
//         setStatus('Sending...');

//         try {
//             const response = await axios.post('http://localhost:3000/send-token', {
//                 senderSecretKey: JSON.parse(senderSecretKey),
//                 receiverAddress,
//                 amount,
//             });
//             setStatus(`Transaction successful with signature: ${response.data.signature}`);
//         } catch (error) {
//             setStatus(`Error: ${error.response?.data.error || error.message}`);
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
//             <h1 className="text-3xl mb-6">Send Solana Token</h1>
//             <div className="mb-4">
//                 <input
//                     type="text"
//                     placeholder="Sender Secret Key"
//                     value={senderSecretKey}
//                     onChange={(e) => setSenderSecretKey(e.target.value)}
//                     className="p-2 bg-gray-800 rounded"
//                 />
//             </div>
//             <div className="mb-4">
//                 <input
//                     type="text"
//                     placeholder="Receiver Address"
//                     value={receiverAddress}
//                     onChange={(e) => setReceiverAddress(e.target.value)}
//                     className="p-2 bg-gray-800 rounded"
//                 />
//             </div>
//             <div className="mb-4">
//                 <input
//                     type="number"
//                     placeholder="Amount"
//                     value={amount}
//                     onChange={(e) => setAmount(Number(e.target.value))}
//                     className="p-2 bg-gray-800 rounded"
//                 />
//             </div>
//             <button onClick={sendToken} className="p-2 bg-blue-600 rounded">
//                 Send
//             </button>
//             {status && <p className="mt-4">{status}</p>}
//         </div>
//     );
// };

// export default SendToken;



import React, { useState } from 'react';
import axios from 'axios';

const SendToken: React.FC = () => {
    const [mnemonic, setMnemonic] = useState<string>('');
    const [recipient, setRecipient] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [status, setStatus] = useState<string>('');

    const sendToken = async () => {
        setStatus('Sending...');

        try {
            const response = await axios.post('http://localhost:8080/api/transaction', {
                chainName: 'solana',
                transactionType: 'send',
                mnemonic,
                params: {
                    recipient,
                    amount,
                },
            });
            setStatus(`Transaction successful with signature: ${response.data.hash}`);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setStatus(`Error: ${error.response?.data || error.message}`);
            } else {
                setStatus(`Error: ${String(error)}`);
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <h1 className="text-3xl mb-6">Send Solana Token</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Mnemonic"
                    value={mnemonic}
                    onChange={(e) => setMnemonic(e.target.value)}
                    className="p-2 bg-gray-800 rounded"
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Recipient Address"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    className="p-2 bg-gray-800 rounded"
                />
            </div>
            <div className="mb-4">
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="p-2 bg-gray-800 rounded"
                />
            </div>
            <button onClick={sendToken} className="p-2 bg-blue-600 rounded">
                Send
            </button>
            {status && <p className="mt-4">{status}</p>}
        </div>
    );
};

export default SendToken;
