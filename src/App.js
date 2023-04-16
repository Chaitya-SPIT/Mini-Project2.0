import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import abi from './contract/Healthcare.json';
import './App.css';
import Admin from "./pages/Admin";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import Patient from "./pages/Patient";
import Doctor from "./pages/Doctor";
import Form from "./components/Form";
import { Route, Routes } from 'react-router-dom';
import Authorize from './components/Authorize';

function App() {

  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })

  const [account, setAccount] = useState("None");

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x9feA270A6C78C57d38D797a10bb8A3AE4a4e3c5E";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({ method: "eth_requestAccounts" })

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          })

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          })

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractAddress, contractABI, signer);
          setAccount(account);
          setState({ provider, signer, contract });
        } else {
          alert("MetaMask Required!");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  console.log(state);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage state={state} account={account} />} />
        <Route path="/doctor" element={<Doctor state={state} account={account} />} />
        <Route path="/patient" element={<Patient state={state} account={account} />} />
        <Route path="/admin" element={<Admin state={state} account={account} />} />
        <Route path="/form" element={<Form state={state} account={account} />} />
        <Route path="/authorize" element={<Authorize state={state} account={account} />} />
      </Routes>
    </div>
  );
}

export default App;
