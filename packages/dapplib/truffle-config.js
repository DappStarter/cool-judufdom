require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow food point rate stereo smart hunt hat army ghost'; 
let testAccounts = [
"0x466337e117f8f1c0f6acb950df0e6359c6bdbdd4e9e0f24a18300d6b19aa7b78",
"0xf3c79d924ecdad68ebb10ccf9ce75145bd0f8991df3eb30766c7347c042a0116",
"0xf147bdd84d63ec89d34250a9ac0d02da72b6502411a7b670e8d92810a571fe4a",
"0x23d6068e338313478cc4238b1234d8f3ccbf0fca425c9b38eb1b235a6e36089b",
"0xe46e056725f445a2f134279f96a82aa29ee3e883e193672e94155e4cfce14f1a",
"0xd119055640677c3c3591656b7a881635b2321b5288afb6509b0e18407b1c13b6",
"0x248d24d790e2ebcd678e53f38f4bb0fb9cb89f37f535fef200bb11c9356554b9",
"0x1241e0c83b17c97c7b4de010290e257dea2c4a3395b83d26ddabcfd3f8b46eac",
"0xc6909b0d1d0c0fb8b8d1eb2377bfb3ced7b866c4848c06325d7125613a957673",
"0xa216b705d235218fb2e71d6fd332c16879de18574ce342c7334658928d0d90bc"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
