(function(ui) {
    'use strict';

    var _ajax = function() {

        this.Get = function(url) {
            console.log('Calling TalentedUI.Ajax.Get');
        };

        this.Post = function(url, data) {
            console.log('Calling TalentedUI.Ajax.Post');
        };

    };

    ui.Ajax = ui.Ajax || new _ajax();

})(window.TalentedUI);
