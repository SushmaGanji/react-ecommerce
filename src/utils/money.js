import React from 'react'

const money = (amountcents) => {
   
    return `$${(amountcents/100).toFixed(2)}`
}



export default money
