// src/components/maintenance-page/maintenance-page.js

import "./maintenance-page.scss"

class MaintenancePage {
    constructor() {
        this._componentName = this.constructor.name
    }

    view(vnode) {
        return m(".maintenance",
            m("article", [
                m("h1", "We'll be back soon!"),
                m("div", [
                    m("p", m.trust("Sorry for the inconvenience but we're performing some maintenance at the moment. If you need to you can always <a href=\"mailto:#\">contact us</a>, otherwise we'll be back online shortly!")),
                    m("p", "- The Team"),
                ]),
            ])
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

export default MaintenancePage
