import CardanoWasm from "@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib"
import axios = require("axios");
import cbor = require("cbor");

async function enableWallet(walletName) {
    if (!window.cardano || !window.cardano[walletName]) {
        alert("wallet not found!")
        return
    }
    const cardano = window.cardano

    let wallet = await cardano[walletName].enable()

    document.getElementById("walletBalance").innerHTML = await wallet.getBalance()
    document.getElementById("changeAddress").innerHTML = await wallet.getChangeAddress()

    if (walletName == 'nami')
        document.getElementById("collateral").innerHTML = await wallet.experimental.getCollateral()
    else
        document.getElementById("collateral").innerHTML = await wallet.getCollateral()

    if (await wallet.getNetworkId() == 0)
        document.getElementById("networkID").innerHTML = 'testnet'
    else if (await wallet.getNetworkId() == 1)
        document.getElementById("networkID").innerHTML = 'mainnet'
    else
        document.getElementById("networkID").innerHTML = await wallet.getNetworkId()

    document.getElementById("rewardAddresses").innerHTML = await wallet.getRewardAddresses()
    document.getElementById("unusedAddresses").innerHTML = await wallet.getUnusedAddresses()
    document.getElementById("usedAddresses").innerHTML = await wallet.getUsedAddresses()
    document.getElementById("utxos").innerHTML = await wallet.getUtxos()
}
async function checkWalletEnable() {
    if (!window.cardano) {
        alert("wallet not found!")
    }
}
async function simpleTX() {

}