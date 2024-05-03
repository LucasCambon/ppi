'use client'
import React from "react";
import styles from "./page.module.css";
import Card from "@/components/Card/Card";
import { useCurrencies } from "@/services/CurrenciesContext";


export default function Home() {
  const { currencies, baseCurrency, setBaseCurrency, conversionCurrency, setConversionCurrency, moneyValue, setMoneyValue, conversionValues, swapCurrencies } = useCurrencies();
  
  if (currencies) {
    return (
      <React.Fragment>
        <h2 className={styles.conversionTitle}>{`${moneyValue.replace('$ ', '')} ${baseCurrency} to ${conversionCurrency} - Convert ${currencies[baseCurrency].name} to ${currencies[conversionCurrency].name}`}</h2>
        <Card />
      </React.Fragment>
    );
  } else {
    return (
      <></>
    )
  }
  
}
