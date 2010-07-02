// ==UserScript==
// @name           Forrst Post Keyboard Navigator
// @namespace      http://bwong.net/
// @description    Adds forrst post keyboard navigation
// @include        http://forrst.com/*
// @include        http://www.forrst.com/*
// ==/UserScript==

var ForrstNavigator = function() {
  var Keys = {
    c: 99,
    g: 103,
    j: 106,
    k: 107,
    l: 108,
    r: 114,
    v: 118
  };

  var Forrst;
  if (!Forrst) Forrst = {};

  Forrst.Activity = {
    toggleLike: function() {
      var currentElement = Forrst.Window.closestElements('.activity').current;
      if ($(currentElement).hasClass('activity')) {
        // Since I can't do `click()` from within a Greasemonkey script,
        // not really sure what to do here. If anyone has any ideas, holler.
      }
    },

    view: function() {
      var currentElement = Forrst.Window.closestElements('.activity').current;
      if ($(currentElement).hasClass('activity')) {
        var viewElems = $(currentElement).find('.view');
        if (viewElems.length > 0)
          document.location = viewElems[0].href;
      }
    }
  };

  Forrst.Navigator = {
    newPost: function() {
      document.location = 'http://forrst.com/posts/new';
    },

    goToPrevious: function() {
      var prevElement = Forrst.Window.closestElements('.activity').previous;
      Forrst.Window.moveTo(prevElement, true);
    },

    goToNext: function() {
      var nextElement = Forrst.Window.closestElements('.activity').next;
      Forrst.Window.moveTo(nextElement, false);
    }
  };

  Forrst.Post = {
    reply: function() {
      if (document.location.href.match(/^https?:\/\/(www\.)?forrst\.com\/posts/)) {
        $('#comment_content').focus();
      }
    }
  };

  Forrst.Window = {
    threshold: 1,

    closestElements: function(selector) {
      var topOfViewport = $(window).scrollTop();

      var nextElement = null;
      var currElement = null;
      var prevElement = null;

      $(selector).each(function(idx, element) {
        var topOfElement = $(element).offset().top;

        if ((topOfElement + Forrst.Window.threshold) < topOfViewport ) {
          prevElement = element;
        }
        else if (!nextElement &&  (topOfElement - Forrst.Window.threshold) > topOfViewport ) {
          nextElement = element;
        }
        else if (Math.abs(topOfViewport - topOfElement) <= Forrst.Window.threshold * 2) {
          currElement = element;
        }
      });

      return {
        current: currElement,
        next: nextElement,
        previous: prevElement
      };
    },

    moveTo: function(element, goToTopIfNull) {
      if (element) {
        window.scrollTo(0, $(element).offset().top);
      }
      else if (goToTopIfNull) {
        window.scrollTo(0, 0);
      }
    }
  };

  // For some reason, the jQuery keypress() event not working
  document.addEventListener("keypress", function(ev) {
    if (!ev) ev = window.event;

    var key = ev.keyCode ? ev.keyCode : ev.which;

    switch (key) {
      case Keys.c:
        Forrst.Navigator.newPost();
        break;
      case Keys.j:
        Forrst.Navigator.goToNext();
        break;
      case Keys.k:
        Forrst.Navigator.goToPrevious();
        break;
      case Keys.l:
        Forrst.Activity.toggleLike();
        break;
      case Keys.r:
        Forrst.Post.reply();
        break;
      case Keys.v:
        Forrst.Activity.view();
        break;
    }
  }, true);
};

// via http://erikvold.com/blog/index.cfm/2010/6/14/using-jquery-with-a-user-script
function addJQuery(callback) {
  var script = document.createElement("script");
  var loadCallback = function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  };

  if (typeof($) !== undefined) {
    loadCallback();
  }
  else {
    script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js");
    script.addEventListener('load', function() {
      loadCallback();
    }, false);

    document.body.appendChild(script);
  }
}

addJQuery(ForrstNavigator);

