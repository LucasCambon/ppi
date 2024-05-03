'use client'
import React, { createContext, useContext, useState, useEffect} from "react";

const CurrenciesContext = createContext();

export const useCurrencies = () => useContext(CurrenciesContext);


export const CurrenciesProvider = ({children}) => {

    const [currencies, setCurrencies] = useState();
    const [baseCurrency, setBaseCurrency] = useState("EUR");
    const [conversionCurrency, setConversionCurrency] = useState("USD");
    const [rates, setRates] = useState({});
    const [moneyValue, setMoneyValue] = useState("1");
    const [conversionValues, setConversionValues] = useState();

    const getCurrencies = async () => {
        const currenciesRequest = await fetch('https://api.vatcomply.com/currencies');
        const currenciesObj = await currenciesRequest.json();
        setCurrencies(currenciesObj);
    };

    const getCurrencyRate = async () => {
        const rateRequest = await fetch(`https://api.vatcomply.com/rates?base=${baseCurrency}`);
        const rateResults = await rateRequest.json();
        setRates(rateResults.rates);
    };

    const getCurrentDate = () => {
        const now = new Date();
        const options = {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: false,
            timeZoneName: 'short',
            timeZone: 'UTC'
        };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const formattedDateTime = formatter.format(now);
        return formattedDateTime;
    };

    const calculateConversion = () => {
        const formattedValue = parseFloat(moneyValue.replace('$ ', ''))
        const conversionRateValue = (rates[conversionCurrency] * parseFloat(formattedValue)).toFixed(7);
        const reverseConversionRate = (parseFloat(formattedValue) / rates[conversionCurrency]).toFixed(7);
        const currentDate = getCurrentDate();
        setConversionValues({
            date: currentDate,
            conversionValue: conversionRateValue,
            reverseConversionValue: reverseConversionRate
        })
    };

    const swapCurrencies = () => {
        const tempValue = baseCurrency;
        setBaseCurrency(conversionCurrency);
        setConversionCurrency(tempValue);
    };

    useEffect(() => {
        getCurrencies();
    }, []);

    useEffect(() => {
        getCurrencyRate();
    }, [baseCurrency]);

    useEffect(() => {
        calculateConversion()
    }, [conversionCurrency, moneyValue, rates]);

    return (
        <CurrenciesContext.Provider value={{currencies, baseCurrency, setBaseCurrency, conversionCurrency, setConversionCurrency, moneyValue, setMoneyValue, conversionValues, swapCurrencies}}>
            {children}
        </CurrenciesContext.Provider>
    );

};