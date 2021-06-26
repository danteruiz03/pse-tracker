import React, { useState, useEffect } from 'react';

const Summary = ({ data }) => {
    const [stockData, setStockData] = useState(null);

    useEffect(() => {
        setStockData(data);
    }, [data])

    return (
        <div className="container-fluid mt-3" >
            {stockData ?
                <div className="title">
                    <h3 className="float-left"> {stockData.company_name} </h3>
                    <div className="float-left"> SYMBOL: {stockData.ticker_symbol}</div>
                    <div class="float-right align-bottom">As of {stockData.price.trading_date}</div>
                </div> : ''}
        </div >
    )

}

export default Summary;