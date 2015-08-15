(function(window) {
    'use strict';

    (function() {
        if (window.log) {
            window.log = function(message) {

            };
        }

        if (!window.console) {
            window.console = {
                log: function() {},
                debug: function() {},
                info: function() {},
                warn: function() {},
                error: function() {}
            };
        }
    })();

    var _talentedUi = function() {

        this.Elements = {
            Table: 'table',
            TableHead: 'thead',
            TableBody: 'tbody',
            TableFoot: 'tfoot'
        };

        this.GetType = function(obj) {
            var typeName = Object.prototype.toString.call(obj);
            return typeName.match(/([A-Z])\w+/g)[0];
        };

        this.CreateElement = function(elementName) {
            if (typeof elementName !== typeof '') {
                throw console.error('Element name must be string!');
            }

            var createdElement = document.createElement(elementName);
            return createdElement;
        };

    };

    window.TalentedUI = new _talentedUi();

})(window);
