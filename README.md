     __________________________________
    < Forrst, now with more keyboard! >
     ----------------------------------
            \   ^__^
             \  (oo)\_______
                (__)\       )\/\
                    ||----w |
                    ||     ||

I really enjoy [Forrst](http://forrst.com/). I also enjoy the keyboard
shortcut that [Tumblr](http://tumblr.com/) has. I thought to myself, WHY CAN'T I
HAVE BOTH?!

Well, turns out I know some javascript and wrote this
[Greasemonkey](http://www.greasespot.net/) script.

What can you do this script? On any Forrst page with a list of posts:

* `j` - Go to next post
* `k` - Go to previous post
* `c` - New post
* `v` - View a post

I wanted to add `like`, but because of security issues, Firefox won't let me do
a `click()` on the link.

INSTALLING
----------

You should have [Greasemonkey](http://www.greasespot.net/) 0.8 or above on
Firefox. You must have this to run this Greasemonkey script.

Then go to http://github.com/bdotdub/forrst-keyboard-navigation-greasemonkey/blob/master/forrst_keyboard_navigation.user.js
and it should prompt you to install it.

And that's it!


TODOs
-----

This is a very minimal script, so I would love to have more help with ideas
or improvements to the script. Some of the TODOs I have in mind for this is:

* Somehow get `like` to work
* Make this work for [Chrome](http://www.google.com/chrome). Theorhetically,
  the script should work since Chrome supports Greasemonkey scripts, but
  didn't work for me. If anyone can help out with this, it would be AWESOME


LICENSE
-------

Copyright (c) 2010 Benny Wong

Released under the GPL license
http://www.gnu.org/copyleft/gpl.html
