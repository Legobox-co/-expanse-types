import BigNumber from 'bignumber.js'
import {ECSignature} from '@0xproject/types'
export interface ExpanseOrder{
    maker: string;
    taker: string;
    makerFee: BigNumber;
    takerFee: BigNumber;
    makerTokenAmount: BigNumber;
    takerTokenAmount: BigNumber;
    makerTokenAddress: string;
    takerTokenAddress: string;
    salt: BigNumber;
    exchangeContractAddress: string;
    feeRecipient: string;
    expirationUnixTimestampSec: BigNumber;
}
export interface ExpanseOrderUnsigned{
    maker: 'SET';
    taker: 'SET';
    makerFee: BigNumber;
    takerFee: BigNumber;
    makerTokenAmount: BigNumber;
    takerTokenAmount: BigNumber;
    makerTokenAddress: string; // token address the maker is offering.
    takerTokenAddress: string; // token address the maker is requesting.
    salt: BigNumber;
    exchangeContractAddress: string;
    feeRecipient: string;
    expirationUnixTimestampSec: BigNumber;
}

export interface ExpanseOrderSigned extends ExpanseOrder {
    ecSignature: ECSignature
}


export enum UserOrderType {
	BUY = 'BUY',
	SELL = 'SELL'
}

export enum ExpanseOrderStatus {
    FILLED = 'FILLED',
    OPEN = 'OPEN'
}

export enum ExpanseResponseStatus{
    SUCCESS = 'success',
    ERROR = 'error'
}


export interface ExpanseToken {
    address: string,
    decimals: number,
    name: string,
    symbol: string
}

export interface ExpanseLimitOrderRequest{
	type: UserOrderType;
	quantity: BigNumber;
	price: BigNumber;
	expiration: BigNumber;
}

export interface ExpanseMarketOrderRequest{
	type: UserOrderType;
	quantity : BigNumber;
}

// export interface ExpanseToken{
// 	address: string;
// 	symbol: string;
// 	name: string;
// 	decimals: number;
// 	zeroex_official: boolean;
// 	active: boolean;
// 	createdDate: string;
// 	quote: boolean;
// }

export interface ExpanseResponse{
    message: string,
    status: ExpanseResponseStatus
}

export interface ExpanseMarket {
    id: string;
    baseTokenAddress: string;
    quoteTokenAddress: string;
    baseTokenDecimals: number;
    quoteTokenDecimals: number;
    quoteIncrement: BigNumber;
    displayName: string; // "ZRX/WETH",
    minOrderSize: BigNumber; // calculated min base token size based on last trade price
    maxOrderSize: BigNumber; // calculated max base token size based on last trade price
    lastTradePrice: BigNumber; // last trade price
}

export interface ExpanseTicker {
  transactionHash: string; // last trade tx hash
  price: BigNumber; // last trade price
  size: BigNumber; // last trade size (in quote)
  bid: BigNumber; // best bid
  ask: BigNumber; // best ask
  volume: BigNumber; // 24hr volume of market in quote
  timestamp: BigNumber // last trade time in unix time (seconds)
}

export interface ExpanseMarketRequest {
    id: string;
    baseTokenAddress: string;
    quoteTokenAddress: string;
    baseTokenDecimals: number;
    quoteTokenDecimals: number;
    quoteIncrement: BigNumber;
}


// Events and fills
export interface ExpanseEvent {
  baseTokenAddress: string;
  quoteTokenAddress: string;
  order: ExpanseOrderSigned;
}

export interface ExpanseFill extends ExpanseEvent {
  transactionHash: string;
  blockNumber: number;
  maker: string;
  taker: string;
  feeRecipient: string;
  paidMakerFee: BigNumber; // converted
  paidTakerFee: BigNumber; // converted
  filledBaseTokenAmount: BigNumber; // converted
  filledQuoteTokenAmount: BigNumber; // converted
  orderHash: string;
  timestamp: number;
}


export interface ExpanseMarketOrderResponse{
    averagePrice: BigNumber;
    bestPrice: BigNumber;
    worstPrice: BigNumber;
    spread: BigNumber;
    orders: ExpanseOrderSigned[];
}