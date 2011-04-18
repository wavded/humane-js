# Humane JS
This project was heavily inspired by [humanmsg](http://code.google.com/p/humanmsg/) project for jQuery.  I really
liked the project but I wanted to remove the jQuery dependency, add support for CSS transitions, and have more 
control over the timing.

## About
Humane JS tries to be as unobtrusive as possible to the user experience while providing helpful information that is
clear and grabs the users attention.  It is framework independent.  Customizable.

## Demo

You can see a demo [here](http://wavded.github.com/humane-js/)

## Testing
I personally have tested IE 6+, Firefox and Chrome, but there is support for Opera and Safari that has been accounted
for.  Please let me know if you have any issues.  I believe the following is safe to use:

  - Chrome 9+
  - Firefox 3+
  - Internet Explorer 6+
  - Opera 10+
  - Safari 3+

## Setup
Simply include the JS and CSS file on your page.

## Usage
Humane adds a `humane` function to the global scope that you simply call
<pre>
humane('hello world');
</pre>
You also can use HTML
<pre>
humane('&lt;span style="color:red">oh no!&lt;/span>');
</pre>

## Configuration
Humane is very simple, only the timeout before the popup disappears is configurable
<pre>
humane.timeout = 2000
</pre>
Default timeout is 3 seconds.

## Contribute

I know improvements could be made, please help!  This is just getting started.  My goal is to keep the system very simple and small.

## License

(The MIT License)

Copyright (c) 2010 Marc Harter &lt;wavded@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
