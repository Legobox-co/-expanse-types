import BigNumber from 'bignumber.js';
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
export declare enum UserOrderType {
    BUY = "BUY",
    SELL = "SELL",
}
export declare enum ExpanseResponseStatus {
    SUCCESS = "success",
    ERROR = "error",
}
export interface ExpanseOrderUnsigned {
    makerTokenAddress: string;
    takerTokenAddress: string;
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
export interface ExpanseToken {
    address: string;
    symbol: string;
    name: string;
    decimals: number;
    zeroex_official: boolean;
    active: boolean;
    createdDate: string;
    quote: boolean;
}
export interface ExpanseResponse {
    message: string;
    status: ExpanseResponseStatus;
}
export interface ExpanseOrderSigned {
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
export interface ExpanseMarketRequest {
    id: string;
    baseTokenAddress: string;
    quoteTokenAddress: string;
    baseTokenDecimals: number;
    quoteTokenDecimals: number;
    quoteIncrement: BigNumber;
}
