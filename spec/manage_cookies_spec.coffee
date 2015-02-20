Cookie = require('../lib/manage_cookies.coffee')

describe "Manage Cookies", ->
  beforeEach ->
    @cookies =  new Cookie()

  it 'It should exist', ->
    expect(@cookies).toBeDefined()

  describe "Cookie Creation", ->

    beforeEach ->
      @cookies.createCookie("test", "testing123")

    afterEach ->
      document.cookie = "test=nil;expires=Thu, 01 Jan 1970 00:00:01 GMT"


    it "should set a cookie", ->
      expect(document.cookie).toBeDefined()
      expect(document.cookie).toMatch(/test=testing123/)

  describe "sets Expiry", ->

    it "will return an empty string if none set", ->
      exp = @cookies.setExpires()
      expect(exp).toEqual("")

    it "will return an expires string if days set", ->
      date = new Date();
      date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
      exp = @cookies.setExpires(1)
      expect(exp).toMatch(date.toGMTString())
      expect(exp).toMatch(/expires=/)

  describe "getCookie", ->

    beforeEach ->
      # @cookies.createCookie("new", "new123")
      document.cookie = "newcookie=new123;expires= Thu, 01 Jan 2050 00:00:01 GMT, path=/"

    afterEach ->
      document.cookie = "newcookie=nil;expires=Thu, 01 Jan 1970 00:00:01 GMT"

    it "will return the correct value of the cookie", ->
      c = @cookies.getCookie("newcookie")
      expect(c).toEqual("new123")

    it "will return undefined if the cookie can't be found", ->
      c = @cookies.getCookie("anothercookie")
      expect(c).not.toBeDefined()

    it "will return undefined if the cookie has been removed or expired", ->
      document.cookie = "newcookie=nil;expires=Thu, 01 Jan 1970 00:00:01 GMT"
      cc = @cookies.getCookie("newcookie")
      expect(cc).not.toBeDefined()




