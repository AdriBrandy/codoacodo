/* Se utiliza la API de cotización del bitcoin para simular un cotizador en moneda ficticia de Hrary Potter */

function traer() {
    fetch ('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then (res => res.json()
        ) 
    .then (data=> {
       usd = parseInt(data.bpi.USD.rate)*7.35
       pound = parseInt(data.bpi.GBP.rate)*4.93
       euro = parseInt(data.bpi.EUR.rate)*5.9
    document.getElementById("cotizacion").innerHTML=(`USD: ${usd}` +"<br>" + `Euro: ${euro}` +"<br>" + `Libras Esterlinas: ${pound}`)
    }
    )
}