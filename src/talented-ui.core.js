(function(window) {
    'use strict';

    (function() {

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

        this.Events = {
            Click: 'click',
            ContextMenu: 'contextmenu'
        };

        this.Types = {
            String: 'String',
            HTMLDivElement: 'HTMLDivElement'
        };

        this.Elements = {
            A: 'a',
            Button: 'button',
            Input: 'input',
            Select: 'select',
            Option: 'option',
            Tr: 'tr',
            Th: 'th',
            Td: 'td',
            Table: 'table',
            THead: 'thead',
            TBody: 'tbody',
            TFoot: 'tfoot',
            Ul: 'ul',
            Ol: 'ol',
            Li: 'li'
        };

        this.RegisterEvent = function(element, eventName, callback) {
            if (element.addEventListener) {
                element.addEventListener(eventName, callback, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + eventName, callback);
            } else if (element['on' + eventName]) {
                element['on' + eventName] = callback;
            } else {
                throw console.error('');
            }
        }

        this.ReleaseEvent = function(element, eventName, callback) {
            if (element.removeEventListener) {
                element.removeEventListener(eventName, callback);
            } else if (element.detachEvent) {
                element.detachEvent('on' + eventName, callback);
            } else if (element['on' + eventName]) {
                element['on' + eventName] = undefined;
            } else {
                throw console.error('');
            }
        }

        // TODO:
        this.CreateCustomEvent = function(argument) {

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

        this.SetAttribute = function (element, attributeName, attributeValue) {
            if (!element.hasAttribute(attributeName)) {
                console.log(attributeValue);
                element.setAttribute(attributeName,attributeValue);
            }
        };

        this.UpdateAttribute = function (element, attributeName, attributeValue) {

        };

        this.RemoveAttribute = function (element, attributeName) {
            if (element.hasAttribute(attributeName)) {
                element.removeAttribute(attributeName);
            }
        }

    };

    window.TalentedUI = new _talentedUi();

})(window);
