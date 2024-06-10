import { useState, useEffect } from "react";
import { ethers } from "ethers";
import crowdFundingAbi from "../artifacts/contracts/CrowdFunding.sol/CrowdFunding.json";

export default function App() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [crowdFunding, setCrowdFunding] = useState(undefined);
  const [crowdFundingSigner, setCrowdFundingSigner] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [amountEntered, setAmountEntered] = useState(0);
  const [fundName, setFundName] = useState(undefined);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const crowdFundingABI = crowdFundingAbi.abi;

  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      handleAccount(accounts);
    } else {
      console.log("MetaMask not installed");
    }
  };

  const handleAccount = (accounts) => {
    if (accounts.length > 0) {
      console.log("Account connected: ", accounts[0]);
      setAccount(accounts[0]);
      getCrowdFundingContract(accounts[0]);
    } else {
      console.log("No account found");
    }
  };

  const connectAccount = async () => {
    if (!ethWallet) {
      alert("MetaMask wallet is required to connect");
      return;
    }

    const accounts = await ethWallet.request({ method: "eth_requestAccounts" });
    handleAccount(accounts);
  };

  const getCrowdFundingContract = async (account) => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner(account);
    console.log("Signer: ", signer); // Debugging line to check if signer is properly set
    const crowdFundingContract = new ethers.Contract(
      contractAddress,
      crowdFundingABI,
      provider
    );
    const crowdFundingContractSigner = new ethers.Contract(
      contractAddress,
      crowdFundingABI,
      signer
    );
    console.log("Contract with provider: ", crowdFundingContract); // Debugging line to check contract instance
    console.log("Contract with signer: ", crowdFundingContractSigner); // Debugging line to check contract instance
    setCrowdFunding(crowdFundingContract);
    setCrowdFundingSigner(crowdFundingContractSigner);
  };

  const contributeToFund = async () => {
    if (crowdFundingSigner && amountEntered > 0) {
      try {
        const valueInWei = ethers.parseUnits(amountEntered.toString(), "wei");
        console.log("Parsed Value in Wei: ", valueInWei); // Debugging line

        let tx = await crowdFundingSigner.contributeToFund({
          value: valueInWei,
          gasLimit: ethers.toBeHex(300000), // Adjust the gas limit as necessary
        });

        await tx.wait(); // Ensure the transaction is mined
        getBalance(); // Update balance after contribution
      } catch (error) {
        console.error("Contribution failed:", error);
      }
    } else {
      console.error(
        "crowdFundingSigner is not set or amountEntered is not valid"
      );
    }
  };

  const getBalance = async () => {
    if (crowdFunding) {
      const balance = await crowdFunding.getAmountRaised();
      setBalance(balance);
    }
  };

  const getProjectName = async () => {
    if (crowdFunding) {
      const NAME = await crowdFundingSigner.getProjectName();
      setFundName(NAME);
      console.log("response from tx : ");
      console.log(NAME);
    }
  };

  useEffect(() => {
    getWallet();
  }, []);

  useEffect(() => {
    if (crowdFunding) {
      getProjectName();
      getBalance();
    }
  }, [crowdFunding]);

  const initUser = () => {
    if (!ethWallet) {
      return <p>Please install MetaMask to use this DApp.</p>;
    }

    if (!account) {
      return (
        <button
          onClick={connectAccount}
          className="bg-slate-200 border-2 border-black px-4 py-2 rounded-full"
        >
          Connect MetaMask
        </button>
      );
    }

    return (
      <div className="w-screen h-screen">
        <div className="flex flex-col justify-center items-center w-full h-full gap-3">
          <p>Project Name: {fundName || "Loading..."}</p>
          <p>
            Balance: {balance !== undefined ? `${balance} WEI` : "Loading..."}
          </p>
          <input
            placeholder="Enter the amount to donate"
            className="border-2 border-black bg-slate-100 rounded-full px-4 py-2"
            onChange={(e) => setAmountEntered(e.target.value)}
          />
          <button
            onClick={contributeToFund}
            className="border-2 border-black bg-blue-300 rounded-full px-4 py-2"
          >
            Donate
          </button>
        </div>
      </div>
    );
  };

  return <div>{initUser()}</div>;
}
