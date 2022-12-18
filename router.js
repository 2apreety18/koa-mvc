//connecting controller methods to the router
const messageController = require('./controllers/message');

const Router = require('koa-router');
const router = new Router();

router.get('/message', messageController.getMessages);
router.post('/messsage', messageController.postMessages);

module.exports = router;