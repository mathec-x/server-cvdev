
exports.validateBody = (req) => {
    return {
        image: req.image || undefined,
        name: req.name || undefined,
        nick: req.nick || undefined,
        email: req.email || undefined,
        about: req.about || undefined,
    }
}