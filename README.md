BeeStyle
=========

### a modular css and javascript layout, primarily targeted to internal projects on webkit or gecko

Compatibility: Safari 3+, iOS 3+, Chrome 5+, Android 2+, Firefox 3+

Libraries: Prototype 1.7, Modernizr 1.7, HTML5-boilerplate (CSS reset), BeeStyle-BeeFlex (CSS/JS)

Modules: flex box (for app-like layout), animation (webkit-only), shadows (box-shadows), rounded corners (border-radius)

Themes: beeLight (shades of gray, green highlights), beeDark (shades of gray, green highlights)

### HTML5 Elements and CSS3 Flexible Box Layout

This customizable fluid layout targets any screen size, adapting to mobile resolutions including iPhone and iPad

Sidebars flex depending on screen size in relation to center content (can be set to fixed width if desired)

Source order is also flexible (customizable order currently set to: main, left, right)

iPhone only: 3 column layout becomes 1 column, displaying main content within each section first (not iPad)

Javascript is required for scrolling capabilities within the layout areas combined with a sticky footer (not iPhone/iPad)

Issues: no IE or Opera compatibility (IE plans to implement flex box in IE10, Opera has no planned support yet)

Todo: Prototype 1.7 code to be ported to jQuery 1.6, then CoffeeScript with jQuery

### Demo and usage guidelines located at: [http://beemuse.net](http://beemuse.net)

Projects/scripts on which this builds include:

[https://github.com/paulirish/html5-boilerplate](https://github.com/paulirish/html5-boilerplate)

[https://github.com/sstephenson/prototype](https://github.com/sstephenson/prototype)

[https://github.com/Modernizr/Modernizr](https://github.com/Modernizr/Modernizr)

[https://github.com/yui/yuicompressor](https://github.com/yui/yuicompressor)

Planned projects/scripts to build in include:

[https://github.com/jashkenas/coffee-script](https://github.com/jashkenas/coffee-script)

[https://github.com/jquery/jquery](https://github.com/jquery/jquery)

[https://github.com/280north/aristo](https://github.com/280north/aristo)
