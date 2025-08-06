function appResultado() {
    const tensao = document.getElementById("tensao");
    const tensaoV = tensao.value;

    const potencia = document.getElementById("potencia");
    const potenciaV = potencia.value;

    const distancia = document.getElementById("distancia");
    const distanciaV = distancia.value;

    const queda = document.getElementById("queda")
    const quedaV = queda.value;

    const quedatensao = tensaoV*(quedaV/100);

    const condutor = document.querySelectorAll('input[name="tipoM"]');
    let valorM = null;

    const hiden1 = document.querySelector('h1');
    const hiden2 = document.querySelector('h3');

    hiden1.classList.add("hiden");
    hiden2.classList.add("hiden");

    const tituloResultado = document.getElementById("tituloResultado");
    const textoResultado = document.getElementById("textoResultado")
    

    condutor.forEach((radio) => {
    if (radio.checked) {
      valorM = radio.value;
    }
  });

  const circuito = document.querySelectorAll('input[name="tipoC"]');
    let valorC = null;

    circuito.forEach((radio) => {
    if (radio.checked) {
      valorC = radio.value;
    }
  });

  if (valorC == 1) {
    let corrente  = potenciaV/tensaoV
    let secao = (2*distanciaV*corrente)/(valorM*quedatensao)
    tituloResultado.innerHTML = "Aqui estão os resultados do seu cálculo de queda de tensão:"
    textoResultado.innerHTML = "Queda de tensão estimada: "+ quedatensao.toFixed(2) + "V </br> Corrente elétrica: "+ corrente.toFixed(2) +"A </br> Bitola mínima recomendada: ≅"+secao.toFixed(1)+"mm² </br></br> Esses valores são baseados nos dados fornecidos e seguem o limite de queda de tensão permitido." ;
  } else if (valorC == 2) {
    let corrente = potenciaV/(Math.sqrt(3)*tensaoV)
    let secao = (Math.sqrt(3)*distanciaV*corrente)/(valorM*quedatensao)
    tituloResultado.innerHTML = "Aqui estão os resultados do seu cálculo de queda de tensão:"
    tituloResultado.innerHTML = "Aqui estão os resultados do seu cálculo de queda de tensão:"
    textoResultado.innerHTML = "Queda de tensão estimada: "+ quedatensao + "V </br> Corrente elétrica: "+ corrente.toFixed(2) +"A </br> Bitola mínima recomendada: ≅"+secao.toFixed(1)+"mm² </br></br> Esses valores são baseados nos dados fornecidos e seguem o limite de queda de tensão permitido." ;
  } else {
    alert("Por Favor Informar Todas as Informaçoes Nescessarias")
  }
  
  

  
  
}