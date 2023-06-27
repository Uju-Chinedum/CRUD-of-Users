const errorHandler = async (err, req, res, next) => {
    return res.status(500).json({
        statusCode: 500,
        msg: "Something went wrong",
        error: "Internal Server Error",
    });
};

module.exports = errorHandler;
