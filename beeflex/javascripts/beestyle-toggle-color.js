var beeFilter = {
    beeDark: function() {
        $$('body')[0].removeClassName('beeLight');
        $$('body')[0].addClassName('beeDark');
        $$('#beeColorToggle a')[0].remove();
        $('beeColorToggle').insert('<a href="javascript:beeFilter.beeLight();">beeLight</a>');
    },
    beeLight: function() {
        $$('body')[0].removeClassName('beeDark');
        $$('body')[0].addClassName('beeLight');
        $$('#beeColorToggle a')[0].remove();
        $('beeColorToggle').insert('<a href="javascript:beeFilter.beeDark();">beeDark</a>');
    }
}
document.observe('dom:loaded', function() {
    $('beeColorToggle').insert('<a href="javascript:beeFilter.beeDark();">beeDark</a>');
});
