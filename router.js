import Home from './pages/home.js'

var router = new Navigo(null, true, '#');

export default class RouterHandler {
  constructor () {
    this.makeRoutes()
  }

  makeRoutes() {
    const routes = [
      { path: '/', page: Home },
    ];


    routes.forEach(({path, page}) => {
      router.on(path, () => {
        page(path);
      }).resolve();
    })
  }
}