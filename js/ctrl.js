typesTab = {
  non: /[*]+/,
  nom : /^[a-zA-z\s\p{L}]{2,}$/u,
  prenom : /^[a-zA-z\s\p{L}]{2,}$/u
};

nom = /^[a-zA-z\s\p{L}]{2,}$/u;
prenom = /^[a-zA-z\s\p{L}]{2,}$/u;
mail = /^[\w]{2,}@[a-zA-Z0-9-]{2,}.[a-z]{2,}$/;
tel = /^[+]?[0-9]{8,}$/;
photo = /^[\w]{2,}(.jpg|.jpeg|.png|.gif)$/;

$("#ajout_user").submit(function (e) {
  e.preventDefault();
  let erreur = "";
  // if (!nom.test($("#nom").val())) {
  //   erreur += "Le nom n'est pas au format demandé";
  // }

  for (i = 0; i < $(this)[0].length - 2; i++) {
    donnee = $("#" + $(this)[0][i].name).val();
    type = $(this)[0][i].name;

    //donnee = "1564564";
    console.log(donnee);
    console.log(type);
    if(typesTab[type].test(donnee)){
      console.log("OK");
    }
    else{console.log("NOK");}
  }
  // console.log($("#nom").val());
  // console.log(nom.test($("#nom").val()));

  // console.log(erreur);
});




//   let types = [];
//   let donnees = [];
//   let valides = [];
//   for (i = 0; i < $(this)[0].length - 2; i++) {
//     donnee = $("#" + $(this)[0][i].name).val();
//     type = $(this)[0][i].name;

//     console.log(donnee);
//     console.log(type);
//     console.log(nom.test(donnee));
//     console.log("-----------------------------------------");

//     types.push($(this)[0][i].name);
//     donnees.push($("#" + $(this)[0][i].name).val());
//   }

//   console.log(types);
//   console.log(donnes);
//   console.log(valides);

//   return false;
// });
