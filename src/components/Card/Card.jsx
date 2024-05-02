'use client'
import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import Input from "../Input/Input";
import { useCurrencies } from "@/services/CurrenciesContext";

const Card = () => {
    const { currencies, baseCurrency, setBaseCurrency, conversionCurrency, setConversionCurrency, moneyValue, setMoneyValue, conversionValue, swapCurrencies } = useCurrencies();
    const [currenciesArr, setCurrenciesArr] = useState([]);
                
    useEffect(() => {
        setCurrenciesArr(Object.keys(currencies))
    }, []);


    return(
        <article className={styles.card}>
            <div className={styles.formContainer}>
                <Input type="money" label="Amount" value={moneyValue} onChange={setMoneyValue} />
                <Input options={currenciesArr} type="select" label="From" value={baseCurrency} onChange={setBaseCurrency} />
                <button onClick={swapCurrencies}>cambiar</button>
                <Input options={currenciesArr} type="select" label="To" value={conversionCurrency} onChange={setConversionCurrency} />
            </div>
            <div className={styles.conversionText}>
                {`${moneyValue} ${currencies[baseCurrency].name} = ${conversionValue} ${currencies[conversionCurrency].name}`}
            </div>
        </article>
    )
}

export default Card;