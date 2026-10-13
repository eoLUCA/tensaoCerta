function appResultado() {
    const tensao = document.getElementById("tensao");
    const tensaoV = Number(tensao.value);

    const potencia = document.getElementById("potencia");
    const potenciaV = Number(potencia.value);

    const distancia = document.getElementById("distancia");
    const distanciaV = Number(distancia.value);

    const queda = document.getElementById("queda")
    const quedaV = Number(queda.value);

    const quedatensao = tensaoV*(quedaV/100);

    const condutor = document.querySelectorAll('input[name="tipoM"]');
    let valorM = null;

    const hiden1 = document.querySelector('h1');
    const hiden2 = document.querySelector('h3');
    

    const tituloResultado = document.getElementById("tituloResultado");
    const textoResultado = document.getElementById("textoResultado")

    const secoesComerciais = [
        1.5 , 2.5 , 4 , 6 , 10 , 16 ,
        25 , 35 , 50 , 70 , 95 , 120
    ];
    

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

  if (!Number.isFinite(tensaoV) || tensaoV <=0){
      alert("Informe uma tensão válida");
      return;
  }

  if (!Number.isFinite(potenciaV) || potenciaV <=0){
      alert("Informe uma potência válida");
      return;
  }

  if (!Number.isFinite(distanciaV) || distanciaV <=0){
      alert("Informe uma distancia válida");
      return;
  }

  if (!Number.isFinite(quedaV) || quedaV >=100 || quedaV <=100){
      alert("Informe uma queda de tensão válida");
      return;
  }

  if (valorM === null || valorC === null) {
      alert("Selecione o material ou o tipo de circuito");
      return;
  }

  if (valorC == 1) {
    let corrente  = potenciaV/tensaoV
    let secao = (2*distanciaV*corrente)/(valorM*quedatensao)
    let secaoComercial = secoesComerciais.find(numero => numero >= secao)
    tituloResultado.innerHTML = "Aqui estão os resultados do seu cálculo de queda de tensão:"
    textoResultado.innerHTML = "Queda de tensão máxima permitida: "+ quedatensao.toFixed(2) + "V </br> Corrente elétrica: "+ corrente.toFixed(2) +"A </br> Bitola mínima recomendada: "+secaoComercial.toFixed(1)+"mm² </br></br> Esses valores são baseados nos dados fornecidos e seguem o limite de queda de tensão permitido." ;
  } else if (valorC == 2) {
    let corrente = potenciaV/(Math.sqrt(3)*tensaoV)
    let secao = (Math.sqrt(3)*distanciaV*corrente)/(valorM*quedatensao)
    let secaoComercial = secoesComerciais.find(numero => numero >= secao)
    tituloResultado.innerHTML = "Aqui estão os resultados do seu cálculo de queda de tensão:"
    tituloResultado.innerHTML = "Aqui estão os resultados do seu cálculo de queda de tensão:"
    textoResultado.innerHTML = "Queda de tensão máxima permitida: "+ quedatensao + "V </br> Corrente elétrica: "+ corrente.toFixed(2) +"A </br> Bitola mínima recomendada: "+secaoComercial.toFixed(1)+"mm² </br></br> Esses valores são baseados nos dados fornecidos e seguem o limite de queda de tensão permitido." ;
  } else {
    alert("Por Favor Informar Todas as Informaçoes Nescessarias")
  }

    hiden1.classList.add("hiden");
    hiden2.classList.add("hiden");
  
  

  
  
}
