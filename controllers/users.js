const User = require("../models/user");

const getAll = async (req, res) => {
    
    const page = parseInt(req.query.page) || 1; // Current page (default: 1)
    const limit = parseInt(req.query.limit) || 10; // Number of results per page (default: 10)

    const totalUsers = await User.countDocuments({}); // Total number of users

    const totalPages = Math.ceil(totalUsers / limit); // Total number of pages
    const offset = (page - 1) * limit; // Offset calculation

    const user = await User.find({}).skip(offset).limit(limit);
    res.status(200).json({ tasks });
};

// const createTask = async (req, res) => {
//     try {
//         const task = await Task.create(req.body);
//         res.status(201).json({ task });
//     } catch (error) {
//         res.status(500).json({ msg: error });
//     }
// };

// const getTask = async (req, res) => {
//     try {
//         const { id: taskID } = req.params;
//         const task = await Task.findOne({ _id: taskID });

//         if (!task) {
//             return res.status(404).json({ msg: `No task with id: ${taskID}` });
//         }

//         res.status(200).json({ task });
//     } catch (error) {
//         res.status(500).json({ msg: error });
//     }
// };

// const updateTask = (req, res) => {
//     res.send("update task");
// };

// const deleteTask = async (req, res) => {
//     try {
//         const { id: taskID } = req.params;
//         const task = await Task.findOneAndDelete({ _id: taskID });

//         if (!task) {
//             return res.status(404).json({ msg: `No task with id: ${taskID}` });
//         }

//         res.status(200).json({ task });
//     } catch (error) {
//         res.status(500).json({ msg: error });
//     }
// };

// module.exports = {
//     getAllTasks,
//     createTask,
//     getTask,
//     updateTask,
//     deleteTask,
// };
