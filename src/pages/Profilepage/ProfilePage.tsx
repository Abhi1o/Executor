import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const ProfilePage = () => {
  const [mnemonic, setMnemonic] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [name, setName] = useState("");
  const [isPrivateMode, setIsPrivateMode] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedPrivateKey = localStorage.getItem("encryptedPrivateKey");
    const storedName = localStorage.getItem("username");

    if (storedPrivateKey) {
      setShowPasswordPrompt(true);
    } else {
      alert("No wallet found. Please complete the onboarding process.");
      navigate("/onboarding");
    }
  }, [navigate]);

  const handlePasswordSubmit = () => {
    const storedPrivateKey = localStorage.getItem("encryptedPrivateKey");
    if (storedPrivateKey && password) {
      try {
        const decryptedPrivateKey = CryptoJS.AES.decrypt(storedPrivateKey, password).toString(CryptoJS.enc.Utf8);
        if (decryptedPrivateKey) {
          setPrivateKey(decryptedPrivateKey);
          const { derivedPublicKey, derivedMnemonic } = derivePublicKeyAndMnemonic(decryptedPrivateKey);
          setPublicKey(derivedPublicKey);
          setMnemonic(derivedMnemonic);
          setName(localStorage.getItem("username") || "");
          setShowPasswordPrompt(false);
        } else {
          setError("Incorrect password.");
        }
      } catch (error) {
        setError("Incorrect password.");
      }
    }
  };

  const derivePublicKeyAndMnemonic = (privateKey: string) => {
    return {
      derivedPublicKey: "publicKeyDerivedFromPrivateKey",
      derivedMnemonic: "mnemonicDerivedFromPrivateKey",
    };
  };

  const togglePrivateMode = () => {
    setIsPrivateMode(!isPrivateMode);
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-page">
        <div className="profile-container">
          <div className="profile-header">
            <img src="profile-pic-placeholder.png" alt="Profile" className="profile-pic" />
            <div>
              <h1>{name}</h1>
              <p><strong>Public Key:</strong> {isPrivateMode ? "********" : publicKey}</p>
            </div>
            <button className="private-mode-btn" onClick={togglePrivateMode}>
              {isPrivateMode ? "Private Mode: On" : "Private Mode: Off"}
            </button>
          </div>
          <div className="details">
            <p><strong>Private Key:</strong> {isPrivateMode ? "********" : privateKey}</p>
            <p><strong>Mnemonic:</strong> {isPrivateMode ? "********" : mnemonic}</p>
            <p><strong>Available Value:</strong> $8.84</p>
          </div>
          <button className="manage-account-btn">Manage Account</button>
        </div>
      </div>
      {showPasswordPrompt && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg text-center">
            <h2 className="mb-4">Please enter your password to decrypt your private key:</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-3/4 p-2 border border-gray-300 rounded mb-4"
            />
            <button
              onClick={handlePasswordSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
            {error && <p className="mt-4 text-red-500">{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
