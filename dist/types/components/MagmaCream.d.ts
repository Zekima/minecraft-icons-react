import * as React from 'react';
interface MagmaCreamProps extends React.SVGProps<SVGSVGElement> {
    /**
     * Provides a human-readable title for the element that contains it.
     * https://www.w3.org/TR/SVG-access/#Equivalent
     */
    title?: string;
    /**
     * The width of the icon. Defaults to the SVG's intrinsic width.
     */
    width?: string | number;
    /**
     * The height of the icon. Defaults to the SVG's intrinsic height.
     */
    height?: string | number;
}
declare const ForwardRefComponent: React.ForwardRefExoticComponent<Omit<MagmaCreamProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRefComponent;
//# sourceMappingURL=MagmaCream.d.ts.map