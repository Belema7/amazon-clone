import React from 'react'
import numeral from 'numeral'
const CurrecyFormat = ({amount}) => {
    const formattedAmmount = numeral(amount).format("$0,0.00")
  return (
    <div>
      {formattedAmmount}
    </div>
  )
}

export default CurrecyFormat
