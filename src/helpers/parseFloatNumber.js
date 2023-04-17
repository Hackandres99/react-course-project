const parseFloatNumber = (value, decimals) => {
    const result = parseFloat(value).toFixed(decimals)
    return result === 'NaN' ? '-' : result
}

export default parseFloatNumber