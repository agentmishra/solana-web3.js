import type { IRpcApiMethods } from '@solana/rpc-transport';

import { Slot } from './common';

type GetMaxRetransmitSlotApiResponse = Slot;

export interface GetMaxRetransmitSlotApi extends IRpcApiMethods {
    /**
     * Get the max slot seen from retransmit stage.
     * Note that the optional NO_CONFIG object is ignored. See https://github.com/solana-labs/solana-web3.js/issues/1389
     */
    getMaxRetransmitSlot(
        // FIXME: https://github.com/solana-labs/solana-web3.js/issues/1389
        NO_CONFIG?: Record<string, never>,
    ): GetMaxRetransmitSlotApiResponse;
}
