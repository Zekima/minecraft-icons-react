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
const Tripwire = (_a, ref) => {
    var { title } = _a, props = __rest(_a, ["title"]);
    return (_jsxs("svg", Object.assign({ ref: ref, version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 32 32", "shape-rendering": "crispEdges" // Inject the original attributes (width, height, viewBox, etc.)
     }, props, { children: [title ? _jsx("title", { children: title }) : null, _jsx("g", { dangerouslySetInnerHTML: { __html: `<rect x="17" y="1" width="1" height="1" fill="#a4a4a4"/><rect x="16" y="3" width="1" height="1" fill="#777777"/><rect x="17" y="3" width="1" height="1" fill="#939393"/><rect x="17" y="5" width="1" height="1" fill="#959595"/><rect x="16" y="7" width="1" height="1" fill="#5b5b5b"/><rect x="16" y="9" width="1" height="1" fill="#777777"/><rect x="17" y="9" width="1" height="1" fill="#8f8f8f"/><rect x="16" y="12" width="1" height="1" fill="#5b5b5b"/><rect x="17" y="13" width="1" height="1" fill="#767676"/><rect x="17" y="15" width="1" height="1" fill="#a4a4a4"/><rect x="17" y="17" width="1" height="1" fill="#a4a4a4"/><rect x="16" y="19" width="1" height="1" fill="#777777"/><rect x="17" y="19" width="1" height="1" fill="#939393"/><rect x="17" y="21" width="1" height="1" fill="#959595"/><rect x="16" y="23" width="1" height="1" fill="#5b5b5b"/><rect x="16" y="25" width="1" height="1" fill="#777777"/><rect x="17" y="25" width="1" height="1" fill="#8f8f8f"/><rect x="16" y="28" width="1" height="1" fill="#5b5b5b"/><rect x="17" y="29" width="1" height="1" fill="#767676"/><rect x="17" y="31" width="1" height="1" fill="#a4a4a4"/>` } })] })));
};
// Use React.forwardRef to pass the ref down to the SVG element
const ForwardRefComponent = React.forwardRef(Tripwire);
// Add display name for better debugging in React DevTools
ForwardRefComponent.displayName = 'Tripwire';
export default ForwardRefComponent;
//# sourceMappingURL=Tripwire.js.map