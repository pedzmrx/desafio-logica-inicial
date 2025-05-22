const heroi = "O Herói Pedrao"
const XP = 12000

if (XP < 1000) {
  console.log(heroi + " está no nível Ferro")
} else if(XP >= 1001 && XP < 2000) {
    console.log(heroi + " está no nível Bronze");
} else if (XP >= 2001 && XP < 5000)
    console.log(heroi + " está no nível Prata");
    else if (XP >= 5001 && XP < 7000)
        console.log(heroi + " está no nível Ouro");
    else if (XP >= 7001 && XP < 8000)
        console.log(heroi + " está no nível Platina");
    else if (XP >= 8001 && XP < 9000)
        console.log(heroi + " está no nível Ascedente");
    else if (XP >= 9001 && XP < 10000)
        console.log(heroi + " está no nível Imortal");
    else if (XP >= 10001)
        console.log(heroi + " está no nível Radiante");

    //&& Simbolo AND = juntamente á .. 
    // garante que só entra no tal nível entre 1000 e 2000.
    