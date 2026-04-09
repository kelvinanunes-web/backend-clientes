export function createClienteDTO(data) {
  /*
  Trata-se de uma função e não uma Classe 
  Tem como parâmetro a body da requisição
  */

  const { nome, email, idade } = data;

  // Validação de entrada / formato
  if (typeof nome !== "string" || nome.trim() === "") {
    throw new Error("Campo 'nome' é obrigatório.");
  }

  if (typeof email !== "string" || !email.includes("@")) {
    throw new Error("Campo 'email' inválido.");
  }

  if (typeof idade !== "number" || Number.isNaN(idade)) {
    throw new Error("Campo 'idade' deve ser numérico.");
  }

  return {
    nome: nome.trim(),
    email: email.trim().toLowerCase(),
    idade
  };
}
