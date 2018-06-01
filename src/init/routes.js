// src/init/routes.js

import Test from "components/test/test.js"

m.route.prefix("")

m.route(document.getElementById("app"), "/", {
    "/": {
        render: () => {
            return m(Test)
        },
    },
})
