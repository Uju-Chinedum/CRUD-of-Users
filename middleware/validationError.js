const validationError = (resource) => {
    return {
        type: "Validation Error",
        errors: [
            {
                resource,
                message: `Invalid ${resource}`,
            },
        ],
    };
};

module.exports = validationError