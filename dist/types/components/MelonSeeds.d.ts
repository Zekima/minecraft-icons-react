import * as React from 'react';
interface MelonSeedsProps extends React.SVGProps<SVGSVGElement> {
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
declare const ForwardRefComponent: React.ForwardRefExoticComponent<Omit<MelonSeedsProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default ForwardRefComponent;
//# sourceMappingURL=MelonSeeds.d.ts.map