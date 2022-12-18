const db = require('./db')

exports.getAll = async (ctx) =>{
    try {
        return db.msg;
    }
    catch (err){
        console.log(err)
    }
 } 
exports.postOne = async (ctx) => {

    try {
        const msg = ctx.request.body
        db.msg.push(msg);
        ctx.body = 'message received';
    }
    
    catch (err){
        console.log(err);
    }
}
