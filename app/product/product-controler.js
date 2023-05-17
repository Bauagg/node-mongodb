const { ObjectId } = require('mongodb');
const db = require('../../config/mongodb')


const getProduct = (req, res) => {
    db.collection('product').find().toArray()
        .then(resoult => res.status(200).send({
            error: false,
            message: 'succes',
            data: resoult
        }))
        .catch(err => next(err))
}

// error = getProductById
const getProductById = (req, res, next) => {
    const { id } = req.params;
    db.collection('product').findOne({ _id: new ObjectId(id) })
        .then(resoult => res.status(200).send({
            error: false,
            message: 'succes',
            data: resoult
        }))
        .catch(err => next(err))
}

const postProduct = (req, res, next) => {
    const { name, price, stock, status } = req.body;
    db.collection('product').insertOne({ name, price, stock, status })
        .then(resoult => res.status(201).send({
            error: false,
            message: 'succes',
            data: resoult
        }))
        .catch(err => next(err))
}

const putProduct = async (req, res, next) => {
    try {
        const { id } = req.params
        const { name, price, stock, status } = req.body
        const updatedData = await db.collection('product').updateOne({ _id: new ObjectId(id) }, {
            $set:
            {
                name,
                price,
                stock,
                status
            }
        })
        if (updatedData.modifiedCount === 1) {
            return res.send({
                error: false,
                message: 'updated successfully',
                data: updatedData
            });
        } else {
            return res.send({ message: "Data Is Not Updated" });
        }
    } catch (err) {
        next(err)
    }
}

const deleteProduct = (req, res, next) => {
    const { id } = req.params
    db.collection('product').deleteOne({ _id: new ObjectId(id) })
        .then(resoult => res.status(200).send({
            error: false,
            message: 'delete successfully',
            data: resoult
        }))
        .catch(err => next(err))

}

module.exports = {
    getProduct,
    getProductById,
    postProduct,
    putProduct,
    deleteProduct
}

