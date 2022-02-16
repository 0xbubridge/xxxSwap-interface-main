import { Blockchain, ChainId } from '@xxxswap/sdk'

export default function getBlockchain(chainId: ChainId | undefined): Blockchain {
  switch (chainId) {
    case ChainId.MAINNET:
    case ChainId.ROPSTEN:
    case ChainId.RINKEBY:
    case ChainId.GÖRLI:
    case ChainId.KOVAN:
      return Blockchain.ETHEREUM
    case ChainId.BSC_MAINNET:
    case ChainId.BSC_TESTNET:
      return Blockchain.BINANCE_SMART_CHAIN
    case ChainId.HARMONY_MAINNET:
    case ChainId.HARMONY_TESTNET:
      return Blockchain.HARMONY
    case ChainId.LOCAL_7545:
      return Blockchain.LOCAL
    default:
      return Blockchain.ETHEREUM
  }
}
