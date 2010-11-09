var Page = {
	scanLinks: function() {
		$$('a[rel=external]').each(function(s) {
			s.target='_blank';
		});
		var here = '@rk-productions.com';
		$$('a[rel=contact]').each(function(s) {
			var whois = s.readAttribute('rev');
			s.href='mailto:' + whois + here;
		});
	}
};
document.observe('dom:loaded', function() {
	Page.scanLinks();
});
