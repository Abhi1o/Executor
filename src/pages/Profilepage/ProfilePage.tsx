// import React, { useState, useEffect } from 'react';
// import CryptoJS from 'crypto-js';
// import { useNavigate } from 'react-router-dom';
// import './Profile.css';

// const ProfilePage = () => {
//   const [mnemonic, setMnemonic] = useState("");
//   const [publicKey, setPublicKey] = useState("");
//   const [privateKey, setPrivateKey] = useState("");
//   const [name, setName] = useState("");
//   const [isPrivateMode, setIsPrivateMode] = useState(false);
//   const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedPrivateKey = localStorage.getItem("encryptedPrivateKey");
//     // const storedName = localStorage.getItem("username");

//     if (storedPrivateKey) {
//       setShowPasswordPrompt(true);
//     } else {
//       alert("No wallet found. Please complete the onboarding process.");
//       navigate("/onboarding");
//     }
//   }, [navigate]);

//   const handlePasswordSubmit = () => {
//     const storedPrivateKey = localStorage.getItem("encryptedPrivateKey");
//     if (storedPrivateKey && password) {
//       try {
//         const decryptedPrivateKey = CryptoJS.AES.decrypt(storedPrivateKey, password).toString(CryptoJS.enc.Utf8);
//         if (decryptedPrivateKey) {
//           setPrivateKey(decryptedPrivateKey);
//           const { derivedPublicKey, derivedMnemonic } = derivePublicKeyAndMnemonic(decryptedPrivateKey);
//           setPublicKey(derivedPublicKey);
//           setMnemonic(derivedMnemonic);
//           setName(localStorage.getItem("username") || "");
//           setShowPasswordPrompt(false);
//         } else {
//           setError("Incorrect password.");
//         }
//       } catch (error) {
//         setError("Incorrect password.");
//       }
//     }
//   };

//   const derivePublicKeyAndMnemonic = (privateKey: string) => {
//     return {
//       derivedPublicKey: "publicKeyDerivedFromPrivateKey",
//       derivedMnemonic: "mnemonicDerivedFromPrivateKey",
//     };
//   };

//   const togglePrivateMode = () => {
//     setIsPrivateMode(!isPrivateMode);
//   };

//   return (
//     <div className="profile-wrapper">
//       <div className="profile-page">
//         <div className="profile-container">
//           <div className="profile-header">
//             <img src="profile-pic-placeholder.png" alt="Profile" className="profile-pic" />
//             <div>
//               <h1>{name}</h1>
//               <p><strong>Public Key:</strong> {isPrivateMode ? "********" : publicKey}</p>
//             </div>
//             <button className="private-mode-btn" onClick={togglePrivateMode}>
//               {isPrivateMode ? "Private Mode: On" : "Private Mode: Off"}
//             </button>
//           </div>
//           <div className="details">
//             <p><strong>Private Key:</strong> {isPrivateMode ? "********" : privateKey}</p>
//             <p><strong>Mnemonic:</strong> {isPrivateMode ? "********" : mnemonic}</p>
//             <p><strong>Available Value:</strong> $8.84</p>
//           </div>
//           <button className="manage-account-btn">Manage Account</button>
//         </div>
//       </div>
//       {/* {showPasswordPrompt && (
//         <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-75 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg text-center">
//             <h2 className="mb-4">Please enter your password to decrypt your private key:</h2>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-3/4 p-2 border border-gray-300 rounded mb-4"
//             />
//             <button
//               onClick={handlePasswordSubmit}
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Submit
//             </button>
//             {error && <p className="mt-4 text-red-500">{error}</p>}
//           </div>
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default ProfilePage;


// import React, { useEffect, useState } from 'react';
// import CryptoJS from 'crypto-js';
// import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
// import { SigningStargateClient } from '@cosmjs/stargate';
// import { Toaster, toast } from "sonner";
// import 'react-toastify/dist/ReactToastify.css';



// const ProfilePage: React.FC = () => {
//   const [profileName, setProfileName] = useState<string>('');
//   const [profileImage, setProfileImage] = useState<string>('');
//   const [mnemonic, setMnemonic] = useState<string>('');
//   const [publicKey, setPublicKey] = useState<string>('');
//   const [privateKey, setPrivateKey] = useState<string>('');
//   const [cosmosBalance, setCosmosBalance] = useState<string>('');

//   useEffect(() => {
//     const storedName = localStorage.getItem('walletname');
//     const storedImage = localStorage.getItem('profileImage');
//     const storedEncryptedMnemonic = localStorage.getItem('mnemonic');
//     const storedPassword = localStorage.getItem('password');

