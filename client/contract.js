export const address = "0xC1c4F453CAc08A1D7c4C60fd0d7Ee5c687A3179b";
export const abi = [
    {
        stateMutability: "payable",
        type: "fallback",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_cid",
                type: "string",
            },
            {
                internalType: "string",
                name: "_folder",
                type: "string",
            },
        ],
        name: "addFile",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_cid",
                type: "string",
            },
            {
                internalType: "string",
                name: "_folder",
                type: "string",
            },
        ],
        name: "addFolder",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_cid",
                type: "string",
            },
            {
                internalType: "string",
                name: "_folder",
                type: "string",
            },
        ],
        name: "deleteFile",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_cid",
                type: "string",
            },
            {
                internalType: "string",
                name: "_folder",
                type: "string",
            },
        ],
        name: "deleteFolder",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_user",
                type: "address",
            },
            {
                internalType: "string",
                name: "_folder",
                type: "string",
            },
        ],
        name: "getFiles",
        outputs: [
            {
                internalType: "string[]",
                name: "",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_user",
                type: "address",
            },
            {
                internalType: "string",
                name: "_folder",
                type: "string",
            },
        ],
        name: "getFolders",
        outputs: [
            {
                internalType: "string[]",
                name: "",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_user",
                type: "address",
            },
        ],
        name: "getOwnedFiles",
        outputs: [
            {
                internalType: "string[]",
                name: "",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_user",
                type: "address",
            },
        ],
        name: "getOwnedFolders",
        outputs: [
            {
                internalType: "string[]",
                name: "",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_user",
                type: "address",
            },
            {
                internalType: "string",
                name: "_cid",
                type: "string",
            },
        ],
        name: "getSharedFiles",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "user",
                        type: "address",
                    },
                    {
                        internalType: "bool",
                        name: "access",
                        type: "bool",
                    },
                ],
                internalType: "struct Storage.Permission[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_user",
                type: "address",
            },
            {
                internalType: "string",
                name: "_cid",
                type: "string",
            },
        ],
        name: "getSharedFolders",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "user",
                        type: "address",
                    },
                    {
                        internalType: "bool",
                        name: "access",
                        type: "bool",
                    },
                ],
                internalType: "struct Storage.Permission[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_user",
                type: "address",
            },
            {
                internalType: "string",
                name: "_file",
                type: "string",
            },
        ],
        name: "giveAccessFile",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_user",
                type: "address",
            },
            {
                internalType: "string",
                name: "_file",
                type: "string",
            },
        ],
        name: "giveAccessFolder",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_user",
                type: "address",
            },
            {
                internalType: "string",
                name: "_file",
                type: "string",
            },
        ],
        name: "revokeAccessFile",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_user",
                type: "address",
            },
            {
                internalType: "string",
                name: "_file",
                type: "string",
            },
        ],
        name: "revokeAccessFolder",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
