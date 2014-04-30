var ContentView = require('streamhub-sdk/content/views/content-view');
var inherits = require('inherits');
var renderFaceContent = require('hgn!streamhub-faces/face-content-view');
var FaceContentView = function(){
	ContentView.apply(this, arguments);
};

inherits(FaceContentView, ContentView);

FaceContentView.prototype.elClass = "streamhub-faces-view";
FaceContentView.prototype.avatarSelector = "div";

FaceContentView.prototype.template = renderFaceContent;



module.exports = FaceContentView;