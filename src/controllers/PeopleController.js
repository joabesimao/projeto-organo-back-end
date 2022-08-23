const database = require("../models");

class PeopleController {
  static async getAll(req, res) {
    try {
      const allPeople = await database.Pessoas.findAll();
      return res.status(200).json(allPeople);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async getOne(req, res) {
    const { id } = req.params;
    try {
      const people = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(people);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async addNew(req, res) {
    const newPeople = req.body;
    try {
      const add = await database.Pessoas.create(newPeople);
      return res.status(200).json(add);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async update(req, res) {
    const newInfo = req.body;
    const { id } = req.params;
    try {
      await database.Pessoas.update(newInfo, { where: { id: Number(id) } });
      const people = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(people);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async delete(req, res) {
    const { id } = req.params;

    try {
      await database.Pessoas.destroy({ where: { id: Number(id) } });
      return res.send({ message: `o id ${id} foi deletado!` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PeopleController;
