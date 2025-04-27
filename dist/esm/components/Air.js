var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
const Air = (_a, ref) => {
    var { title } = _a, props = __rest(_a, ["title"]);
    return (_jsxs("svg", Object.assign({ ref: ref, version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 32 32", "shape-rendering": "crispEdges" // Inject the original attributes (width, height, viewBox, etc.)
     }, props, { children: [title ? _jsx("title", { children: title }) : null, _jsx("g", { dangerouslySetInnerHTML: { __html: `` } })] })));
};
// Use React.forwardRef to pass the ref down to the SVG element
const ForwardRefComponent = React.forwardRef(Air);
// Add display name for better debugging in React DevTools
ForwardRefComponent.displayName = 'Air';
export default ForwardRefComponent;
//# sourceMappingURL=Air.js.map