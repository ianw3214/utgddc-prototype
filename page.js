showdown.setFlavor('github');

$(function() {
    var converter = new showdown.Converter();
    $.get($("#page-script").attr("name"), function(data) {
        $('#desc').html(converter.makeHtml(data));
    });
})