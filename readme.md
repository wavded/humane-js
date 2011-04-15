# Humane JS
This project was heavily inspired by [humanmsg](http://code.google.com/p/humanmsg/) project for jQuery.  I really
liked the project but I wanted to remove the jQuery dependency, add support for CSS transitions, and have more 
control over the timing.

Humane JS tries to be as unobtrusive as possible to the user experience while providing help information that is
clear and grabs the users attention.

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
Humane adds a `humane` function to the global scope that you simple call.
<pre>
humane('hello world');
</pre>
## Configuration
Humane is very simple, only the timeout before the popup dissapears is configurable
<pre>
humane.timeout = 2000
</pre>
Default timeout is 3 seconds.
