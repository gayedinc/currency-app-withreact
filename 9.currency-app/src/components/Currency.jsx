import React, { useState } from 'react'
import '../css/currency.css';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";


let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_Cql8dWdz0BlrBZZSnWZbRnGlUkqTgYqPBbQD8nte";


function Currency() {

    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState('');

    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);
    }

    return (
        <div className='currency-div'>

            <div className="header">
                <h3>CURRENCY EXCHANGE RATE APPLICATION</h3>
            </div>

            <div className="content">
                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className='amount' />
                <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY">TRY</option>
                    <option value="JPY">JPY</option>
                    <option value="JPY">JPY</option>
                    <option value="CZK">CZK</option>
                    <option value="DKK">DKK</option>
                    <option value="GBP">GBP</option>
                    <option value="HUF">HUF</option>
                    <option value="PLN">PLN</option>
                    <option value="RON">RON</option>
                    <option value="SEK">SEK</option>
                    <option value="CHF">CHF</option>
                    <option value="ISK">ISK</option>
                    <option value="NOK">NOK</option>
                    <option value="HRK">HRK</option>
                    <option value="RUB">RUB</option>
                    <option value="AUD">AUD</option>
                    <option value="BRL">BRL</option>
                    <option value="CAD">CAD</option>
                    <option value="CNY">CNY</option>
                    <option value="HKD">HKD</option>
                    <option value="IDR">IDR</option>
                    <option value="ILS">ILS</option>
                    <option value="INR">INR</option>
                    <option value="KRW">KRW</option>
                    <option value="MXN">MXN</option>
                    <option value="MYR">MYR</option>
                    <option value="NZD">NZD</option>
                    <option value="PHP">PHP</option>
                    <option value="SGD">SGD</option>
                    <option value="THB">THB</option>
                    <option value="ZAR">ZAR</option>
                </select>

                <FaRegArrowAltCircleRight className='fa-arrow-right' />


                <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="TRY">TRY</option>
                    <option value="JPY">JPY</option>
                    <option value="JPY">JPY</option>
                    <option value="CZK">CZK</option>
                    <option value="DKK">DKK</option>
                    <option value="GBP">GBP</option>
                    <option value="HUF">HUF</option>
                    <option value="PLN">PLN</option>
                    <option value="RON">RON</option>
                    <option value="SEK">SEK</option>
                    <option value="CHF">CHF</option>
                    <option value="ISK">ISK</option>
                    <option value="NOK">NOK</option>
                    <option value="HRK">HRK</option>
                    <option value="RUB">RUB</option>
                    <option value="AUD">AUD</option>
                    <option value="BRL">BRL</option>
                    <option value="CAD">CAD</option>
                    <option value="CNY">CNY</option>
                    <option value="HKD">HKD</option>
                    <option value="IDR">IDR</option>
                    <option value="ILS">ILS</option>
                    <option value="INR">INR</option>
                    <option value="KRW">KRW</option>
                    <option value="MXN">MXN</option>
                    <option value="MYR">MYR</option>
                    <option value="NZD">NZD</option>
                    <option value="PHP">PHP</option>
                    <option value="SGD">SGD</option>
                    <option value="THB">THB</option>
                    <option value="ZAR">ZAR</option>
                </select>

                <input value={result} onChange={(e) => setResult(e.target.value)} type="number" readOnly="text" className='result' />
            </div>

            <div>
                <button onClick={exchange} className='exchange-button'>Çevir</button>
            </div>

        </div>
    )
}

export default Currency