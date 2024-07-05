function getRadioValue() {
  //captura o valor sim ou não na nota de terceiros
  const form = document.getElementById("thirdRegistration");
  const selectedRadio = form.querySelector(
    'input[name="nf_terceiros"]:checked'
  );
  if (selectedRadio) {
    const radioValue = selectedRadio.value;
    return radioValue;
  }
}

function avancarFormularios(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  const form = event.target;
  const formId = form.id;

  if (formId === "firstRegistration") {
    const password = form.querySelector('input[type="radio"]').value;
    const confirmPassword = form.querySelector(
      'input[id="confirmPassword"]'
    ).value;

    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return; // Impede a continuação se as senhas não coincidirem
    }
  }

  // Execução do switch para redirecionamento
  switch (formId) {
    case "firstRegistration":
      window.location.href = "telaCadastro2.html";
      break;
    case "secondRegistration":
      window.location.href = "telaCadastro3.html";
      break;
    case "thirdRegistration":
      const nfTerceiros = getRadioValue();
      if (nfTerceiros == "sim") {
        window.location.href = "telaCadastro4.html";
        break;
      }
      window.location.href = "../menu/menuPrincipal.html";
      break;
    case "fourthRegistration":
      window.location.href = "../menu/menuPrincipal.html";
      break;
    default:
      console.error("Formulário desconhecido:", formId);
  }
}

// Adiciona o manipulador de eventos a todos os formulários
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", avancarFormularios);
});
