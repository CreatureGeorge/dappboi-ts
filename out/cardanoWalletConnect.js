"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function enableWallet(walletName) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!window.cardano || !window.cardano[walletName]) {
            alert("wallet not found!");
            return;
        }
        const cardano = window.cardano;
        let wallet = yield cardano[walletName].enable();
        document.getElementById("walletBalance").innerHTML = yield wallet.getBalance();
        document.getElementById("changeAddress").innerHTML = yield wallet.getChangeAddress();
        if (walletName == 'nami')
            document.getElementById("collateral").innerHTML = yield wallet.experimental.getCollateral();
        else
            document.getElementById("collateral").innerHTML = yield wallet.getCollateral();
        if ((yield wallet.getNetworkId()) == 0)
            document.getElementById("networkID").innerHTML = 'testnet';
        else if ((yield wallet.getNetworkId()) == 1)
            document.getElementById("networkID").innerHTML = 'mainnet';
        else
            document.getElementById("networkID").innerHTML = yield wallet.getNetworkId();
        document.getElementById("rewardAddresses").innerHTML = yield wallet.getRewardAddresses();
        document.getElementById("unusedAddresses").innerHTML = yield wallet.getUnusedAddresses();
        document.getElementById("usedAddresses").innerHTML = yield wallet.getUsedAddresses();
        document.getElementById("utxos").innerHTML = yield wallet.getUtxos();
    });
}
function checkWalletEnable() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!window.cardano) {
            alert("wallet not found!");
        }
    });
}
function simpleTX() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
