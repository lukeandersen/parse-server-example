// Cloud function
Parse.Cloud.define('hello', function(req, res) {
    res.success('Hi');
});

// Class validation
Parse.Cloud.beforeSave('GameScore', function(req, res) {
    if (!req.object.get('playerName')) {
        res.error('playerName is required');
    }
    res.success();
});
