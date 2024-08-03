var first = document.querySelector("#inputs")
var second = document.querySelector("#result")
var secFirst = document.querySelector("#from-currency-option")
var secSecond = document.querySelector("#to-currency-option")
var btn = document.querySelector("#exchange-button")


// APİ URL

var url= "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_55P7Bv7qkA0mdWMFFa687dZa9Z1FOYEbVNXvL2aR&currencies&base_currency="


btn.onclick=function () {
  function run(){
    var securl = url+secFirst.options[
      secFirst.selectedIndex].value;
    
      console.log(securl)
      fetch(securl)
      .then(rslt=>{
        return rslt.json()
      })
     .then(print)
  }

  run()
  function print(e){
    var cins=secSecond.options[secSecond.selectedIndex].value;
    var son=e ["data"] [cins]
    var sonuc= Number(first.value*son);;
    second.value=sonuc
    console.log(sonuc)
  }
}

