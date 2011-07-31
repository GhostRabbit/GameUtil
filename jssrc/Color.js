var BackBone = require('backbone');
var Color = BackBone.Model.extend({
    initialize: function() {},
    colors: {RED:0, YELLOW:1, GREEN:2}
});
module.exports = Color;