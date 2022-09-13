const cookie = require("cookie");
let auth = {
  authIsOwner: function (request, response) {
    let isOwner = false;
    let cookies = {};
    if (request.headers.cookie) {
      cookies = cookie.parse(request.headers.cookie);
    }
    if (cookies.email === "rantadi@daum.net" && cookies.password == "123456") {
      isOwner = true;
    }
    return isOwner;
  },

  authStatusUI: function (request, response) {
    let isOwner = auth.authIsOwner(request, response);
    let authStatusUI = '<a href="/login">login</a>';
    if (isOwner) {
      authStatusUI = '<a href="/logout_process">logout</a>';
    }
    return authStatusUI;
  },
};

module.exports = auth;
