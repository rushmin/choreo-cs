!function(){function n(d){var g=[],a=[],f=function(c){for(var b={},e=0;e<z.length;e++){var h=z[e];if(h.Tag===c){b=h;break}var k=(r=h.Tag,t=x=l=void 0,l=-1!==(t=r).indexOf("http:")?t.replace("http:",""):t.replace("https:",""),-1!==(x=l.indexOf("?"))?l.replace(l.substring(x),""):l);if(c&&(-1!==c.indexOf(k)||-1!==h.Tag.indexOf(c))){b=h;break}}var r,l,x,t;return b}(d);return f.CategoryId&&(g=f.CategoryId),f.Vendor&&(a=f.Vendor.split(":")),!f.Tag&&D&&(a=g=function(c){var b=[],e=function(h){var k=document.createElement("a");
k.href=h;h=k.hostname.split(".");return-1!==h.indexOf("www")||2<h.length?h.slice(1).join("."):k.hostname}(c);y.some(function(h){return h===e})&&(b=["C0004"]);return b}(d)),{categoryIds:g,vsCatIds:a}}function A(d){return!d||!d.length||(d&&window.OptanonActiveGroups?d.every(function(g){return-1!==window.OptanonActiveGroups.indexOf(","+g+",")}):void 0)}function m(d,g){void 0===g&&(g=null);var a=window,f=a.OneTrust&&a.OneTrust.IsVendorServiceEnabled;a=f&&a.OneTrust.IsVendorServiceEnabled();return"Categories"===
u||"All"===u&&f&&!a?A(d):("Vendors"===u||"All"===u&&f&&a)&&A(g)}function p(d){d=d.getAttribute("class")||"";return-1!==d.indexOf("optanon-category")||-1!==d.indexOf("ot-vscat")}function q(d){return d.hasAttribute("data-ot-ignore")}function v(d,g,a){void 0===a&&(a=null);var f=d.join("-"),c=a&&a.join("-"),b=g.getAttribute("class")||"",e="",h=!1;d&&d.length&&-1===b.indexOf("optanon-category-"+f)&&(e=("optanon-category-"+f).trim(),h=!0);a&&a.length&&-1===b.indexOf("ot-vscat-"+c)&&(e+=" "+("ot-vscat-"+
c).trim(),h=!0);h&&g.setAttribute("class",e+" "+b)}function B(d,g,a){void 0===a&&(a=null);var f;d=d.join("-");a=a&&a.join("-");return-1===g.indexOf("optanon-category-"+d)&&(f=("optanon-category-"+d).trim()),-1===g.indexOf("ot-vscat-"+a)&&(f+=" "+("ot-vscat-"+a).trim()),f+" "+g}var z=JSON.parse('[{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/bbqcFLupX84hLS","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/BnQpP0fuj6nSLH","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/dhQnS253nrg90F","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://tracking.g2crowd.com/attribution_tracking/conversions/1006739/assign","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/rJbHX1MpAVPAa","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://tracking.g2crowd.com/attribution_tracking/conversions/1006739.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/5B8l9aeffBDIyk","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/ZGPH5K9lHPQDn","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/3myvGGez8lKVCe","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/Qxy3vQQokpJ1u","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/E7lgnkzcystYLX","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/8vpBypKNTj3RKD","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/f11WmRghbSlriA","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://px.ads.linkedin.com/collect","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://pi.pardot.com/analytics","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/vAa76E56bgLZvx","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/31xf9Wt8oCieSl","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://partners.tremorhub.com/sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/1pNsGP42Sg2Vwo","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/3T5C9j0BfWWIZx","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/s6z16lplDgmDJ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/M7TDXIsB8Qkivn","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/frDK4xNTZa96NM","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/FWH8RlEikGBOSo","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://dsum-sec.casalemedia.com/rum","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/cJ7FUFK1swVLAW","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/wiyx4xKSlQZOcG","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/1v5SqP6qRLc","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/MUkTHJeRvefDvE","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/mEC8KRu6IHullv","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/70G3oFBuujUpJi","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/KznJv79xGNqoUC","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/27D0YZFHEGpzcv","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/4YiCPr80GOmuBY","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/AGOObm73CGPJCF","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/y7V4lU51yzYSHf","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/xdVT4AEduY3KUo","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/qtsY0BCSBNDkSl","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/mkRYoG1eyeTVcG","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/pQl3LIU7EtcBad","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/NpROOoUasLfRFW","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/2fsAy9wVGs7QKE","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/sf9nZiOLd9psJf","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/8WBCpbyUs1gVCH","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/3nRhugABuE1it7","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/c78LkOQUIwKzXv","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/maFz4VggvXg2vP","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/hNRpQUXQrAM8cs","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/MDwILTQRhSiddC","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/4psqRwVjx34eeI","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/mZDlUV2yyfvATg","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/3oafoRUmHo4zS8","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://analytics.twitter.com/i/adsct","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/aG9ZIkDd0nABdp","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/9FPPTlFY0EYzQP","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/538j7XFreBuKVh","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.facebook.com/tr/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/23BYW2SvCfMDNJ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/eEqBgOM9qMaffn","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/9nUOlr53X1rUnT","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/eMErg4Ro3KvYPl","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/8vpOu0px5chCto","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/mopT7Iiju9z2YE","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/aJgRKTKQx5HCPs","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://js.driftt.com/include/1655365500000/ntheygaruch6.js","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/ppbQoZMI1cY1sp","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/jjdgsAHEUxXhTZ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/ncFnxcTDA4mNN8","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/2QSF1wfvPrg3kq","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/iPsQ5HKi367iVr","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/HFkDpxjCQLEhg4","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/EYbns1GWye0VXk","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/mzTcwFLK0QcQrn","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/MJ6WNT42QbiuIJ","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/AZ8gvb4DxJrmOa","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/GvBzQpKhEfa67m","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/eWqdhkYR1jTNak","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/zkLJlkXTDH1ya0","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://s.company-target.com/s/sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/idaIDhLv1K7HUz","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/to0IGAyMG59cl3","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/BZBhTag8pdm8Nf","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/cBbYc5hMzAT5li","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/KrouoTViu1x8K4","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/CYWuzEZkPxeBxb","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/C8rtkcpQZ2eJqk","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/lxAWP5JgI8FCuu","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.google-analytics.com/analytics.js","CategoryId":["C0002","C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/wgzqDEjpMb0t4h","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://apis.google.com/js/plusone.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/KhnTxhtXyD8jmz","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.linkedin.com/px/li_sync","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://connect.facebook.net/signals/config/580024019270916","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/sw8jnq5m0S5Kr0","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/Kr9Dlr6qiIoS4L","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/yt3as4mEiV2ixz","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/YRGXWrWFgdo","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/lzn4aadFH8j9az","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key//pjOee0Tj2Gzyqw","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/14YIyEIc1ySUZp","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/jOQnmQ7uAQ8P8D","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/EPmE644O3Jhrqg","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/4r9U53kaUwhJBg","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/azx1bL4IsbX0j","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://googleads.g.doubleclick.net/pagead/viewthroughconversion/970815474/","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/FnEbG0Kfh0VhfG","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/yI9qNuzedG06rA","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://tracking.g2crowd.com/attribution_tracking/conversions/1006505.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/zwZlqAp6HCvysp","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/nusChn9kW7OEYv","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/flHLNsJFwvDhtp","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/1TtiUTOhvaiU9a","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/NHnJrJgZqZe4wM","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/AvAYsKamnJXvBj","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://tracking.g2crowd.com/attribution_tracking/conversions/1006505/assign","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/C9gt5DA8ZTxNj1","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/oltWpaDCofqhhI","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/FhyeQikygYFdss","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://resources.wso2.com/analytics","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/79CPFtNcBaH13Z","CategoryId":["C0004"],"Vendor":null}]'),
D=JSON.parse("true"),u=JSON.parse('"Categories"'),y="addthis.com addtoany.com adsrvr.org amazon-adsystem.com bing.com bounceexchange.com bouncex.net criteo.com criteo.net dailymotion.com doubleclick.net everesttech.net facebook.com facebook.net googleadservices.com googlesyndication.com krxd.net liadm.com linkedin.com outbrain.com rubiconproject.com sharethis.com taboola.com twitter.com vimeo.com yahoo.com youtube.com".split(" ");y=y.filter(function(d){if("null"!==d&&d.trim().length)return d});var w=
["embed","iframe","img","script"];(new MutationObserver(function(d){Array.prototype.forEach.call(d,function(g){Array.prototype.forEach.call(g.addedNodes,function(e){var h,k;if(1===e.nodeType&&-1!==w.indexOf(e.tagName.toLowerCase())&&!p(e)&&!q(e))if("script"===e.tagName.toLowerCase()){if((k=n(h=e.src||"")).categoryIds.length||k.vsCatIds.length){v(k.categoryIds,e,k.vsCatIds);m(k.categoryIds,k.vsCatIds)||(e.type="text/plain");var r=function(l){"text/plain"===e.getAttribute("type")&&l.preventDefault();
e.removeEventListener("beforescriptexecute",r)};e.addEventListener("beforescriptexecute",r)}}else((k=n(h=e.src||"")).categoryIds.length||k.vsCatIds.length)&&(v(k.categoryIds,e,k.vsCatIds),m(k.categoryIds,k.vsCatIds)||(e.removeAttribute("src"),e.setAttribute("data-src",h)))});var a=g.target;if(g.attributeName&&(!p(a)||!q(a)))if("script"===a.nodeName.toLowerCase()){if((b=n(c=a.src||"")).categoryIds.length||b.vsCatIds.length){v(b.categoryIds,a,b.vsCatIds);m(b.categoryIds,b.vsCatIds)||(a.type="text/plain");
var f=function(e){"text/plain"===a.getAttribute("type")&&e.preventDefault();a.removeEventListener("beforescriptexecute",f)};a.addEventListener("beforescriptexecute",f)}}else if(-1!==w.indexOf(g.target.nodeName.toLowerCase())){var c,b;((b=n(c=a.src||"")).categoryIds.length||b.vsCatIds.length)&&(v(b.categoryIds,a,b.vsCatIds),m(b.categoryIds,b.vsCatIds)||(a.removeAttribute("src"),a.setAttribute("data-src",c)))}})})).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["src"]});
var C=document.createElement;document.createElement=function(){for(var d=[],g=0;g<arguments.length;g++)d[g]=arguments[g];if("script"!==d[0].toLowerCase()&&-1===w.indexOf(d[0].toLowerCase()))return C.bind(document).apply(void 0,d);var a=C.bind(document).apply(void 0,d),f=a.setAttribute.bind(a);return Object.defineProperties(a,{src:{get:function(){return a.getAttribute("src")||""},set:function(c){var b="";"string"==typeof c?b=c:c instanceof Object&&(b=c.toString());b=n(b);!b.categoryIds.length&&!b.vsCatIds.length||
"script"!==d[0].toLowerCase()||p(a)||m(b.categoryIds,b.vsCatIds)||q(a)?!b.categoryIds.length||-1===w.indexOf(d[0].toLowerCase())||p(a)||m(b.categoryIds,b.vsCatIds)||q(a)?f("src",c):(a.removeAttribute("src"),f("data-src",c),c=a.getAttribute("class"),c||(c=B(b.categoryIds,c||"",b.vsCatIds),f("class",c))):(f("type","text/plain"),f("src",c));return!0}},type:{set:function(c){var b=n(a.src||"");c=!b.categoryIds.length&&!b.vsCatIds.length||p(a)||m(b.categoryIds,b.vsCatIds)||q(a)?c:"text/plain";return f("type",
c),!0}},class:{set:function(c){var b=n(a.src);!b.categoryIds.length&&!b.vsCatIds.length||p(a)||m(b.categoryIds,b.vsCatIds)||q(a)?f("class",c):(c=B(b.categoryIds,c,b.vsCatIds),f("class",c));return!0}}}),a.setAttribute=function(c,b,e){"type"!==c&&"src"!==c||e?f(c,b):a[c]=b},a}}();