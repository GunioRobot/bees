jQuery(document).ready(function(){
    // todo: combine NoteToggle into one function
    jQuery('.beeNoteToggle.1').click(function() {
        jQuery('.beeNote.1').slideToggle('fast');
    });
    jQuery('.beeNoteToggle.2').click(function() {
        jQuery('.beeNote.2').slideToggle('fast');
    });
    jQuery('.beeNoteToggle.3').click(function() {
        jQuery('.beeNote.3').slideToggle('fast');
    });
    jQuery('.beeNoteToggle.4').click(function() {
        jQuery('.beeNote.4').slideToggle('fast');
    });
    // todo: combine CodeToggle into one function
    jQuery('.beeCodeToggle.1').click(function() {
        jQuery('.beeCode.1').toggle();
    });
    jQuery('.beeCodeToggle.2').click(function() {
        jQuery('.beeCode.2').toggle();
    });
    jQuery('.beeCodeToggle.3').click(function() {
        jQuery('.beeCode.3').toggle();
    });
    jQuery('.beeCodeToggle.4').click(function() {
        jQuery('.beeCode.4').toggle();
    });
});
jQuery(document).ready(function() {
    // google prettify syntax highlighting
    jQuery('code').addClass('prettyprint');
    prettyPrint();
});
