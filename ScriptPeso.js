function CalcularImc() {
  let peso = parseFloat(document.getElementById("Peso").value) || 0;
  let altura = parseFloat(document.getElementById("Altura").value) || 0;

  if (peso <= 0 || altura <= 0) {
    document.getElementById("resultado").innerHTML =
      "Escribe tu peso y tu altura";
    document.getElementById("rango").innerHTML = "";
    document.getElementById("consejo").innerHTML = "";
    document.getElementById("barra").style.display = "none";
    return;
  }

  let IMC = peso / altura ** 2;

  document.getElementById("resultado").innerHTML =
    "Tu IMC es: " + IMC.toFixed(2);

  CalcularRango(IMC);
  MoverMarcador(IMC);
}

function CalcularRango(IMC) {
  let rango = "";
  let consejo = "";

  if (IMC < 18.5) {
    rango = "Bajo Peso";
    consejo = "Hasta el viento te puede llevar. Come algo, que una empanada no le hace daño a nadie 🥟";
  } else if (IMC < 25) {
    rango = "Normal";
    consejo = "¡Zona verde! Sigue así, pero ojo: un buñuelo de vez en cuando es legal 😎";
  } else if (IMC < 30) {
    rango = "Sobrepeso";
    consejo = "Semáforo en amarillo 🚦 Cambia el ascensor por las escaleras, o al menos míralas con respeto.";
  } else if (IMC < 35) {
    rango = "Obesidad I";
    consejo = "Tu sofá ya te considera de la familia 🛋️ Una caminata de 20 minutos no te haria daño :).";
  } else if (IMC < 40) {
    rango = "Obesidad II";
    consejo = "Tu nevera y tú tienen una relación seria 🧊 Cambia la gaseosa por agua y dale un respiro.";
  } else if (IMC < 50) {
    rango = "Obesidad III";
    consejo = "Tu báscula pidió vacaciones 🩺 Agenda una cita con el médico: es el mejor plan de entrenamiento.";
  } else {
    rango = "Obesidad IV";
    consejo = "Rompiste la escala del programador 💪 Habla con un médico pronto, ¡tú puedes!";
  }

  document.getElementById("rango").innerHTML = "Rango: " + rango;
  document.getElementById("consejo").innerHTML = consejo;
}

function MoverMarcador(IMC) {
  // La barra va de IMC 15 (izquierda) a IMC 45 (derecha)
  let porcentaje = ((IMC - 15) / 30) * 100;
  porcentaje = Math.min(Math.max(porcentaje, 0), 100);

  document.getElementById("barra").style.display = "block";
  document.getElementById("marcador").style.left = porcentaje + "%";
}
