(function(d){var b=document.createElement("script");function a(){var c=document.createElement("script");c.textContent="("+d.toString()+")();";document.body.appendChild(c)}if(typeof $!==undefined)a();else{b.setAttribute("src","http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js");b.addEventListener("load",function(){a()},false);document.body.appendChild(b)}})(function(){var d={g:99,t:103,k:106,l:107,m:108,r:118},b;b||(b={});b.e={q:function(){var a=b.a.b(".activity").f;$(a).j("activity")}, view:function(){var a=b.a.b(".activity").f;if($(a).j("activity")){a=$(a).find(".view");if(a.length>0)document.location=a[0].href}}};b.c={n:function(){document.location="http://forrst.com/posts/new"},i:function(){var a=b.a.b(".activity").p;b.a.moveTo(a,true)},h:function(){var a=b.a.b(".activity").next;b.a.moveTo(a,false)}};b.a={d:1,b:function(a){var c=$(window).scrollTop(),f=null,h=null,i=null;$(a).s(function(j,e){var g=$(e).o().top;if(g+b.a.d<c)i=e;else if(!f&&g-b.a.d>c)f=e;else if(Math.abs(c-g)<= b.a.d*2)h=e});return{f:h,next:f,p:i}},moveTo:function(a,c){if(a)window.scrollTo(0,$(a).o().top);else c&&window.scrollTo(0,0)}};document.addEventListener("keypress",function(a){if(!a)a=window.event;switch(a.keyCode?a.keyCode:a.which){case d.g:b.c.n();break;case d.k:b.c.h();break;case d.l:b.c.i();break;case d.m:b.e.q();break;case d.r:b.e.view();break}},true)});