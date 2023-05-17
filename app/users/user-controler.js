const user = require('../../models/users')
const bcrypt = require('../../utils/bcrypt')

const getUser = (req, res) => {
    user.find()
        .then(resoult => res.status(200).send({
            error: false,
            message: 'succes',
            data: resoult
        }))
        .catch(err => res.status(500).send(err))
}

const getUserById = (req, res) => {
    const { id } = req.params
    user.findById(id)
        .then(resoult => res.status(200).send({
            error: false,
            message: 'succes',
            data: resoult
        }))
        .catch(err => res.status(404).send(err))
}

const postUsers = async (req, res) => {
    const { name, email, password } = req.body
    const hashedPassword = await bcrypt.hashPassword(password)
    user.create({
        name,
        email,
        password: hashedPassword
    })
        .then(resoult => res.status(201).send({
            error: false,
            message: 'succes',
            data: resoult
        }))
        .catch(err => res.status(404).send(err))
}

const putUser = async (req, res) => {
    try {
        const { id } = req.params
        const { name, email, password } = req.body
        const dataUser = await user.updateOne({ _id: Object(id) }, {
            $set: {
                name,
                email,
                password
            }
        })
        if (dataUser.modifiedCount === 1) {
            res.status(201).send({
                error: false,
                message: 'updated successfully',
                data: dataUser
            })
        } else {
            res.status(201).send({
                error: false,
                message: 'Data Is Not Added',
                data: dataUser
            })
        }
    } catch (err) {
        res.status(404).send(err)
    }
}

const deleteUser = (req, res) => {
    const { id } = req.params
    user.deleteOne({ _id: Object(id) })
        .then(resoult => res.status(200).send({
            error: false,
            message: 'delete successfully',
            data: resoult
        }))
        .catch(err => res.status(500).send(err))
}

module.exports = {
    getUser,
    getUserById,
    postUsers,
    putUser,
    deleteUser
}