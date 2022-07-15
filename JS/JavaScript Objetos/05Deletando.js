const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

   console.log(objPersonagem) //antes de deletar

   delete objPersonagem.aliado

    console.log(objPersonagem.aliado)  //depois de deletar

