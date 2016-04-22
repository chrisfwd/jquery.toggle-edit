;(function ( $, window, document, undefined ) {

    "use strict";

    $.fn.toggleEdit = function(options){

        var plugin = {};

		plugin.defaults = {
	        valueGroupReadonlyClass: "te-group-readonly",
	        valueGroupEditableClass: "te-group-editable",
	        delay: 150, // set to 0 if you want all to flip at the same time
	        editable: true
	        // index: defined below
	    };

        plugin.settings = $.extend({}, plugin.defaults, options );
        
        this.each(function(index){

        	var $element = $(this);

        	var oldClass = (plugin.settings.editable) ? plugin.settings.valueGroupReadonlyClass : plugin.settings.valueGroupEditableClass,
            newClass = (plugin.settings.editable) ? plugin.settings.valueGroupEditableClass : plugin.settings.valueGroupReadonlyClass,
            timeout = 0;

	        // don't need to mess with intervals if no delay
	        if (plugin.settings.delay === 0 || index === 0) {
	            $element.removeClass(oldClass);
	            $element.addClass(newClass);
	            return;
	        }

	        timeout = setTimeout(function() {

	            $element.removeClass(oldClass);
	            $element.addClass(newClass);
	            
	        }, plugin.settings.delay * index);

        });

        return this;
        
    };

})(jQuery, window, document);