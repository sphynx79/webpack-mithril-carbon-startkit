// src/components/test/test.js

import "./test.scss"

class Test {
    constructor() {
        this._componentName = this.constructor.name
    }

    view(vnode) {
        return m(
            "h1",
            {
                class: "title",
            },
            "Mithril StartKit"
        )
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

export default Test
