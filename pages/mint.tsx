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
        Mint a Generated Giraffe NFT for 0.01 ETH.
      </p>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      <Web3Button
        theme="dark"
        contractAddress={nftDropContractAddress}
        action={(contract) => contract.call("mint", [1], {value: ethers.utils.parseEther("0.01")})}
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
