function index(req, res) {
    const posts = "posts List";
    res.send(posts)
}

module.exports = {
    index: index
}