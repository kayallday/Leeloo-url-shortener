module.exports = function (express) {
    var router = express.Router();
    // var path = require("path");

    router.get('/', function(req, res){
      res.json({ hello: "world"});
    })

    router.get('/status', function(req, res){
      res.json({ healthy: true});
    })

    router.get('/user/:id', function(req, res){
      res.json({ user: { id: req.params.id }});
    })
    // URL Header
    // router.post('/api/v1/urls', function (req, res) {
    //     var origUrl = req.body.originalUrl;
    //
    //     // determine possible chars and shortened url length
    //     var charString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
    //     var totalChars = 8;
    //
    //     // Create a blank string to build the shortened url upon
    //     var buildUrl = '';
    //
    //     // Super awesome URL shortening hat trick
    //     for (var i = 0; i < totalChars; i++) {
    //         // Formula to add randomly chosen character to buildUrl
    //         buildUrl += charString.charAt(Math.random() * charString.length);
    //     }
    //
    //     //return response
    //     var displayUrl = {
    //         origUrl: origUrl,
    //         shortUrl: buildUrl
    //     };
    //
    //     res.json(displayUrl);
    // });

    return router;
};
