function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function BrunoOtaco() {
  var vazio = document.getElementById("NomeEmail").value;
  

  if (vazio == "") {
    window.alert("Digite seu e-mail por favor!");
  } else {
    window.alert("E-mail cadastrado com sucesso!");
  }
}
function mudarCorDeFundo() {
  var body = document.body;
  var corAtual = body.style.backgroundColor;
  var IcoPri = document.getElementById('icoMo');
  var IcoPri2 = document.getElementById('ImaLogo');

  // Se a cor atual for branca, mude para preto; caso contrário, mude para branca
  body.style.backgroundColor = corAtual === 'black' ? 'white' : 'black';
  indiceAtual = (indiceAtual + 1) % Slide.length;
  indiceAtual2 = (indiceAtual2 + 1) % Slide2.length;
  
        
  // Atualizar o src da imagem
  IcoPri.src = Slide[indiceAtual];
  IcoPri2.src = Slide2[indiceAtual2];
}
