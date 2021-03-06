import BigNumber from 'bignumber.js';
import { ECSignature } from '@0xproject/types';
export interface ExpanseOrder {
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
export interface ExpanseOrderUnsigned {
    maker: 'SET';
    taker: 'SET';
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
export interface ExpanseOrderSigned extends ExpanseOrder {
    ecSignature: ECSignature;
}
export declare enum UserOrderType {
    BUY = "BUY",
    SELL = "SELL",
}
export declare enum ExpanseOrderStatus {
    FILLED = "FILLED",
    OPEN = "OPEN",
}
export declare enum ExpanseResponseStatus {
    SUCCESS = "success",
    ERROR = "error",
}
export interface ExpanseToken {
    address: string;
    decimals: number;
    name: string;
    symbol: string;
}
export interface ExpanseLimitOrderRequest {
    type: UserOrderType;
    quantity: BigNumber;
    price: BigNumber;
    expiration: BigNumber;
}
export interface ExpanseMarketOrderRequest {
    type: UserOrderType;
    quantity: BigNumber;
}
export interface ExpanseResponse {
    message: string;
    status: ExpanseResponseStatus;
}
export interface ExpanseMarket {
    id: string;
    baseTokenAddress: string;
    quoteTokenAddress: string;
    baseTokenDecimals: number;
    quoteTokenDecimals: number;
    quoteIncrement: BigNumber;
    displayName: string;
    minOrderSize: BigNumber;
    maxOrderSize: BigNumber;
    lastTradePrice: BigNumber;
}
export interface ExpanseTicker {
    transactionHash: string;
    price: BigNumber;
    size: BigNumber;
    bid: BigNumber;
    ask: BigNumber;
    volume: BigNumber;
    timestamp: BigNumber;
}
export interface ExpanseMarketRequest {
    id: string;
    baseTokenAddress: string;
    quoteTokenAddress: string;
    baseTokenDecimals: number;
    quoteTokenDecimals: number;
    quoteIncrement: BigNumber;
}
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
    paidMakerFee: BigNumber;
    paidTakerFee: BigNumber;
    filledBaseTokenAmount: BigNumber;
    filledQuoteTokenAmount: BigNumber;
    orderHash: string;
    timestamp: number;
}
export interface ExpanseMarketOrderResponse {
    averagePrice: BigNumber;
    bestPrice: BigNumber;
    worstPrice: BigNumber;
    spread: BigNumber;
    orders: ExpanseOrderSigned[];
}
