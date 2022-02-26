
/**
 * @type { import("express-next-api").NextApi } 
 */

exports.get = (req,res) => {
    res.dispatch('cadidates:create', {data: 'test'})
}