showdown.setFlavor('github');

$(function() {
    var converter = new showdown.Converter();
    $.get("https://raw.githubusercontent.com/ianw3214/utgddc-prototype/master/" + $("#page-script").attr("name"), function(data) {
        $('#desc').html(converter.makeHtml(data));
    });
})