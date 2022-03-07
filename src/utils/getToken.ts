import { ChainId, Token, WETH } from '@xxxswap/sdk'
//import { TOKENS } from '@xxxswap/sdk-extra'

export default function getTokenWithDefault(chainId: ChainId | undefined, symbol: string): Token | undefined {
  if (chainId === undefined) return undefined
  symbol = symbol.toUpperCase()

  switch (symbol) {
    case 'WETH':
    case 'WBNB':
    case 'WONE':
      return WETH[chainId]
    default:
      //return TOKENS[chainId].firstBySymbol(symbol)
      return WETH[chainId]
  }
}
