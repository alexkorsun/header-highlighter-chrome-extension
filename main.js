var highlighter = {
    highlight: function () {
        $("body").find('h1, h2, h3, h4, h5, h6').addClass('highlighted');
    }
};

$("body").append("<div class='highlighter-box'><button id='highlight-btn'>Highlight</button></div>");
$("#highlight-btn").click(function () {
    highlighter.highlight();
});
