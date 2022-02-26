
/**
 * @type { import("express-next-api").NextApi } 
 */

exports.get = (req,res) => {
    console.log(req.socketId);
    res.dispatch('test', {data: 'test'})
}