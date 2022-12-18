const message = require('../models/message');

exports.getMessages =  async ctx =>{
  try{
    const msgs = await message.getAll();
    ctx.body = msgs;
    ctx.status = 200;
  } catch (error){
    console.log(error);
  }
    
};

exports.postMessages = async ctx =>{
  try {
    await message.postOne(ctx.request.body);
    ctx.body = "SUCCESSFULLY RECEIVED";
  } catch (error) {
    console.log(error);
  }
};