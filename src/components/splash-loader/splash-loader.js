// src/components/splash-loader/splash-loader.js

import './splash-loader.scss';


class SplashLoader {
    constructor() {
        this._componentName = this.constructor.name
    }

    view(/*vnode*/) {
        return m('.holder', [
            m('.preloader', [
                m('div'),
                m('div'),
                m('div'),
                m('div'),
                m('div'),
                m('div'),
                m('div'),
            ]),
        ])
    }

    oncreate({ attrs, state }) {
        if (process.env.NODE_ENV !== "production") {
            let logStateAttrs = {
                attrs: attrs,
                state: state,
            }
            console.log(`Component: ${this._componentName}`, logStateAttrs)
        }
    }
}

export default SplashLoader
