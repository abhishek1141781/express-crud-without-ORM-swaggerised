// userModel.js
const pool = require("../db");

/**
* @swagger
* components:
*   schemas:
*     User:
*       type: object
*       properties:
*         id:
*           type: integer
*         name:
*           type: string
*         email:
*           type: string
*/
class User {

     /**
     * @swagger
     * /users:
     *   get:
     *     summary: Get all users
     *     description: Retrieve a list of all users.
     *     responses:
     *       200:
     *         description: A list of users.
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/User'
     */
    static async getAllUsers() {
        try {
            const allUsers = await pool.query('SELECT * FROM users');
            return allUsers.rows;
        } catch (error) {
            throw error;
        }
    }

    /**
     * @swagger
     * /users/{id}:
     *   get:
     *     summary: Get a user by ID
     *     description: Retrieve a user based on their ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID of the user to retrieve.
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: The user object.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     */
    static async getUserById(id) {
        try {
            const user = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
            return user.rows[0];
        } catch (error) {
            throw error;
        }
    }

    /**
     * @swagger
     * /users:
     *   post:
     *     summary: Create a new user
     *     description: Create a new user with the provided name and email.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/User'
     *     responses:
     *       200:
     *         description: The created user object.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     */
    static async createUser(name, email) {
        try {
            const newUser = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
            return newUser.rows[0];
        } catch (error) {
            throw error;
        }
    }

    /**
     * @swagger
     * /users/{id}:
     *   put:
     *     summary: Update a user
     *     description: Update the name and/or email of a user.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID of the user to update.
     *         schema:
     *           type: integer
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/User'
     *     responses:
     *       200:
     *         description: The updated user object.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     */
    static async updateUser(id, name, email) {
        try {
            const updateUser = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, id]);
            return updateUser.rows[0];
        } catch (error) {
            throw error;
        }
    }

    /**
     * @swagger
     * /users/{id}:
     *   delete:
     *     summary: Delete a user
     *     description: Delete a user based on their ID.
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID of the user to delete.
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: User deleted successfully.
     */
    static async deleteUser(id) {
        try {
            await pool.query('DELETE FROM users WHERE id = $1', [id]);
            return 'User deleted successfully';
        } catch (error) {
            throw error;
        }
    }
}

module.exports = User;
