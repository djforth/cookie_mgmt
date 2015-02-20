(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./lib/manage_cookies.coffee":[function(require,module,exports){
var ManageCookies;

ManageCookies = (function() {
  function ManageCookies() {}

  ManageCookies.prototype.createCookie = function(name, value, days) {
    if (days == null) {
      days = 0;
    }
    if (name || value) {
      return document.cookie = name + "=" + value + this.setExpires(days) + "; path=/";
    }
  };

  ManageCookies.prototype.deleteCookie = function(name) {
    if (name) {
      return document.cookie = name + "=nil;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
    }
  };

  ManageCookies.prototype.setExpires = function(days) {
    var date, expires;
    if (days) {
      date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toGMTString();
    } else {
      expires = "";
    }
    return expires;
  };

  ManageCookies.prototype.getCookie = function(c_name) {
    var c_end, c_start;
    if (document.cookie.length > 0) {
      c_start = document.cookie.indexOf(c_name + "=");
      if (c_start !== -1) {
        c_start = c_start + c_name.length + 1;
        c_end = document.cookie.indexOf(";", c_start);
        if (c_end === -1) {
          c_end = document.cookie.length;
        }
        return unescape(document.cookie.substring(c_start, c_end));
      }
    }
    return void 0;
  };

  return ManageCookies;

})();

module.exports = ManageCookies;



},{}]},{},["./lib/manage_cookies.coffee"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGpmb3J0aC93ZWJzaXRlcy9tb2R1bGVzL2Nvb2tpZV9tZ210L2xpYi9tYW5hZ2VfY29va2llcy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNDQSxJQUFBLGFBQUE7O0FBQUE7NkJBRUU7O0FBQUEsMEJBQUEsWUFBQSxHQUFhLFNBQUMsSUFBRCxFQUFPLEtBQVAsRUFBYyxJQUFkLEdBQUE7O01BQWMsT0FBSztLQUM5QjtBQUFBLElBQUEsSUFBRyxJQUFBLElBQVEsS0FBWDthQUNFLFFBQVEsQ0FBQyxNQUFULEdBQWtCLElBQUEsR0FBTyxHQUFQLEdBQWEsS0FBYixHQUFxQixJQUFDLENBQUEsVUFBRCxDQUFZLElBQVosQ0FBckIsR0FBeUMsV0FEN0Q7S0FEVztFQUFBLENBQWIsQ0FBQTs7QUFBQSwwQkFJQSxZQUFBLEdBQWEsU0FBQyxJQUFELEdBQUE7QUFDWCxJQUFBLElBQUcsSUFBSDthQUNFLFFBQVEsQ0FBQyxNQUFULEdBQWtCLElBQUEsR0FBTyxxREFEM0I7S0FEVztFQUFBLENBSmIsQ0FBQTs7QUFBQSwwQkFRQSxVQUFBLEdBQVcsU0FBQyxJQUFELEdBQUE7QUFDVCxRQUFBLGFBQUE7QUFBQSxJQUFBLElBQUksSUFBSjtBQUNJLE1BQUEsSUFBQSxHQUFXLElBQUEsSUFBQSxDQUFBLENBQVgsQ0FBQTtBQUFBLE1BQ0EsSUFBSSxDQUFDLE9BQUwsQ0FBYSxJQUFJLENBQUMsT0FBTCxDQUFBLENBQUEsR0FBaUIsQ0FBQyxJQUFBLEdBQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBakIsR0FBc0IsSUFBdkIsQ0FBOUIsQ0FEQSxDQUFBO0FBQUEsTUFFQSxPQUFBLEdBQVUsWUFBQSxHQUFlLElBQUksQ0FBQyxXQUFMLENBQUEsQ0FGekIsQ0FESjtLQUFBLE1BQUE7QUFLSSxNQUFBLE9BQUEsR0FBVSxFQUFWLENBTEo7S0FBQTtXQU9BLFFBUlM7RUFBQSxDQVJYLENBQUE7O0FBQUEsMEJBa0JBLFNBQUEsR0FBVSxTQUFDLE1BQUQsR0FBQTtBQUVSLFFBQUEsY0FBQTtBQUFBLElBQUEsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQWhCLEdBQXlCLENBQTdCO0FBQ0UsTUFBQSxPQUFBLEdBQVUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFoQixDQUF3QixNQUFBLEdBQVMsR0FBakMsQ0FBVixDQUFBO0FBQ0EsTUFBQSxJQUFJLE9BQUEsS0FBVyxDQUFBLENBQWY7QUFDRSxRQUFBLE9BQUEsR0FBVSxPQUFBLEdBQVUsTUFBTSxDQUFDLE1BQWpCLEdBQTBCLENBQXBDLENBQUE7QUFBQSxRQUNBLEtBQUEsR0FBUSxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQWhCLENBQXdCLEdBQXhCLEVBQTZCLE9BQTdCLENBRFIsQ0FBQTtBQUVBLFFBQUEsSUFBbUMsS0FBQSxLQUFTLENBQUEsQ0FBNUM7QUFBQSxVQUFBLEtBQUEsR0FBUSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQXhCLENBQUE7U0FGQTtBQUlBLGVBQU8sUUFBQSxDQUFTLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBaEIsQ0FBMEIsT0FBMUIsRUFBbUMsS0FBbkMsQ0FBVCxDQUFQLENBTEY7T0FGRjtLQUFBO0FBU0EsV0FBTyxNQUFQLENBWFE7RUFBQSxDQWxCVixDQUFBOzt1QkFBQTs7SUFGRixDQUFBOztBQUFBLE1Ba0NNLENBQUMsT0FBUCxHQUFpQixhQWxDakIsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbmNsYXNzIE1hbmFnZUNvb2tpZXNcblxuICBjcmVhdGVDb29raWU6KG5hbWUsIHZhbHVlLCBkYXlzPTApLT5cbiAgICBpZiBuYW1lIHx8IHZhbHVlXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArIEBzZXRFeHBpcmVzKGRheXMpICsgXCI7IHBhdGg9L1wiO1xuXG4gIGRlbGV0ZUNvb2tpZToobmFtZSktPlxuICAgIGlmIG5hbWVcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1uaWw7ZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAxIEdNVDsgcGF0aD0vXCI7XG5cbiAgc2V0RXhwaXJlczooZGF5cyktPlxuICAgIGlmIChkYXlzKVxuICAgICAgICBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XG4gICAgICAgIGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9HTVRTdHJpbmcoKTtcbiAgICBlbHNlXG4gICAgICAgIGV4cGlyZXMgPSBcIlwiO1xuXG4gICAgZXhwaXJlc1xuXG4gIGdldENvb2tpZTooY19uYW1lKSAtPlxuXG4gICAgaWYgKGRvY3VtZW50LmNvb2tpZS5sZW5ndGggPiAwKVxuICAgICAgY19zdGFydCA9IGRvY3VtZW50LmNvb2tpZS5pbmRleE9mKGNfbmFtZSArIFwiPVwiKVxuICAgICAgaWYgKGNfc3RhcnQgIT0gLTEpXG4gICAgICAgIGNfc3RhcnQgPSBjX3N0YXJ0ICsgY19uYW1lLmxlbmd0aCArIDE7XG4gICAgICAgIGNfZW5kID0gZG9jdW1lbnQuY29va2llLmluZGV4T2YoXCI7XCIsIGNfc3RhcnQpXG4gICAgICAgIGNfZW5kID0gZG9jdW1lbnQuY29va2llLmxlbmd0aCBpZiAoY19lbmQgPT0gLTEpXG5cbiAgICAgICAgcmV0dXJuIHVuZXNjYXBlKGRvY3VtZW50LmNvb2tpZS5zdWJzdHJpbmcoY19zdGFydCwgY19lbmQpKVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuXG5cbm1vZHVsZS5leHBvcnRzID0gTWFuYWdlQ29va2llcyJdfQ==
