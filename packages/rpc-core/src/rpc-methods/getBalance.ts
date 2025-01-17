import { Address } from '@solana/addresses';
import type { IRpcApiMethods } from '@solana/rpc-transport';
import { Commitment, LamportsUnsafeBeyond2Pow53Minus1 } from '@solana/rpc-types';

import { RpcResponse, Slot } from './common';

type GetBalanceApiResponse = RpcResponse<LamportsUnsafeBeyond2Pow53Minus1>;

export interface GetBalanceApi extends IRpcApiMethods {
    /**
     * Returns the balance of the account of provided Pubkey
     */
    getBalance(
        address: Address,
        config?: Readonly<{
            commitment?: Commitment;
            minContextSlot?: Slot;
        }>,
    ): GetBalanceApiResponse;
}