//     if (storedName) setProfileName(storedName);
//     if (storedImage) setProfileImage(storedImage);

//     if (storedEncryptedMnemonic && storedPassword) {
//       const decryptedMnemonic = CryptoJS.AES.decrypt(storedEncryptedMnemonic, storedPassword).toString(CryptoJS.enc.Utf8);
//       setMnemonic(decryptedMnemonic);
//       initializeWallet(decryptedMnemonic);
//     }
//   }, []);

//   const initializeWallet = async (mnemonic: string) => {
//     try {
//       const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "cosmos" });
//       const [{ address, pubkey }] = await wallet.getAccounts();

//       setPublicKey(Buffer.from(pubkey).toString('hex'));

//       const privateKeyBytes = await wallet.serialize();
//       const privateKey = JSON.parse(privateKeyBytes).privKey;
//       setPrivateKey(privateKey);

//       fetchCosmosBalance(address);
//     } catch (error) {
//       toast.error('Failed to initialize wallet.');
//       console.error(error);
//     }
//   };

//   const fetchCosmosBalance = async (address: string) => {
//     try {
//       const rpcEndpoint = 'http://localhost:8080';
//       const client = await SigningStargateClient.connect(rpcEndpoint);
//       const account = await client.getAccount(address);

//       if (account && account.balance && account.balance.length > 0) {
//         const balance = account.balance[0].amount;
//         setCosmosBalance(balance);
//       } else {
//         setCosmosBalance('0');
//       }
//     } catch (error) {
//       toast.error('Failed to fetch Cosmos balance.');
//       console.error(error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
//         <div className="flex justify-between p-4 bg-gray-800 text-white">
//           <div className="text-2xl font-bold">{profileName}</div>
//           {profileImage && <img src={profileImage} alt="Profile" className="h-12 w-12 rounded-full" />}
//         </div>
//         <div className="p-4">
//           <h2 className="text-xl font-semibold mb-4">Wallet Details</h2>
//           <div className="mb-4">
//             <h3 className="text-lg font-medium">Public Key</h3>
//             <p className="break-all bg-gray-100 p-2 rounded">{publicKey}</p>
//           </div>
//           <div className="mb-4">
//             <h3 className="text-lg font-medium">Private Key</h3>
//             <p className="break-all bg-gray-100 p-2 rounded">{privateKey}</p>
//           </div>
//           <div className="mb-4">
//             <h3 className="text-lg font-medium">Mnemonic</h3>
//             <p className="break-all bg-gray-100 p-2 rounded">{mnemonic}</p>
//           </div>
//           <div>
//             <h3 className="text-lg font-medium">Cosmos Balance</h3>
//             <p className="bg-gray-100 p-2 rounded">{cosmosBalance} ATOM</p>
//           </div>
//         </div>
//       </div>
//       <Toaster richColors position="top-right" />
//     </div>
//   );
// };

// export default ProfilePage;


// import React, { useState, useEffect } from 'react';
// import CryptoJS from 'crypto-js';
// import { useNavigate } from 'react-router-dom';
// import './Profile.css';

// const ProfilePage = () => {
//   const [mnemonic, setMnemonic] = useState("");
//   const [publicKey, setPublicKey] = useState("");
//   const [privateKey, setPrivateKey] = useState("");
//   const [name, setName] = useState("");
//   const [isPrivateMode, setIsPrivateMode] = useState(false);
//   const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedPrivateKey = localStorage.getItem("encryptedPrivateKey");
//     // const storedName = localStorage.getItem("username");

//     if (storedPrivateKey) {
//       setShowPasswordPrompt(true);
//     } else {
//       alert("No wallet found. Please complete the onboarding process.");
//       navigate("/onboarding");
//     }
//   }, [navigate]);

//   const handlePasswordSubmit = () => {
//     const storedPrivateKey = localStorage.getItem("encryptedPrivateKey");
//     if (storedPrivateKey && password) {
//       try {
//         const decryptedPrivateKey = CryptoJS.AES.decrypt(storedPrivateKey, password).toString(CryptoJS.enc.Utf8);
//         if (decryptedPrivateKey) {
//           setPrivateKey(decryptedPrivateKey);
//           const { derivedPublicKey, derivedMnemonic } = derivePublicKeyAndMnemonic(decryptedPrivateKey);
//           setPublicKey(derivedPublicKey);
//           setMnemonic(derivedMnemonic);
//           setName(localStorage.getItem("username") || "");
//           setShowPasswordPrompt(false);
//         } else {
//           setError("Incorrect password.");
//         }
//       } catch (error) {
//         setError("Incorrect password.");
//       }
//     }
//   };

