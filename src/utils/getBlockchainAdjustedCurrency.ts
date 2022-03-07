import { Blockchain, Currency, ETHER, BINANCE_COIN, TEST_COIN, HARMONY } from '@xxxswap/sdk'

export default function getBlockchainAdjustedCurrency(
  blockchain: Blockchain,
  currency: Currency | undefined
): Currency | undefined {
  if (!currency) return currency
  if (currency !== ETHER) return currency
  switch (blockchain) {
    case Blockchain.BINANCE_SMART_CHAIN:
      return BINANCE_COIN
    case Blockchain.HARMONY:
      return HARMONY
    case Blockchain.LOCAL:
      return TEST_COIN
    default:
      return ETHER
  }
}
