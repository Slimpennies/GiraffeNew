import { Web3Button } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { nftDropContractAddress } from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";

const Mint: NextPage = () => {
  const router = useRouter();
  const address = useAddress();

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Mint A Giraffe NFT!</h1>

      <p className={styles.explain}>
        Mint a Generated Giraffe NFT for 0.025 BNB on the Binance Smart Chain.
      </p>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      <Web3Button
        theme="dark"
        contractAddress={nftDropContractAddress}
        action={(contract) => contract.call("mint", [address, 1], {value: ethers.utils.parseEther("0.025")})}
        overrides={{
          accessList: [], // The AccessList to include; only available for EIP-2930 and EIP-1559 transactions.
          blockTag: "latest", // A BlockTag specifies a specific block location in the Blockchain.
          ccipReadEnabled: false, // https://eips.ethereum.org/EIPS/eip-3668#use-of-ccip-read-for-transactions
          customData: {}, // The transaction data.
          from: address, // The address this transaction is from.
          gasLimit: 100000, // The maximum amount of gas this transaction is permitted to use.
          gasPrice: 100000, // The price (in wei) per unit of gas this transaction will pay.
          maxFeePerGas: 100000, // The maximum price (in wei) per unit of gas this transaction will pay
          maxPriorityFeePerGas: 0, // The price (in wei) per unit of gas this transaction will allow in addition to the block's base fee
          nonce: 0, // The nonce used as part of the proof-of-work to mine this block.
          type: 0, // The EIP-2718 type of this transaction envelope, or undefined for to use the network default
        }}
        onSuccess={() => {
          alert("NFT Minted!");
          router.push("/stake");
        }}
        onError={(error) => {
          alert(error);
        }}
      >
        Mint An NFT
      </Web3Button>
    </div>
  );
};

export default Mint;