//   const derivePublicKeyAndMnemonic = (privateKey: string) => {
//     return {
//       derivedPublicKey: "publicKeyDerivedFromPrivateKey",
//       derivedMnemonic: "mnemonicDerivedFromPrivateKey",
//     };
//   };

//   const togglePrivateMode = () => {
//     setIsPrivateMode(!isPrivateMode);
//   };

//   return (
//     <div className="profile-wrapper">
//       <div className="profile-page">
//         <div className="profile-container">
//           <div className="profile-header">
//             <img src="profile-pic-placeholder.png" alt="Profile" className="profile-pic" />
//             <div>
//               <h1>{name}</h1>
//               <p><strong>Public Key:</strong> {isPrivateMode ? "********" : publicKey}</p>
//             </div>
//             <button className="private-mode-btn" onClick={togglePrivateMode}>
//               {isPrivateMode ? "Private Mode: On" : "Private Mode: Off"}
//             </button>
//           </div>
//           <div className="details">
//             <p><strong>Private Key:</strong> {isPrivateMode ? "********" : privateKey}</p>
//             <p><strong>Mnemonic:</strong> {isPrivateMode ? "********" : mnemonic}</p>
//             <p><strong>Available Value:</strong> $8.84</p>
//           </div>
//           <button className="manage-account-btn">Manage Account</button>
//         </div>
//       </div>
//       {/* {showPasswordPrompt && (
//         <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-75 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg text-center">
//             <h2 className="mb-4">Please enter your password to decrypt your private key:</h2>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-3/4 p-2 border border-gray-300 rounded mb-4"
//             />
//             <button
//               onClick={handlePasswordSubmit}
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Submit
//             </button>
//             {error && <p className="mt-4 text-red-500">{error}</p>}
//           </div>
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default ProfilePage;


