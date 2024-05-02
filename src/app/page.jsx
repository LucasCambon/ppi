'use client'
import React from "react";
import Card from "@/components/Card/Card";
import { useCurrencies } from "@/services/CurrenciesContext";


export default function Home() {
  const { currencies } = useCurrencies();
  
  if (currencies) {
    return (
      <React.Fragment>
        <Card />
      </React.Fragment>
    );
  } else {
    return (
      <></>
    )
  }
  
}
