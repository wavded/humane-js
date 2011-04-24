/**
 * HumaneJS
 * Humanized Messages for Notifications
 * @example
 *  humane('hello world');
 */
;(function(win,doc){
    var 
        eventOn = function(type,fn){ win.addEventListener ? win.addEventListener(type,fn,false) : win.attachEvent('on'+type,fn)},
        eventOff = function(type,fn){ win.removeEventListener ? win.removeEventListener(type,fn,false) : win.detachEvent('on'+type,fn)},

        animationInProgress = false,
        transitionSupported = false,
        humaneEl = null,
        timeout = null,
        useFilter = /msie [678]/i.test(navigator.userAgent), // ua sniff for filter support
        isSetup = false,
        queue = [];

    eventOn('load',function(){
        transitionSupported = (function(style){
            var prefixes = ['Moz','Webkit','O','ms','Khtml',''];
            for(var i = 0, prefix; prefix = prefixes[i]; i++){
                if(prefix+'Transition' in style) return true;
            }
            return false;
        }(doc.body.style));

        humane.setup();
    });

    // if CSS Transitions not supported, fallback to JS Animation
    function jsAnimateOpacity(level,callback){
        if(animationInProgress) return;

        animationInProgress = true;
        level = parseInt(level *= 100); // avoid floating point issues
        var opacity = level ? 0 : 100; // avoid floating point issues
        var isLess = opacity > level;

        if(level == 100) {
            humaneEl.style.visibility = "visible";
        }

        var interval = setInterval(function(){
            if(opacity == level) {
                clearInterval(interval);
                animationInProgress = false;
                if(level == 0) humaneEl.style.visibility = "hidden";
                humane.run();
            }
            opacity += isLess ? -5 : 5;
            if(useFilter)
                humaneEl.style.filter = "progid:DXImageTransform.Microsoft.alpha(opacity="+opacity+")";
            else humaneEl.style.opacity = opacity / 100;
        },25);
    }

    function animate(level){
        if(animationInProgress) return;

        animationInProgress = true;
        humaneEl.className = level ? "humane humane-show" : "humane";
        setTimeout(function(){
            animationInProgress = false;
            humane.run();
        },500);
    }

    var humane = {
        setup: function() {
            humaneEl = doc.createElement('div');
            humaneEl.id = 'humane';
            humaneEl.className = 'humane';
            doc.body.appendChild(humaneEl);
            isSetup = true;

            humane.setupEvents();
            humane.run();
        },
        notify: function(message) {
            queue.push(message);
            if(isSetup === false) return; // if not setup, don't try to notify yet

            humane.setupEvents();
            humane.run();
        },
        run: function() {
            if(!queue.length || animationInProgress) return;

            humaneEl.innerHTML = queue.pop();
            transitionSupported ? animate(1) : jsAnimateOpacity(1)
            if(useFilter) humane.remove();
        },
        setupEvents: function() {
            humane.tearDownEvents(); // ensure we have no events already
            eventOn('mousemove',humane.remove);
            eventOn('click',humane.remove);
            eventOn('keypress',humane.remove);
        },
        tearDownEvents: function() {
            eventOff('mousemove',humane.remove);
            eventOff('click',humane.remove);
            eventOff('keypress',humane.remove);
        },
        remove: function() {
            humane.tearDownEvents();
            if(timeout){
                clearTimeout(timeout);
                timeout = null;
            }
            timeout = setTimeout(function(){
                transitionSupported ? animate(0) : jsAnimateOpacity(0)
            },win.humane.timeout);
        }
    };

    win.humane = humane.notify;
    win.humane.timeout = 3000;
}(window,document));
