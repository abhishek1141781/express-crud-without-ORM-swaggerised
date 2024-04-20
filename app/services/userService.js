// userService.js
const UserModel = require('../models/userModel');

class UserService {
    static async getAllUsers() {
        return await UserModel.getAllUsers();
    }

    static async getUserById(id) {
        return await UserModel.getUserById(id);
    }

    static async createUser(name, email) {
        return await UserModel.createUser(name, email);
    }

    static async updateUser(id, name, email) {
        return await UserModel.updateUser(id, name, email);
    }

    static async deleteUser(id) {
        return await UserModel.deleteUser(id);
    }
}

module.exports = UserService;
