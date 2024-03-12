const { Profession }= require('../model')



module.exports={
    getAllProfession: async (req, res) =>{
        try{
            const professions = await Profession.findAll()
            res.status(200).json(professions)
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    },
   
    createProfession: async (req, res) =>  {
        
    },
    updateProfession: async (req, res) => {
        
    },
    deleteProfession: async (req, res) => {
        
    }
};