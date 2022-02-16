import { Blockchain } from '@xxxswap/sdk'

// Returns the block time in seconds
export default function getBlockchainBlockTime(blockchain: Blockchain): number {
  switch (blockchain) {
    case Blockchain.BINANCE_SMART_CHAIN:
      return 3
    case Blockchain.HARMONY:
      return 2
    case Blockchain.LOCAL:
      return 1
    default:
      return 13
  }
}
