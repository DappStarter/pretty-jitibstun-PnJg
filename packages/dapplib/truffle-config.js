require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name release place minor give option bubble table'; 
let testAccounts = [
"0x939fb9f8543bb65e980bc4d9835fc4f7332f0308aaf135cdbca92fc3dd86111f",
"0x556a15073a5a4093238f9779bf5e89317d00c2954a1f67c95be8e44ee8f4f8ce",
"0x3c09f5bde70ddb27af55dd3b01b9689bf69ac4fdf0efa3750152e95a66c46ffe",
"0xfa21436b3c1b6364a8fe030d99019616fe0623f40b79df86b17911363d75948c",
"0xc1e501b19344313c7a977b3bfc12e943296d36fbe3199236304c5450ec49072a",
"0x1c1abf1df59da9d7e4a2ccb7a345cf79a9335106a9205ec0447dac56a74bd4f7",
"0xeba78ff627341d5fb23274a72f783d178da57c0b304c2e1c25412771dcac50c0",
"0x177c034d8098c11c8f716202d4ca91e2ff1a60567e072c91f3d3dc146a4204c8",
"0x07bdf37b5609092eb6efa01cf05df8494f6e43993a9e7f1c01fc0132ab9c15de",
"0x717b94b7ad68eb05d1a39ef84e3ef517afc4a48582c9289e422c48bb55d7c025"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

