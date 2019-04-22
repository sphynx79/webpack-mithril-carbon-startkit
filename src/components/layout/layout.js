// src/components/layout/layout.js

import "./layout.scss"

class Layout {
    constructor() {
        this._componentName = this.constructor.name
    }

    view(vnode) {
        return m('.layout', vnode.children)
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

export default Layout
