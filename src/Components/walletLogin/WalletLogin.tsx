import React, { useState } from "react";
import "./WalletLogin.scss";

interface WalletLoginProps {
  onNext: () => void;
}

const WalletLogin: React.FC<WalletLoginProps> = ({ onNext }) => {
  const [walletAddress, setWalletAddress] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle wallet login
    onNext();
  };

  return (
    <div className="wallet-login">
      <h2>Wallet Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="walletAddress">Wallet Address:</label>
          <input
            type="text"
            id="walletAddress"
            name="walletAddress"
            value={walletAddress}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default WalletLogin;
