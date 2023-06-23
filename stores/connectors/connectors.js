import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { NetworkConnector } from "@web3-react/network-connector";

const POLLING_INTERVAL = 12000;
const RPC_URLS = {
  10: "https://optimism-mainnet.infura.io/v3/5dfbeb60641144778eb6edc35f570806",
  4002: "https://rpc.testnet.fantom.network",
};

let obj = {};
if (process.env.NEXT_PUBLIC_CHAINID == 10) {
  obj = { 10: RPC_URLS[10] };
} else {
  obj = { 4002: RPC_URLS[4002] };
}

export const network = new NetworkConnector({ urls: obj });

export const injected = new InjectedConnector({
  supportedChainIds: [parseInt(process.env.NEXT_PUBLIC_CHAINID)],
});

export const walletconnect = new WalletConnectConnector({
  rpc: {
    10: RPC_URLS[10],
    4002: RPC_URLS[4002],
  },
  chainId: parseInt(process.env.NEXT_PUBLIC_CHAINID),
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});

export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[process.env.NEXT_PUBLIC_CHAINID],
  appName: "Solidly",
  chainId: parseInt(process.env.NEXT_PUBLIC_CHAINID),
});
