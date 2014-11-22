
/*
router.get('/', function(req, res) {
    res.send({message: "Say something"});
});
*/

module.exports = {
    echoResponse: function(req, res) {
        res.send(req.body);
    }
};

