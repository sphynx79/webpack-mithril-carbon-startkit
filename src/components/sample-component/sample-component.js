// src/components/test/test.js

import "./sample-component.scss"
import { Checkbox } from "carbon-components"

class SampleComponent {
    constructor() {
        this._componentName = this.constructor.name
    }

    oninit({ state }) {
        state.count = 0
    }

    view(vnode) {
        return m(".sample-component", [
            m("h1", { class: "title" }, `You click ${vnode.state.count} times`),
            m("button.bx--btn.bx--btn--primary.bx--btn--sm[type='button']",
                {
                    onclick: function() {
                        vnode.state.count++
                    },
                },
                "clicks"
            ),
            m("div.bx--form-item", [m("input.bx--checkbox[id='bx--checkbox'][type='checkbox'][value='green'][name='checkbox']"), m("label.bx--checkbox-label[for='bx--checkbox']", "Checkbox")]),
        ])
    }

    oncreate(vnode) {
        let checkboxInstance = Checkbox.create(vnode.dom.children[2].firstElementChild)
        checkboxInstance.setState('false')
        if (process.env.NODE_ENV !== "production") {
            let logStateAttrs = {
                attrs: vnode.attrs,
                state: vnode.state,
            }
            console.log(`Component: ${this._componentName}`, logStateAttrs)
        }
    }
}

export default SampleComponent
