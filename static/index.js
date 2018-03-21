function post() {
  console.log('Ready to post')
  fetch('http://localhost:3000/cookie', { method: 'post',credentials: 'include', mode: 'cors' })
    .then(res => {
      console.log('Fetch backend server successfully!')
      console.log(getCookie('cookieName'))
      console.log('but can not get localhost:3001 cookie!')
    })
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}