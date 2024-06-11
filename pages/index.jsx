import { useState, useEffect } from "react";
import { ethers } from "ethers";
import crowdFundingAbi from "../artifacts/contracts/CrowdFunding.sol/CrowdFunding.json";
import tuneTunnelDashboard from "../public/tuneTunnelDashboard.png";
import Image from "next/image";

export default function App() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [crowdFunding, setCrowdFunding] = useState(undefined);
  const [crowdFundingSigner, setCrowdFundingSigner] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [amountEntered, setAmountEntered] = useState(0);
  const [fundName, setFundName] = useState(undefined);
  const [loaded, setLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [creator, setCreator] = useState(undefined);
  const [fundingLimit, setFundingLimit] = useState(0);

  // const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
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

  const getProjectName = async () => {
    if (crowdFunding) {
      const NAME = await crowdFundingSigner.getProjectName();
      setFundName(NAME);
    }
  };

  const getCreator = async () => {
    if (crowdFunding) {
      const CREATOR = await crowdFundingSigner.getCreator();
      setCreator(CREATOR);
    }
  };

  const getFundingLimit = async () => {
    if (crowdFunding) {
      const FUNDING_LIMIT = await crowdFundingSigner.getFundingLimit();
      setFundingLimit(FUNDING_LIMIT);
    }
  };

  const getBalance = async () => {
    if (crowdFunding) {
      const balance = await crowdFunding.getAmountRaised();
      setBalance(balance);
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    getWallet();
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (crowdFunding) {
      getProjectName();
      getCreator();
      getFundingLimit();
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
      <div className="flex flex-col justify-center items-center w-full h-full gap-3">
        <p className="text-white font-bold text-5xl">
          Project Name: {fundName || "Loading..."}
        </p>
        <p className="text-gray-300  text-2xl">
          Creator address: {creator !== undefined ? `${creator}` : "Loading..."}
        </p>
        <p className="text-gray-300  text-2xl">
          Required Funding:{" "}
          {fundingLimit !== undefined ? `${fundingLimit} WEI` : "Loading..."}
        </p>
        <p className="text-gray-300  text-2xl">
          Amount Raised till Now:{" "}
          {balance !== undefined ? `${balance} WEI` : "Loading..."}
        </p>
        <p className="text-gray-300  text-2xl">
          Amount Left to raise:{" "}
          {balance !== undefined && fundingLimit !== undefined
            ? `${BigInt(fundingLimit) - balance} WEI`
            : "Loading..."}
        </p>
        <input
          placeholder="Enter the amount to donate"
          className="border-2 border-gray-400 my-5 text-xl bg-[#08083b] rounded-full px-4 py-3 placeholder:text-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0a0a89] focus:border-white focus:border-[3px]"
          onChange={(e) => setAmountEntered(e.target.value)}
        />
        <button
          onClick={contributeToFund}
          className="border-2 border-gray-400  text-white  bg-[#0a0a89] rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Donate
        </button>
      </div>
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-indigo-950">
      <Image
        src={tuneTunnelDashboard} // Replace with the path to your image
        alt="Background"
        width="1000"
        height="1000"
        onLoad={handleImageLoad}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out ${
          imageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      />
      <div
        className={`absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-1000 ease-in-out ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-1000 ease-in-out ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div
          className={`absolute inset-0  transition-opacity duration-1000 ease-in-out ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {initUser()}
        </div>
      </div>
    </div>
  );
}
