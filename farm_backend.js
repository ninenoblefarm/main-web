    let Web3 = require('web3');

    let DATA = {};
    DATA.pool = [];
    DATA.rate = {};
    DATA.reward = 0;

    var serverbnb = "https://bsc-dataseed1.defibit.io/";
    const web3 = new Web3(new Web3.providers.HttpProvider(serverbnb));
    let CONTRACT = "0xfe7Da32f4F4e15Da115587a78bCD6Fc44951eF64";
    let NBG = "0xC866987195f2EEA49A170e328ac26E7B5565352f";
    let LP = "0x703aDE9FF10c39606EcDbbf17d3e5602001782f1";
    let BTCLP = "0x703aDE9FF10c39606EcDbbf17d3e5602001782f1";
    let RATEBNB = 0;
    let RATENBG = 0;
    let SUPPLYLP = 0;
    let SUPPLYLPBTC = 0;
    let ONLP = 0;
    let RATELP = 0;
    let ONLPBTC = 0;
    let RATELPBTC = 0;

    let abilp = [{
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
        }, {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }],
        "name": "Approval",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount0",
            "type": "uint256"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount1",
            "type": "uint256"
        }, {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
        }],
        "name": "Burn",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount0",
            "type": "uint256"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount1",
            "type": "uint256"
        }],
        "name": "Mint",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount0In",
            "type": "uint256"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount1In",
            "type": "uint256"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount0Out",
            "type": "uint256"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount1Out",
            "type": "uint256"
        }, {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
        }],
        "name": "Swap",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "internalType": "uint112",
            "name": "reserve0",
            "type": "uint112"
        }, {
            "indexed": false,
            "internalType": "uint112",
            "name": "reserve1",
            "type": "uint112"
        }],
        "name": "Sync",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
        }, {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }],
        "name": "Transfer",
        "type": "event"
    }, {
        "constant": true,
        "inputs": [],
        "name": "DOMAIN_SEPARATOR",
        "outputs": [{
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "MINIMUM_LIQUIDITY",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "PERMIT_TYPEHASH",
        "outputs": [{
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "allowance",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
            "internalType": "address",
            "name": "spender",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }],
        "name": "approve",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "balanceOf",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
            "internalType": "address",
            "name": "to",
            "type": "address"
        }],
        "name": "burn",
        "outputs": [{
            "internalType": "uint256",
            "name": "amount0",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amount1",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [{
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "factory",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "getReserves",
        "outputs": [{
            "internalType": "uint112",
            "name": "_reserve0",
            "type": "uint112"
        }, {
            "internalType": "uint112",
            "name": "_reserve1",
            "type": "uint112"
        }, {
            "internalType": "uint32",
            "name": "_blockTimestampLast",
            "type": "uint32"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
            "internalType": "address",
            "name": "_token0",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "_token1",
            "type": "address"
        }],
        "name": "initialize",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "kLast",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
            "internalType": "address",
            "name": "to",
            "type": "address"
        }],
        "name": "mint",
        "outputs": [{
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "name": "nonces",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
            "internalType": "address",
            "name": "owner",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "spender",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }, {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
        }, {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
        }, {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
        }],
        "name": "permit",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "price0CumulativeLast",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "price1CumulativeLast",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
            "internalType": "address",
            "name": "to",
            "type": "address"
        }],
        "name": "skim",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
            "internalType": "uint256",
            "name": "amount0Out",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "amount1Out",
            "type": "uint256"
        }, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
        }],
        "name": "swap",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [],
        "name": "sync",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "token0",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "token1",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }],
        "name": "transfer",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "constant": false,
        "inputs": [{
            "internalType": "address",
            "name": "from",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }],
        "name": "transferFrom",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }];
    var abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "address", "name": "_user", "type": "address" }], "name": "balanceLP", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "clearBNB", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token_staking", "type": "address" }, { "internalType": "uint256", "name": "_divider", "type": "uint256" }], "name": "createFarm", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "address", "name": "_upline", "type": "address" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "address", "name": "_user", "type": "address" }], "name": "pendingReward", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "poolInfo", "outputs": [{ "internalType": "address", "name": "tokenStaking", "type": "address" }, { "internalType": "uint256", "name": "accPerShare", "type": "uint256" }, { "internalType": "uint256", "name": "totalLP", "type": "uint256" }, { "internalType": "uint256", "name": "rewardPerBlock", "type": "uint256" }, { "internalType": "uint256", "name": "lastRewardBlock", "type": "uint256" }, { "internalType": "uint256", "name": "lock_deposit_block", "type": "uint256" }, { "internalType": "uint256", "name": "divider", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "address", "name": "_user", "type": "address" }], "name": "timelock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "updatePool", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_divider", "type": "uint256" }], "name": "updatedivider", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }], "name": "userInfo", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "rewardDebt", "type": "uint256" }, { "internalType": "uint256", "name": "release_block", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
    let ABIERC20 = [{
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
        }, {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }],
        "name": "Approval",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
        }, {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }],
        "name": "OwnershipTransferred",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
        }, {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }],
        "name": "Transfer",
        "type": "event"
    }, {
        "inputs": [],
        "name": "MaxTaxPerM",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "taxFee",
            "type": "uint256"
        }],
        "name": "SetTaxPerM",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "TaxPerM",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "owner",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "spender",
            "type": "address"
        }],
        "name": "allowance",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "spender",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }],
        "name": "approve",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "account",
            "type": "address"
        }],
        "name": "balanceOf",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "token",
            "type": "address"
        }],
        "name": "clear",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "clearBNB",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "decimals",
        "outputs": [{
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "spender",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "subtractedValue",
            "type": "uint256"
        }],
        "name": "decreaseAllowance",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "devAddress",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "spender",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "addedValue",
            "type": "uint256"
        }],
        "name": "increaseAllowance",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "name",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "addr",
            "type": "address"
        }],
        "name": "setDevAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "symbol",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "recipient",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }],
        "name": "transfer",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "sender",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }],
        "name": "transferFrom",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "stateMutability": "payable",
        "type": "receive"
    }];


    async function getratebnb() {
        // const web3 = new Web3(ethereum);

        let aaa = "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16";
        var contract = new web3.eth.Contract(abilp, aaa);
        try {
            await contract.methods.getReserves().call().then(function(resp) {

                //console.log(resp);


                RATEBNB = ((resp[1] / (10 ** 18)) / (resp[0] / (10 ** 18))) * 1;
                //console.log(RATEBNB, "RATE BNB");

            });
        } catch (error) {
            //console.log(error)
        }


    }

    setInterval(getratebnb, 10000);

    async function getrateNBG() {
        // const web3 = new Web3(ethereum);

        let cbnbusdt = LP;
        var contract = new web3.eth.Contract(abilp, cbnbusdt);
        try {
            await contract.methods.getReserves().call().then(function(resp) {

                RATENBG = ((resp[0] / (10 ** 18)) / (resp[1])) * 1;
                RATENBG *= RATEBNB;
                DATA.rate["nnn"] = RATENBG.toFixed(15) * 1;
                DATA.rate["bnb"] = RATEBNB;

                //console.log(RATEBNB, "RATE NBG");

            });
        } catch (error) {
            //console.log(error)
        }

        //console.log(RATENBG);
    }

    setInterval(getrateNBG, 10000);

    async function gettotallp() {
        // const web3 = new Web3(ethereum);

        let cbnbusdt = LP;
        var contract = new web3.eth.Contract(ABIERC20, cbnbusdt);
        try {
            await contract.methods.totalSupply().call().then(function(resp) {

                SUPPLYLP = resp;

            });
        } catch (error) {
            //console.log(error)
        }

        //console.log(SUPPLYLP);
    }

    setInterval(gettotallp, 10000);

    // async function gettotallpb() {
    //     // const web3 = new Web3(ethereum);

    //     let cbnbusdt = BTCLP;
    //     var contract = new web3.eth.Contract(ABIERC20, cbnbusdt);
    //     try {
    //         await contract.methods.totalSupply().call().then(function(resp) {

    //             SUPPLYLPBTC = resp;

    //         });
    //     } catch (error) {
    //         //console.log(error)
    //     }

    //     //console.log(SUPPLYLP);
    // }

    // setInterval(gettotallpb, 10000);


    async function onlp() {
        // const web3 = new Web3(ethereum);


        var contract = new web3.eth.Contract(ABIERC20, NBG);
        try {
            await contract.methods.balanceOf(LP).call().then(function(resp) {

                ONLP = resp;
                RATELP = ONLP / SUPPLYLP * RATENBG;
                //console.log(RATELP, "RATE RATELP");
                DATA.rate["lp"] = RATELP;

            });
        } catch (error) {
            //console.log(error)
        }

        //console.log(RATELP);
    }

    setInterval(onlp, 10000);


    // async function onlpbtc() {
    //     // const web3 = new Web3(ethereum);


    //     var contract = new web3.eth.Contract(ABIERC20, NBG);
    //     try {
    //         await contract.methods.balanceOf(BTCLP).call().then(function(resp) {

    //             ONLPBTC = resp;
    //             RATELPBTC = ONLPBTC / SUPPLYLPBTC * RATENBG;
    //             //console.log(RATELP, "RATE RATELP");
    //             DATA.rate["lpbtc"] = RATELPBTC;

    //         });
    //     } catch (error) {
    //         //console.log(error)
    //     }

    //     //console.log(RATELP);
    // }

    // setInterval(onlpbtc, 10000);


    async function onlp2() {
        // const web3 = new Web3(ethereum);

        let cbnbusdt = LP;
        var contract = new web3.eth.Contract(ABIERC20, NBG);
        try {
            await contract.methods.balanceOf(CONTRACT).call().then(function(resp) {


                DATA["reward"] = resp * 1;

            });
        } catch (error) {
            //console.log(error)
        }

        //console.log(RATELP);
    }

    setInterval(onlp2, 10000);

    getrateNBG();
    getratebnb();









    async function f1(pid) {

        // const web3 = new Web3(ethereum);



        var contract = new web3.eth.Contract(abi, CONTRACT);


        try {


            await contract.methods.poolInfo(pid).call().then(function(resp) {

                delete resp[0];
                delete resp[1];
                delete resp[2];
                delete resp[3];
                delete resp[4];
                delete resp[5];
                delete resp[6];
                delete resp[7];

                DATA.pool[pid] = resp;

                if (pid == 5) {
                    let r1h = (resp.rewardPerBlock * 20 * 60 * RATENBG * 24 * 360) / (10 ** 18);
                    let tlp = (resp.totalLP * RATELPBTC * 2) / (10 ** 18);
                    DATA.pool[pid].apr = (r1h / (tlp * 0.01));
                } else {
                    let r1h = (resp.rewardPerBlock * 20 * 60 * RATENBG * 24 * 360) / (10 ** 18);
                    let tlp = (resp.totalLP * RATELP * 2) / (10 ** 18);
                    DATA.pool[pid].apr = (r1h / (tlp * 0.01));
                }




            });
        } catch (error) {
            //console.log(error);
        }
    }







    f1(0);


    setInterval(function() {
        f1(0);

        console.log(DATA);
    }, 10000);



    const axios = require('axios');

    function suply() {
        let url = "https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=0xC866987195f2EEA49A170e328ac26E7B5565352f&apikey=YourApiKeyToken";


        axios.get(url)
            .then(response => {
                DATA.supply = response.data.result * 1;

            })
            .catch(error => {
                console.log(error);
            });
    }

    setInterval(suply, 30000);
    suply();

    module.exports = DATA;