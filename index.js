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
rts = ManageCookies;
