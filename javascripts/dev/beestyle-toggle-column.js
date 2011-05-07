var beeColumn = {
    three: function() {
        $$('.insert')[0].removeClassName('column2');
        $$('.insert')[0].addClassName('column3');
        $$('#beeColToggle a')[0].remove();
        $('beeColToggle').insert('<a href="javascript:beeColumn.one();">one column</a>');
    },
    two: function() {
        $$('.insert')[0].addClassName('column2');
        $$('#beeColToggle a')[0].remove();
        $('beeColToggle').insert('<a href="javascript:beeColumn.three();">three columns</a>');
    },
    one: function() {
        $$('.insert')[0].removeClassName('column2');
        $$('.insert')[0].removeClassName('column3');
        $$('#beeColToggle a')[0].remove();
        $('beeColToggle').insert('<a href="javascript:beeColumn.two();">two columns</a>');
    }
}
document.observe('dom:loaded', function() {
    $('beeColToggle').insert('<a href="javascript:beeColumn.two();">two columns</a>');
});
