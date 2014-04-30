var $ = require('streamhub-sdk/jquery');
var ContentListView = require('streamhub-sdk/content/views/content-list-view');
var FaceContentView = require('streamhub-faces/face-content-view');
var inherits = require('inherits');

'use strict';

    /**
     * A view that displays participatnts in a StreamHub Collection
     * @param opts {Object} A set of options to config the view with
     * @param opts.el {HTMLElement} The element in which to render the streamed content
     * @param opts.relayoutWait {number} The number of milliseconds to wait when debouncing
     *        .relayout(). Defaults to 200ms.
     * @param opts.css {boolean} Whether to insert default media wall css. Default true.
     * @constructor
     */
var FacesView = function(opts) {
    opts = opts || {};
    var self = this;
    ContentListView.apply(this, arguments);

};
inherits(FacesView, ContentListView);

FacesView.prototype.createContentView = function (content){
    return new FaceContentView({
        content: content
    });
};

module.exports = FacesView;

