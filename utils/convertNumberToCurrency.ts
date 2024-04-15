export const convertNumberToCurrency = (value:number)=>{
    const  parser = new Intl.NumberFormat('en-US', {
        currency: 'COP',
    });
    const parsed = parser.format(value)
    return parsed
}