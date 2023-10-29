//Write your code here


class API {
  
  url;
  method;
  #secure;

  constructor(url, method = 'GET') {
    this.url = url;
    this.method = method;
   // this.#secure = url.startsWith('https');
  }

  isSecure() {
    return this.url.startsWith("https");
  }

  updateURL(newURL) {
    this.url = newURL;
   // this.#secure = newURL.startsWith('https');
  }
}



//Do not remove this code
module.exports = { API }
