import { useState } from 'react';
import send from 'provider'
import { ethers } from "ethers";
import './App.css';



const App = () => {
  const [account,setAccount] = useState("");

  const h = "Connect Wallet"
  const connectWallet = async()=>{
    if(typeof window!="undefined" && typeof window.ethereum != "undefined"){
      try{
        /*
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
        setAccount(accounts[0])
        console.log(account)
        */
        //send(account)
                  
          // A Web3Provider wraps a standard Web3 provider, which is
          // what MetaMask injects as window.ethereum into each page
          

          // MetaMask requires requesting permission to connect users accounts
          await provider.send("eth_requestAccounts", []);

          // The MetaMask plugin also allows signing transactions to
          // send ether and pay to change state within the blockchain.
          // For this, you need the account signer...
          const signer = provider.getSigner()
          const address = await signer.getAddress();

          await provider.getBlockNumber()
          var balance = await provider.getBalance(address)
          var numberOfTransaction = await provider.getTransactionCount(address)
          console.log(ethers.utils.formatEther(balance))
          console.log(numberOfTransaction);
          
          // '0.182826475815887608'

          // If a user enters a string in an input field, you may need
          // to convert it from ether (as a string) to wei (as a BigNumber)
          
          //ethers.utils.parseEther("1.0")
          //console.log(balance);
          
      }catch(err){
        console.error(err)
      }
    }else{
      console.log("Please install Metamask")
    }
  }

  

  
  
  return (
    <div>  
      <button onClick={ () =>  connectWallet()}>{h}</button>
      <button onClick={()=> console.log(account)}> check wallet</button>
    </div>
  )
}

export default App;
