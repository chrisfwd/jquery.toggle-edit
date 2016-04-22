/*
 * ToggleEdit jQuery plugin
 * version 0.1.0
 * by Chris Lindsey
 * 
 * required DOM structure:
 *   .te-group (container for each value set)
 *     .te-value-readonly (static value)
 *     .te-value-editable (editable input field)

*/

;(function ( $, window, document, undefined ) {

    "use strict";

    /*var pluginName = "toggleEdit",
        defaults = {
            valueGroupSelector: ".te-group",
            valueGroupReadonlyClass: "te-group-readonly",
            valueGroupEditableClass: "te-group-editable",
            valueReadonlySelector: ".te-value-readonly",
            valueEditableSelector: ".te-value-editable",
            delay: 150, // set to 0 if you want all to flip at the same time
            editable: true
            // index: defined below
        };*/

    /*var changeField = function() {
            
        var oldClass = (this.settings.editable) ? this.settings.valueGroupReadonlyClass : this.settings.valueGroupEditableClass,
            newClass = (this.settings.editable) ? this.settings.valueGroupEditableClass : this.settings.valueGroupReadonlyClass,
            //iterator = 0,
            timeout = 0;

        // don't need to mess with intervals if no delay
        if (plugin.settings.delay === 0 || plugin.settings.index === 0) {
            $($element).removeClass(oldClass);
            $($element).addClass(newClass);
            return;
        }

        timeout = setTimeout(function() {

            $element.removeClass(oldClass);
            $element.addClass(newClass);
            
        }, this.settings.delay * this.settings.index);

    };*/

    /*function Plugin ( element, options ) {
        this.element = element;
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }*/

    /*$.extend(Plugin.prototype, {
        init: function () {
                // Place initialization logic here
                // You already have access to the DOM element and
                // the options via the instance, e.g. this.element
                // and this.settings
                // you can add more functions like the one below and
                // call them like the example bellow
                this.yourOtherFunction("jQuery Boilerplate");
        },
        toggle : function(editable){
            
            debugger;
            plugin.settings.editable = editable;
            changeField();
            
        }
    });*/

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    /*$.fn[ pluginName ] = function ( options ) {
        return this.each(function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
            }
        });
    };*/












    $.ToggleEdit = function(element, options) {
        
        var defaults = {
            valueGroupSelector: ".te-group",
            valueGroupReadonlyClass: "te-group-readonly",
            valueGroupEditableClass: "te-group-editable",
            valueReadonlySelector: ".te-value-readonly",
            valueEditableSelector: ".te-value-editable",
            delay: 150, // set to 0 if you want all to flip at the same time
            editable: true
            // index: defined below
        }

        var plugin = this,
            $element = $(element), // reference to the jQuery version of DOM element
            element = element; // reference to the actual DOM element

        plugin.settings = {}

        // the "constructor" method that gets called when the object is created
        var init = function() {
            
            plugin.settings = $.extend({}, defaults, options);
            //changeField();
        }

        // private methods

        var changeField = function() {
            
            var oldClass = (plugin.settings.editable) ? plugin.settings.valueGroupReadonlyClass : plugin.settings.valueGroupEditableClass,
                newClass = (plugin.settings.editable) ? plugin.settings.valueGroupEditableClass : plugin.settings.valueGroupReadonlyClass,
                //iterator = 0,
                timeout = 0;

            // don't need to mess with intervals if no delay
            if (plugin.settings.delay === 0 || plugin.settings.index === 0) {
                $($element).removeClass(oldClass);
                $($element).addClass(newClass);
                return;
            }

            timeout = setTimeout(function() {

                $element.removeClass(oldClass);
                $element.addClass(newClass);
                
            }, plugin.settings.delay * plugin.settings.index);

        }

        plugin.toggle = function(editable){
            
            debugger;
            plugin.settings.editable = editable;
            changeField();
            
        }

        init();

    }
    
    // add the plugin to the jQuery.fn object
    $.fn.toggleEdit = function (options) {
        //debugger;
        // iterate through the DOM elements we are attaching the plugin to
        return this.each(function (index) {
            //debugger;
            
            // if plugin has not already been attached to the element
            if (undefined == $(this).data('toggleEdit')) {

                options = $.extend(options, {index: index});

                var plugin = new $.ToggleEdit(this, options);

                // in the jQuery version of the element
                // store a reference to the plugin object
                // you can later access the plugin and its methods and properties like
                // element.data('pluginName').publicMethod(arg1, arg2, ... argn) or
                // element.data('pluginName').settings.propertyName
                $(this).data('toggleEdit', plugin);

            }

            

        });

    }

})(jQuery, window, document);