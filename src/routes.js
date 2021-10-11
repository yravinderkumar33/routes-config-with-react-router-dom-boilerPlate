import { Home } from './Home'
import { Users } from './Users'
import { NestedChild } from './NestedChild'
export default [
    {
        "path": "/users",
        "exact": true,
        "component": Users,
        "children": [],
        "data": {}
    },
    {
        "path": "/",
        "exact": false,
        "component": Home,
        "children": [{
            "path": "/explore",
            "exact": false,
            "component": NestedChild,
        }],
        "data": {}
    }
]