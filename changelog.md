
3.2.2 / 2014-12-09
==================

  * mod; User timeoutAfterMove of currentMsg [EloHg]

3.2.1 / 2014-11-02
==================

  * mod; readme
  * mod; switch to package.json scripts
  * add; semi's to protect js bundling issues

3.2.0 / 2014-03-22
==================

 * add; new theme called Flatty [msurguy]
 * add; requirejs test
 * fix; broken theme link
 * fix; version tag in bower configuration

3.1.0 / 2013-05-25 
==================

  * removed; forceNew opt, not used
  * fixed; try catch for ie8 filter issue when gradient filter used
  * fixed; prevent accessing property of null/undefined objects
  * fixed; appendChild of null error GH #36
  * added; component.json
  * added new param: timeoutAfterMove : bool. Adds additional timeout after user action before closing

3.0.6 / 2013-01-04 
==================

  * updated; modified styles for themes
  * fixed; timeout of 0 not working GH #35
  * fixed; font typo in jackedup.css
  * added; note about amd and commonjs to readme
  * added; ability to set container element when creating new humane instance

3.0.5 / 2012-09-03 
==================

  * fixed; loading humane lib after dom ready GH #30

3.0.4 / 2012-07-21 
==================

  * updated; build process
  * updated; attribution, sample
  * added; support Asynchronous Module Definition [tahu]
  * added; make spawn actions chainable

3.0.3 / 2012-07-06 
==================

  * fixed; queued notification overwrites previous [JensRoland]
  * fixed; height declaration in themes [FileTrek]

3.0.1 / 2012-06-04 
==================

  * updated; humane location in index
  * fixed; notification not showing up in ie8 onload GH #23

3.0.0 / 2012-05-07 
==================

  * updated; documentation
  * removed; info, success, error (use spawn instead)
  * fixed; js error when no cb on remove
  * fixed; flicker bug in ie9
  * fixed; demo page not working in ie7,8
  * added; unique instance support
  * added; spawn support
  * added; options per notification
  * added; custom class support

2.8.1 / 2012-04-24 
==================

  * added; callback to remove function GH #22

2.8.0 / 2012-02-21 
==================

  * added; custom notifier support GH #19

2.7.2 / 2012-02-10 
==================

  * fixed; IE 7/8 display issue
  * updated; docs page

2.7.1 / 2012-01-26 
==================

  * fixed; display:none humane when not in use Fixes #18
  * added; exposed remove()

2.7.0 / 2012-01-12 
==================

  * updated; improved support for iOS 4+, Android 2+

2.6.0 / 2012-01-02 
==================

  * added; event support
  * fixed; bug w/ transEnd firing multiple times

2.5.0 / 2011-12-23 
==================

  * removed; forceNew (breaking change), hacky solution that didn't work very well
  * updated; code cleanup and refactor
  * updated; using transitionend for end events instead of timeout
  * added; waitForMove by type

2.2.8 / 2011-12-22 
==================

  * added; timeout and clickToClose by type

2.2.7 / 2011-12-10 
==================

  * added; ability to set the timeout to 0 (no timeout)

2.2.6 / 2011-12-08 
==================

  * added; 'original' theme

2.2.5 / 2011-12-02 
==================

  * added; click to close option

2.2.0 / 2011-12-02 
==================

  * added; callback support @OiNutter
  * fixed; jackedup to support IE<9

2.1.1 / 2011-11-28 
==================

  * fixed; restore original class after completion
  * added; jackedup theme
  * fixed; some IE fixes

2.1.0 / 2011-11-28 
==================

  * added; stylus support, updated themes
  * added; bigbox theme
  * added; message types (log, info, error, success)

2.0.0 / 2011-07-12
==================

  * mobile support for iOS / Android
  * ie z-index fix
  * switched to z-index instead of visibility
