// src/components/index/index.js

import "./index.scss"
import SampleComponent from "components/sample-component/sample-component.js"

class Index {
    constructor() {
        this._componentName = this.constructor.name
    }

    view(vnode) {
        return m('main',[
            m("div.bx--type-semibold", "Congratulations, you made it!"),
            m("p", "You've spun up your very first Mithril app :-)"),
            m(SampleComponent)
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

export default Index
