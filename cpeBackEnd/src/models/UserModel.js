const connection = require("../database/connection");
const { v4 : uuidv4 } = require('uuid');

module.exports = {
    async create(user) {
        const user_id = uuidv4();

        user.user_id = user_id;
        await connection("user").insert(user);
        
        return user_id;
    },

    async getById({user_id}){
        const result = await connection("user")
            .where({user_id})    
            .select("*");
        return result;
    },
    
    async getByFields(fields) {
        const result = await connection("user")
        .where(fields)
        .select("*")
        return result;
    },

    async update(user_id, user){
        const result = await connection("user")
            .where(user_id)
            .update(user);
        return result;
    },

    async delete(user_id){
        const result = await connection("user").where({user_id}).delete();
        return result;
    },
};