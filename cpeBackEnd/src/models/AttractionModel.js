const {v4 : uuidv4} = require ('uuid');
const connection = require("../database/connection");

module.exports = {
    async create(attraction) {
        const attraction_id = uuidv4();

        attraction.attraction_id = attraction_id;
        await connection("attraction").insert(attraction);
        return attraction_id;
    },

    async getById({attraction_id}){
        const result = await connection("attraction")
            .where({attraction_id})
            .select("*");
        return result;
    },

    async getAll(){
        const result = await connection("attraction")
            .select("*");
        return result;
    },

    async update(attraction_id, attraction){
        const result = await connection("attraction")
            .where(attraction_id)
            .update(attraction);
        return result;
    },

   async delete(attraction_id){
        const result = await connection("attraction").where({attraction_id}).delete();
        return result;
    },
};
