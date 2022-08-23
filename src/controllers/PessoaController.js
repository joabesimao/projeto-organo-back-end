const database = require("../models");

class PessoasController {
  static async getAll(req, res) {
    try {
      const todasAsPessoas = await database.Pessoas.findAll();
      return res.status(200).json(todasAsPessoas);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }
  static async getOne(req, res) {
    const { id } = req.params.id;
    try {
    } catch (erro) {}
  }
  static async addNew(req, res) {
    const novoRegisto = req.body;
    try {
      const adiciona = await database.Pessoas.create(novoRegisto);
      return res.status(200).json(adiciona);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async update(req, res) {
    const novasInfo = req.body;
    const { id } = req.params;
    try {
      await database.Pessoas.update(novasInfo, { where: { id: Number(id) } });
      const umaPessoa = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(umaPessoa);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async delete(req, res) {
    const { id } = req.params;

    try {
      await database.Pessoas.destroy({ where: { id: Number(id) } });
      return res.send({ mensagem: `o id ${id} foi deletado!` });
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }
}

module.exports = PessoasController;
