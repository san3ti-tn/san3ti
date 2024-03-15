const { Professions } = require("../model");
module.exports = {
  getAllProfession: async (req, res) => {
    try {
      const professions = await Professions.findAll();
      res.status(200).json(professions);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  getOne: async (req, res) => {
    try {
        const {id} = req.params
        const x = await Professions.findOne({ where: { id: id } })
        res.status(200).json(x)
    }catch(error){
        console.log(error)
        res.status(500).send(error)
    }
},
  createProfession: async (req, res) => {
    try {
      const { name, category, imageUrl, profession, userId } = req.body;

      const result = await Professions.create({
        name: name,
        category: category,
        imageUrl: imageUrl,
        profession: profession,
        userId: userId,
      });
      res.status(201).json(result);
    } catch (err) {
      res.status(404).json(err);
    }
  },
  updateProfession: async (req, res) => {
    try {
      const { name, category, imageUrl, profession, userId } = req.body;
      const { id } = req.params;
      const result = await Professions.update(
        {
          name: name,
          category: category,
          imageUrl: imageUrl,
          profession: profession,
        },
        {
          where: {
            userId: userId,
            id: id,
          },
        }
      );
      console.log(result);
      res.status(200).json({result: result[0], message: "updated !"})
    } catch (err) {
      console.log(err);
      res.status(404).json(err);
    }
  },
  deleteProfession: async (req, res) => {
    try {
      const { id } = req.params;
      const deleteProfession = await Professions.destroy({ where: { id: id } });
      res.status(200).json(deleteProfession);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
