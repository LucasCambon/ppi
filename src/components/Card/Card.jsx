'use client'
import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
import Input from "../Input/Input";
import ImageButton from "../ImageButton/ImageButton"
import { useCurrencies } from "@/services/CurrenciesContext";

const Card = () => {
    const { currencies, baseCurrency, setBaseCurrency, conversionCurrency, setConversionCurrency, moneyValue, setMoneyValue, conversionValues, swapCurrencies } = useCurrencies();
    const [currenciesArr, setCurrenciesArr] = useState([]);
                
    useEffect(() => {
        setCurrenciesArr(Object.keys(currencies))
    }, []);


    return(
        <section className={styles.card}>
            <div className={styles.formContainer}>
                <Input type="money" label="Amount" value={moneyValue} onChange={setMoneyValue} />
                <Input options={currenciesArr} type="select" label="From" value={baseCurrency} onChange={setBaseCurrency} />
                <ImageButton onClick={swapCurrencies}/>
                <Input options={currenciesArr} type="select" label="To" value={conversionCurrency} onChange={setConversionCurrency} />
            </div>
            <div className={styles.conversionText}>
                <h2>
                    {`${moneyValue} ${currencies[baseCurrency].name} =`}
                </h2>
                <h2>
                    {`${conversionValues.conversionValue} ${currencies[conversionCurrency].name}`}
                </h2>
            </div>
            <h4 className={styles.conversionSubText}>
                {`${moneyValue} ${conversionCurrency} = ${conversionValues.reverseConversionValue} ${baseCurrency}`}
            </h4>
            <div className={styles.rightContent}>
                <article className={styles.subCard}>
                    <h4>
                        We use the mid-market rate for our Converter. This is for informational purposes only. You won’t receive this rate when sending money.
                    </h4>
                </article>
                <div className={styles.dateText}>
                    <span className={styles.currency}>{`${currencies[baseCurrency].name}`}</span>  
                    <span> to </span>
                    <span className={styles.currency}>{`${currencies[conversionCurrency].name}`}</span>  
                    <span>{` conversion — Last updated ${conversionValues.date}`}</span>  
                </div>
            </div>
        </section>
    )
}

export default Card;