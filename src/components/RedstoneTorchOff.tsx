import * as React from 'react';

// Define a specific type for the props, extending standard SVG props
interface RedstoneTorchOffProps extends React.SVGProps<SVGSVGElement> {
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

const RedstoneTorchOff: React.ForwardRefRenderFunction<SVGSVGElement, RedstoneTorchOffProps> = (
  { title, ...props },
  ref
) => {
  return (
    <svg
      ref={ref}
      version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" shape-rendering="crispEdges" // Inject the original attributes (width, height, viewBox, etc.)
      {...props}    // Spread the passed-in props (allows overriding and adding new ones like className)
    >
      {/* Conditionally render the title for accessibility */}
      {title ? <title>{title}</title> : null}
      {/* Inject the inner SVG elements (rects, paths, etc.) */}
      {/* Using dangerouslySetInnerHTML as the content is already valid SVG markup */}
      <g dangerouslySetInnerHTML={{ __html: `<rect x="14" y="12" width="1" height="1" fill="#560000"/><rect x="15" y="12" width="1" height="1" fill="#560000"/><rect x="16" y="12" width="1" height="1" fill="#480000"/><rect x="17" y="12" width="1" height="1" fill="#480000"/><rect x="14" y="13" width="1" height="1" fill="#560000"/><rect x="15" y="13" width="1" height="1" fill="#560000"/><rect x="16" y="13" width="1" height="1" fill="#480000"/><rect x="17" y="13" width="1" height="1" fill="#480000"/><rect x="14" y="14" width="1" height="1" fill="#480000"/><rect x="15" y="14" width="1" height="1" fill="#480000"/><rect x="16" y="14" width="1" height="1" fill="#290000"/><rect x="17" y="14" width="1" height="1" fill="#290000"/><rect x="14" y="15" width="1" height="1" fill="#480000"/><rect x="15" y="15" width="1" height="1" fill="#480000"/><rect x="16" y="15" width="1" height="1" fill="#290000"/><rect x="17" y="15" width="1" height="1" fill="#290000"/><rect x="14" y="16" width="1" height="1" fill="#7c623e"/><rect x="15" y="16" width="1" height="1" fill="#7c623e"/><rect x="16" y="16" width="1" height="1" fill="#4c3d26"/><rect x="17" y="16" width="1" height="1" fill="#4c3d26"/><rect x="14" y="17" width="1" height="1" fill="#7c623e"/><rect x="15" y="17" width="1" height="1" fill="#7c623e"/><rect x="16" y="17" width="1" height="1" fill="#4c3d26"/><rect x="17" y="17" width="1" height="1" fill="#4c3d26"/><rect x="14" y="18" width="1" height="1" fill="#937344"/><rect x="15" y="18" width="1" height="1" fill="#937344"/><rect x="16" y="18" width="1" height="1" fill="#3c2f1c"/><rect x="17" y="18" width="1" height="1" fill="#3c2f1c"/><rect x="14" y="19" width="1" height="1" fill="#937344"/><rect x="15" y="19" width="1" height="1" fill="#937344"/><rect x="16" y="19" width="1" height="1" fill="#3c2f1c"/><rect x="17" y="19" width="1" height="1" fill="#3c2f1c"/><rect x="14" y="20" width="1" height="1" fill="#957546"/><rect x="15" y="20" width="1" height="1" fill="#957546"/><rect x="16" y="20" width="1" height="1" fill="#423522"/><rect x="17" y="20" width="1" height="1" fill="#423522"/><rect x="14" y="21" width="1" height="1" fill="#957546"/><rect x="15" y="21" width="1" height="1" fill="#957546"/><rect x="16" y="21" width="1" height="1" fill="#423522"/><rect x="17" y="21" width="1" height="1" fill="#423522"/><rect x="14" y="22" width="1" height="1" fill="#9f7f50"/><rect x="15" y="22" width="1" height="1" fill="#9f7f50"/><rect x="16" y="22" width="1" height="1" fill="#403320"/><rect x="17" y="22" width="1" height="1" fill="#403320"/><rect x="14" y="23" width="1" height="1" fill="#9f7f50"/><rect x="15" y="23" width="1" height="1" fill="#9f7f50"/><rect x="16" y="23" width="1" height="1" fill="#403320"/><rect x="17" y="23" width="1" height="1" fill="#403320"/><rect x="14" y="24" width="1" height="1" fill="#977748"/><rect x="15" y="24" width="1" height="1" fill="#977748"/><rect x="16" y="24" width="1" height="1" fill="#3c2f1c"/><rect x="17" y="24" width="1" height="1" fill="#3c2f1c"/><rect x="14" y="25" width="1" height="1" fill="#977748"/><rect x="15" y="25" width="1" height="1" fill="#977748"/><rect x="16" y="25" width="1" height="1" fill="#3c2f1c"/><rect x="17" y="25" width="1" height="1" fill="#3c2f1c"/><rect x="14" y="26" width="1" height="1" fill="#675231"/><rect x="15" y="26" width="1" height="1" fill="#675231"/><rect x="16" y="26" width="1" height="1" fill="#3d301d"/><rect x="17" y="26" width="1" height="1" fill="#3d301d"/><rect x="14" y="27" width="1" height="1" fill="#675231"/><rect x="15" y="27" width="1" height="1" fill="#675231"/><rect x="16" y="27" width="1" height="1" fill="#3d301d"/><rect x="17" y="27" width="1" height="1" fill="#3d301d"/><rect x="14" y="28" width="1" height="1" fill="#987849"/><rect x="15" y="28" width="1" height="1" fill="#987849"/><rect x="16" y="28" width="1" height="1" fill="#3b2e1b"/><rect x="17" y="28" width="1" height="1" fill="#3b2e1b"/><rect x="14" y="29" width="1" height="1" fill="#987849"/><rect x="15" y="29" width="1" height="1" fill="#987849"/><rect x="16" y="29" width="1" height="1" fill="#3b2e1b"/><rect x="17" y="29" width="1" height="1" fill="#3b2e1b"/><rect x="14" y="30" width="1" height="1" fill="#675231"/><rect x="15" y="30" width="1" height="1" fill="#675231"/><rect x="16" y="30" width="1" height="1" fill="#372a17"/><rect x="17" y="30" width="1" height="1" fill="#372a17"/><rect x="14" y="31" width="1" height="1" fill="#675231"/><rect x="15" y="31" width="1" height="1" fill="#675231"/><rect x="16" y="31" width="1" height="1" fill="#372a17"/><rect x="17" y="31" width="1" height="1" fill="#372a17"/>` }} />
    </svg>
  );
};

// Use React.forwardRef to pass the ref down to the SVG element
const ForwardRefComponent = React.forwardRef(RedstoneTorchOff);

// Add display name for better debugging in React DevTools
ForwardRefComponent.displayName = 'RedstoneTorchOff';

export default ForwardRefComponent;
