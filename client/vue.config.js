module.exports = {
  devServer: {
    // from api/states on server 3000
    // http://127.0.0.1:3000/api/states

    proxy:'http://127.0.0.1:3000'
  }
}