exports.createDevice = async (_req, res) => {
    try {
        return res.status(200).json({
            message: "Test endpoint!"
        });
    } catch (error) {

    }
};