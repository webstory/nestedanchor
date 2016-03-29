'use strict';

// Uses CommonJS, AMD or browser globals to create a jQuery plugin.
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    var pluginClassName = ".link";

    $.fn.nestedanchor = function() {
      $(this).find(pluginClassName)
        .on('mouseenter', function(e) {
          e.stopPropagation();
          var me = $(this);
          me.addClass("hover");
          me.find(pluginClassName).addClass("hover");
          me.parents(pluginClassName).removeClass("hover");
        }).on('mouseleave', function(e) {
          var me = $(this);
          me.removeClass("hover");
          me.find(pluginClassName).removeClass("hover");
          me.parents(pluginClassName).trigger('mouseenter');
        }).on('click', function(e) {
          e.stopPropagation();
          var me = $(this);
          var link = me.attr('data-href');
          var target = me.attr('data-target');

          window.open(link, target);
        })

      return this;
    };
}));
