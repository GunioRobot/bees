$(document).ready(function() {
    // todo: combine NoteToggle into one function
    $(".beeNoteToggle.1").click(function() {
        $(".beeNote.1").slideToggle("fast");
    });
    $(".beeNoteToggle.2").click(function() {
        $(".beeNote.2").slideToggle("fast");
    });
    $(".beeNoteToggle.3").click(function() {
        $(".beeNote.3").slideToggle("fast");
    });
    $(".beeNoteToggle.4").click(function() {
        $(".beeNote.4").slideToggle("fast");
    });
    // todo: combine CodeToggle into one function
    $(".beeCodeToggle.1").click(function() {
        $(".beeCode.1").toggle();
    });
    $(".beeCodeToggle.2").click(function() {
        $(".beeCode.2").toggle();
    });
    $(".beeCodeToggle.3").click(function() {
        $(".beeCode.3").toggle();
    });
    $(".beeCodeToggle.4").click(function() {
        $(".beeCode.4").toggle();
    });
});
$(document).ready(function() {
    // google prettify syntax highlighting
    $("code").addClass("prettyprint");
    prettyPrint();
});
