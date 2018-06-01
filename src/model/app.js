// src/model/app.js

class App {
    constructor() {
        this._modelName = this.constructor.name
    }

    dispatch(action, args) {
        this[action].apply(this, args || [])
    }
}

window.appState = new App()
