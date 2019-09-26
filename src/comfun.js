const obj = {
  // 用于取得cookie中的用户名
  getCookie (cname) {
    var name = cname + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim()
      if (c.indexOf(name) === 0) return c.substring(name.length, c.length)
    }
    return ''
  },
  // 设置cookie，过期时间N天
  setCookie (cname, value, day) {
    var exp = new Date()
    // 1小时过期
    // exp.setTime(exp.getTime() + 60 * 60 * 1000)
    exp.setDate(exp.getDate() + day)
    document.cookie = cname + '=' + escape(value) + ';expires=' + exp.toGMTString() + ';path=/'
  },
  // 删除cookie
  delectCookie (cname) {
    this.setCookie(cname, 1, -1)
  }

}

export default obj
