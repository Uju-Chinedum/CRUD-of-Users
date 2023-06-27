const User = require("../models/user");

const getAllUsers = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const totalUsers = await User.countDocuments({});

    const totalPages = Math.ceil(totalUsers / limit);
    const offset = (page - 1) * limit;

    const users = await User.find({}).skip(offset).limit(limit);
    res.status(200).json({
        limit: limit,
        offset: offset,
        totalUsers: totalUsers,
        users,
    });
};

const createUser = async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json({ user });
};

const getUser = async (req, res) => {
    const { id: userID } = req.params;
    const user = await User.findOne({ _id: userID });

    if (!user) {
        return res.status(404).json({
            statusCode: 404,
            message: "User Not Found",
            error: "Not Found",
        });
    }

    res.status(200).json({ user });
};

const updateUser = async (req, res) => {
    const { id: userID } = req.params;
    const user = await User.findOneAndUpdate({ _id: userID }, req.body, {
        new: true,
        runValidators: true,
    });

    if (!user) {
        return res.status(404).json({
            statusCode: 404,
            message: "User Not Found",
            error: "Not Found",
        });
    }

    res.status(200).json({ user });
};

const deleteUser = async (req, res) => {
    const { id: userID } = req.params;
    const user = await User.findOneAndDelete({ _id: userID });

    if (!user) {
        return res.status(404).json({
            statusCode: 404,
            message: "User Not Found",
            error: "Not Found",
        });
    }

    res.status(200).json({ user });
};

module.exports = {
    getAllUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
};
