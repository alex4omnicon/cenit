// require rails_admin/d3
// require rails_admin/highcharts
//= require rails_admin/triggers-box
//= require rails_admin/test-flow-transformation
//= require rails_admin/highlight_js/highlight.pack.js

$(document).on('rails_admin.dom_ready', function() {
  $('pre code').each(function(i, block) {
     hljs.highlightBlock(block);
   });
});

$(function(){
    $('#main-accordion .panel-heading a.panel-title').click(function(){
        var parent = $(this).parent().parent();
        if ($(parent).hasClass('active'))
            $(parent).removeClass('active');
        else {
            $(parent).addClass('active');
            $(parent).siblings().each(function () {
                $(this).removeClass('active');
            });
        }
    });
});