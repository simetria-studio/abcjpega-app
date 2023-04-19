const express = require("express");
const router = express.Router();

router.post("http://painel-pega.devsquad.dev.br/api/register/store", (req, res) => {
  const {
    nome,
    data_nascimento,
    rg,
    cpf,
    cnpj,
    cidade_nascimento,
    sexo,
    estado_civil,
    conjuge_nome,
    tipo_pessoa,
    escolaridade,
    profissao,
    telefone,
    celular,
    whatsapp,
    email,
    endereco,
    inscricao_estadual,
    inscricao_municipal,
    credenciado_data_inscricao,
    credenciado_crmv,
    credenciado_crea,
    credenciado_area_atuacao,
    associado_data_inscricao,
    associado_tipo_afixo,
    associado_afixo,
    associado_preposicao,
  } = req.body;

  const newUser = {
    nome,
    data_nascimento,
    rg,
    cpf,
    cnpj,
    cidade_nascimento,
    sexo,
    estado_civil,
    conjuge_nome,
    tipo_pessoa,
    escolaridade,
    profissao,
    telefone,
    celular,
    whatsapp,
    email,
    endereco,
    inscricao_estadual,
    inscricao_municipal,
    credenciado_data_inscricao,
    credenciado_crmv,
    credenciado_crea,
    credenciado_area_atuacao,
    associado_data_inscricao,
    associado_tipo_afixo,
    associado_afixo,
    associado_preposicao,
  };
  res.status(201).json(newUser);
});

module.exports = router;
