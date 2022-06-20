(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 2861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import { BigNumber, BigNumberish } from \"@ethersproject/bignumber\";\nimport { BytesLike } from \"@ethersproject/bytes\";\nimport { Network } from \"@ethersproject/networks\";\nimport { Deferrable, Description } from \"@ethersproject/properties\";\nimport { AccessListish, Transaction } from \"@ethersproject/transactions\";\nimport { OnceBlockable } from \"@ethersproject/web\";\nexport declare type TransactionRequest = {\n    to?: string;\n    from?: string;\n    nonce?: BigNumberish;\n    gasLimit?: BigNumberish;\n    gasPrice?: BigNumberish;\n    data?: BytesLike;\n    value?: BigNumberish;\n    chainId?: number;\n    type?: number;\n    accessList?: AccessListish;\n    maxPriorityFeePerGas?: BigNumberish;\n    maxFeePerGas?: BigNumberish;\n    customData?: Record<string, any>;\n};\nexport interface TransactionResponse extends Transaction {\n    hash: string;\n    blockNumber?: number;\n    blockHash?: string;\n    timestamp?: number;\n    confirmations: number;\n    from: string;\n    raw?: string;\n    wait: (confirmations?: number) => Promise<TransactionReceipt>;\n}\nexport declare type BlockTag = string | number;\nexport interface _Block {\n    hash: string;\n    parentHash: string;\n    number: number;\n    timestamp: number;\n    nonce: string;\n    difficulty: number;\n    _difficulty: BigNumber;\n    gasLimit: BigNumber;\n    gasUsed: BigNumber;\n    miner: string;\n    extraData: string;\n    baseFeePerGas?: null | BigNumber;\n}\nexport interface Block extends _Block {\n    transactions: Array<string>;\n}\nexport interface BlockWithTransactions extends _Block {\n    transactions: Array<TransactionResponse>;\n}\nexport interface Log {\n    blockNumber: number;\n    blockHash: string;\n    transactionIndex: number;\n    removed: boolean;\n    address: string;\n    data: string;\n    topics: Array<string>;\n    transactionHash: string;\n    logIndex: number;\n}\nexport interface TransactionReceipt {\n    to: string;\n    from: string;\n    contractAddress: string;\n    transactionIndex: number;\n    root?: string;\n    gasUsed: BigNumber;\n    logsBloom: string;\n    blockHash: string;\n    transactionHash: string;\n    logs: Array<Log>;\n    blockNumber: number;\n    confirmations: number;\n    cumulativeGasUsed: BigNumber;\n    effectiveGasPrice: BigNumber;\n    byzantium: boolean;\n    type: number;\n    status?: number;\n}\nexport interface FeeData {\n    maxFeePerGas: null | BigNumber;\n    maxPriorityFeePerGas: null | BigNumber;\n    gasPrice: null | BigNumber;\n}\nexport interface EventFilter {\n    address?: string;\n    topics?: Array<string | Array<string> | null>;\n}\nexport interface Filter extends EventFilter {\n    fromBlock?: BlockTag;\n    toBlock?: BlockTag;\n}\nexport interface FilterByBlockHash extends EventFilter {\n    blockHash?: string;\n}\nexport declare abstract class ForkEvent extends Description {\n    readonly expiry: number;\n    readonly _isForkEvent?: boolean;\n    static isForkEvent(value: any): value is ForkEvent;\n}\nexport declare class BlockForkEvent extends ForkEvent {\n    readonly blockHash: string;\n    readonly _isBlockForkEvent?: boolean;\n    constructor(blockHash: string, expiry?: number);\n}\nexport declare class TransactionForkEvent extends ForkEvent {\n    readonly hash: string;\n    readonly _isTransactionOrderForkEvent?: boolean;\n    constructor(hash: string, expiry?: number);\n}\nexport declare class TransactionOrderForkEvent extends ForkEvent {\n    readonly beforeHash: string;\n    readonly afterHash: string;\n    constructor(beforeHash: string, afterHash: string, expiry?: number);\n}\nexport declare type EventType = string | Array<string | Array<string>> | EventFilter | ForkEvent;\nexport declare type Listener = (...args: Array<any>) => void;\nexport declare abstract class Provider implements OnceBlockable {\n    abstract getNetwork(): Promise<Network>;\n    abstract getBlockNumber(): Promise<number>;\n    abstract getGasPrice(): Promise<BigNumber>;\n    getFeeData(): Promise<FeeData>;\n    abstract getBalance(addressOrName: string | Promise<string>, blockTag?: BlockTag | Promise<BlockTag>): Promise<BigNumber>;\n    abstract getTransactionCount(addressOrName: string | Promise<string>, blockTag?: BlockTag | Promise<BlockTag>): Promise<number>;\n    abstract getCode(addressOrName: string | Promise<string>, blockTag?: BlockTag | Promise<BlockTag>): Promise<string>;\n    abstract getStorageAt(addressOrName: string | Promise<string>, position: BigNumberish | Promise<BigNumberish>, blockTag?: BlockTag | Promise<BlockTag>): Promise<string>;\n    abstract sendTransaction(signedTransaction: string | Promise<string>): Promise<TransactionResponse>;\n    abstract call(transaction: Deferrable<TransactionRequest>, blockTag?: BlockTag | Promise<BlockTag>): Promise<string>;\n    abstract estimateGas(transaction: Deferrable<TransactionRequest>): Promise<BigNumber>;\n    abstract getBlock(blockHashOrBlockTag: BlockTag | string | Promise<BlockTag | string>): Promise<Block>;\n    abstract getBlockWithTransactions(blockHashOrBlockTag: BlockTag | string | Promise<BlockTag | string>): Promise<BlockWithTransactions>;\n    abstract getTransaction(transactionHash: string): Promise<TransactionResponse>;\n    abstract getTransactionReceipt(transactionHash: string): Promise<TransactionReceipt>;\n    abstract getLogs(filter: Filter): Promise<Array<Log>>;\n    abstract resolveName(name: string | Promise<string>): Promise<null | string>;\n    abstract lookupAddress(address: string | Promise<string>): Promise<null | string>;\n    abstract on(eventName: EventType, listener: Listener): Provider;\n    abstract once(eventName: EventType, listener: Listener): Provider;\n    abstract emit(eventName: EventType, ...args: Array<any>): boolean;\n    abstract listenerCount(eventName?: EventType): number;\n    abstract listeners(eventName?: EventType): Array<Listener>;\n    abstract off(eventName: EventType, listener?: Listener): Provider;\n    abstract removeAllListeners(eventName?: EventType): Provider;\n    addListener(eventName: EventType, listener: Listener): Provider;\n    removeListener(eventName: EventType, listener: Listener): Provider;\n    abstract waitForTransaction(transactionHash: string, confirmations?: number, timeout?: number): Promise<TransactionReceipt>;\n    readonly _isProvider: boolean;\n    constructor();\n    static isProvider(value: any): value is Provider;\n}\n//# sourceMappingURL=index.d.ts.map");

/***/ })

}]);
//# sourceMappingURL=raw-loader!-ethersproject-abstract-provider-lib-index-d-ts.0.23.1.1650320458854.js.map
//# sourceMappingURL=raw-loader!-ethersproject-abstract-provider-lib-index-d-ts.0.23.1.1650320458854.js.map