"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
let ETH_BALANCE = 200;
let USDC_BALANCE = 70000; //imparmanent loss
app.post("/add-liquidity", (req, res) => {
});
app.post("/buy-asset", (req, res) => {
    const quantity = req.body.quantity;
    const updatedETHquantity = ETH_BALANCE - quantity;
    const updatedUSDCBalance = ETH_BALANCE * USDC_BALANCE / updatedETHquantity;
    const paidAmount = updatedUSDCBalance - USDC_BALANCE;
    ETH_BALANCE = updatedETHquantity;
    USDC_BALANCE = updatedUSDCBalance;
    res.json({
        message: `you paid ${paidAmount} USDC for ${quantity} ETH`
    });
});
app.post("/sell-assest", (req, res) => {
    const quantity = req.body.quantity;
    const updatedETHquantity = ETH_BALANCE + quantity;
    const updatedUSDCBalance = ETH_BALANCE * USDC_BALANCE / updatedETHquantity;
    const gottenUSDC = USDC_BALANCE - updatedUSDCBalance;
    ETH_BALANCE = updatedETHquantity;
    USDC_BALANCE = updatedUSDCBalance;
    res.json({
        message: `you got ${gottenUSDC} USDC for ${quantity} ETH`
    });
});
app.post("/quote", (req, res) => {
});
app.listen(3000);
