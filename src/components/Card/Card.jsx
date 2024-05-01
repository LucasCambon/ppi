'use client'
import React, { useState } from "react";
import styles from "./Card.module.css";
import Input from "../Input/Input";

const Card = () => {
    const [moneyValue, setMoneyValue] = useState("100");

    const [euroValue, setEuroValue] = useState(1.00);
    const [usdValue, setUSDValue] = useState(1.0627478);

    return(
        <article className={styles.card}>
            <div className={styles.formContainer}>
                <Input type="text" label="Input 1" value={moneyValue} onChange={setMoneyValue} />
                <Input type="text" label="Input 2" value={moneyValue} onChange={setMoneyValue} />
                <button onClick={() => console.log("Hola")}>cambiar</button>
                <Input type="text" label="Input 3" value={moneyValue} onChange={setMoneyValue} />
            </div>
            <div className={styles.conversionText}>
                {`${euroValue.toFixed(2)} Euro = ${usdValue.toFixed(7)} US Dollars`}
            </div>
        </article>
    )
}

export default Card;