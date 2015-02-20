_ = require('lodash')

module.exports = class ManageCookies

  createCookie:(name, value, days=0)->
    unless _.isUndefined(name) || _.isUndefined(value)
      document.cookie = name + "=" + value + @setExpires(days) + "; path=/";

  deleteCookie:(name)->
    unless _.isUndefined(name)
      document.cookie = name + "=nil;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";

  setExpires:(days)->
    if (days)
        date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    else
        expires = "";

    expires

  getCookie:(c_name) ->

    if (document.cookie.length > 0)
      c_start = document.cookie.indexOf(c_name + "=")
      if (c_start != -1)
        c_start = c_start + c_name.length + 1;
        c_end = document.cookie.indexOf(";", c_start)
        c_end = document.cookie.length if (c_end == -1)

        return unescape(document.cookie.substring(c_start, c_end))

    return undefined


