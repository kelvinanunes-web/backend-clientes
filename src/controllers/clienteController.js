import { createClienteDTO } from "../dtos/createClienteDTO.js";

export class ClienteController {
  // Método especial Construtor
  // É executado assim que o objeto é instaciado
  constructor(clienteService) {
    this.clienteService = clienteService;
  }

  // Métodos
  criar = (req, res) => {
    try {
      const dto = createClienteDTO(req.body);

      return res.status(201).json(dto);
    } catch (error) {
      console.log("ERRO AO CRIAR CLIENTE:", error.message);
      return res.status(400).json({ erro: error.message });
    } 
  };
}
