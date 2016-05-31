/*!
 * Floating alerts
 */

$(function () {
    'use strict';

    function alertsFn() {
        $(".float-alerts .alert:not('.noautoclose')").each(function () {
            var el = this;
            $(el).on('click', '.close', function () {
                alertClose(el);
            });
            $(el).delay(8000).fadeTo(800, 0, function () {
                alertClose(el);
            });
        });
    }

    function alertClose(el) {
        $(el).remove();
    }

    $.nette.ext('flash', {
        complete: function () {
            alertsFn();
        }
    });

    var dismiss = '[data-dismiss="alert"]';
    alertsFn();
});