import React, { useEffect, useState } from 'react';
import { Secp256k1HdWallet } from "@cosmjs/amino";
import { StargateClient, SigningStargateClient } from "@cosmjs/stargate";
import { Wallet, ethers } from 'ethers';
import { fetchBalance } from './cosmosUtils'; // Adjust the import path as needed
// import { getWalletInfoFromMnemonic } from './walletinfo';
const ProfilePage: React.FC = () => {
  const [profileName, setProfileName] = useState<string>('');
  const [publicKey, setPublicKey] = useState<string>('');
  const [privateKey, setPrivateKey] = useState<string>('');
  const [mnemonic, setMnemonic] = useState<string>('');
  const [balance, setBalance] = useState<string>('0');
  const [isPrivateMode, setIsPrivateMode] = useState(false);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [defaultAccountIndex, setDefaultAccountIndex] = useState<number>(0);


  useEffect(() => {
    // Load profile name from local storage on mount
    const storedName = localStorage.getItem('profileName');
    if (storedName) setProfileName(storedName);

    // Load accounts from local storage on mount
    const storedAccounts = localStorage.getItem('accounts');
    if (storedAccounts) {
      setAccounts(JSON.parse(storedAccounts));
    }

    // Load default account index from local storage on mount
    const storedDefaultAccountIndex = localStorage.getItem('defaultAccountIndex');
    if (storedDefaultAccountIndex) {
      setDefaultAccountIndex(parseInt(storedDefaultAccountIndex, 10));
    }
  }, []);

  // Function to handle adding a new account
  const handleAddAccount = async (mnemonic: string) => {
    try {
      // Create a new account from mnemonic
      const wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "cosmos" });
      const [{ address }] = await wallet.getAccounts();

      // Fetch balance for the new account
      const rpcEndpoint = "http://localhost:8080"; // Replace with your specific RPC URL
      const client = await StargateClient.connect(rpcEndpoint);
      const balances = await client.getAllBalances(address);
      const balanceAmount = balances.find(b => b.denom === 'uatom')?.amount || '0';

      // Create new account object
      const newAccount: Account = {
        name: `Account ${accounts.length + 1}`,
        mnemonic: mnemonic,
        publicKey: address,
        balance: balanceAmount,
      };

      // Update accounts state and local storage
      const updatedAccounts = [...accounts, newAccount];
      setAccounts(updatedAccounts);
      localStorage.setItem('accounts', JSON.stringify(updatedAccounts));

      // Update default account index to the newly added account
      setDefaultAccountIndex(updatedAccounts.length - 1);
      localStorage.setItem('defaultAccountIndex', (updatedAccounts.length - 1).toString());
    } catch (error) {
      console.error('Failed to add new account:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  // Function to handle setting default account
  const handleSetDefaultAccount = (index: number) => {
    setDefaultAccountIndex(index);
    localStorage.setItem('defaultAccountIndex', index.toString());
  };
  

  useEffect(() => {
    const fetchWalletInfo = async () => {
      const storedName = localStorage.getItem('profileName');
      if (storedName) setProfileName(storedName);

      const storedMnemonic = localStorage.getItem('mnemonic');
      if (storedMnemonic) {
        try {
          // Generate wallet from mnemonic
          setMnemonic(storedMnemonic);
          // const wallet = ethers.Wallet.fromPhrase(storedMnemonic);
          // setPublicKey(wallet.address);
          // setPrivateKey(wallet.privateKey);

          // // Fetch balance
          // const rpcUrl = 'http://localhost:8080'; // Replace with your specific RPC URL
          // const balanceAmount = await fetchBalance("cosmos1g0x26xajpfsns9q9flw3r99przgs8acau9dmde", rpcUrl, 'uatom');
          // setBalance(balanceAmount);
          // localStorage.setItem('cosmosbalance',balanceAmount);
          

          const wallet = await Secp256k1HdWallet.fromMnemonic(storedMnemonic, { prefix: "cosmos" });
          console.log("wallet",wallet);
          const [{ address}] = await wallet.getAccounts();
          setPublicKey(address);
          localStorage.setItem('address', address);
          // Fetch private key from mnemonic
          // const ethWallet = ethers.Wallet.fromMnemonic(storedMnemonic);
          // setPrivateKey(ethWallet.privateKey);

          //         const privKey = await wallet.getAccountData(address);
      // setPrivateKey(Buffer.from(privKey.privkey).toString('hex'));
              const rpcEndpoint = "http://localhost:8080";
              const client = await StargateClient.connect(rpcEndpoint);
              console.log("client: ", client);
              console.log(address);
              // console.log("chain id: ", await client.getChainId());
              const balances = await client.getAllBalances(address);
              const balanceAmount = balances.find(b => b.denom === 'uatom')?.amount || '0';
              setBalance(balanceAmount);
              localStorage.setItem('cosmosbalance', balanceAmount);
        } catch (error) {
          console.error('Failed to fetch wallet info:', error);
          // Handle error (e.g., show error message to user)
        }
      }
    };
    

    fetchWalletInfo();
  }, []);


const togglePrivateMode = () => {
          setIsPrivateMode(!isPrivateMode);
        };
  return (
    <div className="min-h-screen  bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-yellow-200 rounded-full flex items-center justify-center">
                <img
                  src="https://placekitten.com/200/200" // Replace with actual profile image
                  alt="Profile"
                  className="h-12 w-12 rounded-full"
                />
              </div>

              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">{profileName}</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">Cosmos Wallet</p>
              </div>
              <button
                  onClick={() => {
                    const mnemonic = prompt('Enter mnemonic to add as new account');
                    if (mnemonic) {
                      handleAddAccount(mnemonic);
                      window.location.reload();
                    }
                  }}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Add Account
                </button>
              <button className="private-mode-btn" onClick={togglePrivateMode}>
               {isPrivateMode ? "Private Mode: On" : "Private Mode: Off"}
             </button>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <span className="font-bold">Public Key:</span>
                  <span className="text-sm break-all">{isPrivateMode ? "********" : publicKey}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold">Private Key:</span>
                  <span className="text-sm break-all"> {isPrivateMode ? "********" : privateKey}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold">Mnemonic:</span>
                  <span className="text-sm break-all">{isPrivateMode ? "********" : mnemonic}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold">Balance:</span>
                  <span className="text-sm">{balance} ATOM</span>
                </div>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                {accounts.map((account, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="font-bold">Account {index + 1}</span>
                    <span className="text-sm break-all">{account.publicKey}</span>
                    {index === defaultAccountIndex && <span className="text-xs text-green-500">Default</span>}
                    <button
                      onClick={() => handleSetDefaultAccount(index)}
                      className="mt-2 bg-blue-500 text-white px-2 py-1 rounded-lg text-xs"
                    >
                      Set as Default
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface Account {
  name: string;
  mnemonic: string;
  publicKey: string;
  balance: string;
}

export default ProfilePage;






