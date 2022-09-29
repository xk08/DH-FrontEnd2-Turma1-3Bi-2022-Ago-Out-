function retiraEspacosDeUmValorInformado(valorRecebido) {
  return valorRecebido.trim();
}

function converteValorRecebidoParaMinusculo(valorRecebido) {
  return valorRecebido.toLowerCase();
}

function validaEmailRecebido(emailRecebido) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailRecebido)) {
    return true;
  } else {
    return false;
  }
}

function baseUrlApi(){
  return "https://ctd-fe2-todo-v2.herokuapp.com/v1"
}

function elementoSmallErro(elementoRecebido) {
  //elementoRecebido = document.getElementById(`${elementoRecebido}`);
  elementoRecebido.style.color = "#E42323BF";
  elementoRecebido.style.fontSize = "8";
  elementoRecebido.style.fontWeight = "bold";
}

//Função que pega o Cookie do navegador
// https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

