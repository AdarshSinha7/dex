import express from "express";

const app = express();
app.use(express.json());
let ETH_BALANCE=200;
let USDC_BALANCE=700000;//imparmanent loss
app.post("/add-liquidity", (req,res)=>{

})
app.post("/buy-asset", (req,res)=>{
    const quantity = req.body.quantity;
    const updatedETHquantity = ETH_BALANCE-quantity;
    const updatedUSDCBalance= ETH_BALANCE*USDC_BALANCE/ updatedETHquantity;
    const paidAmount = updatedUSDCBalance - USDC_BALANCE;

    ETH_BALANCE = updatedETHquantity;
    USDC_BALANCE = updatedUSDCBalance;

    res.json({
        message: `you paid ${paidAmount} USDC for ${quantity} ETH`
    })
})
app.post("/sell-assest", (req,res)=>{
    const quantity = req.body.quantity;
    const updatedETHquantity  = ETH_BALANCE+ quantity;
    const updatedUSDCBalance= ETH_BALANCE*USDC_BALANCE/ updatedETHquantity;
    const gottenUSDC = USDC_BALANCE- updatedUSDCBalance ;

    ETH_BALANCE = updatedETHquantity;
    USDC_BALANCE = updatedUSDCBalance;

    res.json({
        message: `you got ${gottenUSDC} USDC for ${quantity} ETH`
    })

})
app.post("/quote", (req,res)=>{

})


app.listen(3000);