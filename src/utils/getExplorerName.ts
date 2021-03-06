import { Blockchain } from '@xxxswap/sdk'

export default function getExplorerName(blockchain: Blockchain): string {
  switch (blockchain) {
    case Blockchain.BINANCE_SMART_CHAIN:
      return 'BSCScan'
    case Blockchain.HARMONY:
      return 'Harmony Explorer'
    case Blockchain.LOCAL:
      return 'Local Explorer'
    default:
      return 'Etherscan'
  }
}
