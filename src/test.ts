import { ethers } from 'ethers';
import { ClobClient, Side, OrderType, AssetType } from '@polymarket/clob-client';
import { config } from './config.js';
import type { Trade } from './monitor.js';

import { TradeExecutor } from './trader.js';

const trader = new TradeExecutor()

await trader.initialize()

trader.validateBalance(1, "0x4e97f49380f9296dca9ca10f2d948961f207cdef3a8f7b0a250827eca54c4734", 'BUY')