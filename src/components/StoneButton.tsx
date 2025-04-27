import * as React from 'react';

// Define a specific type for the props, extending standard SVG props
interface StoneButtonProps extends React.SVGProps<SVGSVGElement> {
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

const StoneButton: React.ForwardRefRenderFunction<SVGSVGElement, StoneButtonProps> = (
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
      <g dangerouslySetInnerHTML={{ __html: `<rect x="13" y="12" width="1" height="1" fill="#747474"/><rect x="14" y="12" width="1" height="1" fill="#747474"/><rect x="15" y="12" width="1" height="1" fill="#8f8f8f"/><rect x="16" y="12" width="1" height="1" fill="#8f8f8f"/><rect x="12" y="13" width="1" height="1" fill="#747474"/><rect x="13" y="13" width="1" height="1" fill="#747474"/><rect x="14" y="13" width="1" height="1" fill="#7f7f7f"/><rect x="15" y="13" width="1" height="1" fill="#747474"/><rect x="16" y="13" width="1" height="1" fill="#747474"/><rect x="17" y="13" width="1" height="1" fill="#7f7f7f"/><rect x="18" y="13" width="1" height="1" fill="#7f7f7f"/><rect x="12" y="14" width="1" height="1" fill="#6a6a6a"/><rect x="13" y="14" width="1" height="1" fill="#6a6a6a"/><rect x="14" y="14" width="1" height="1" fill="#7f7f7f"/><rect x="15" y="14" width="1" height="1" fill="#686868"/><rect x="16" y="14" width="1" height="1" fill="#8f8f8f"/><rect x="17" y="14" width="1" height="1" fill="#686868"/><rect x="18" y="14" width="1" height="1" fill="#747474"/><rect x="19" y="14" width="1" height="1" fill="#7f7f7f"/><rect x="12" y="15" width="1" height="1" fill="#565656"/><rect x="13" y="15" width="1" height="1" fill="#565656"/><rect x="14" y="15" width="1" height="1" fill="#5e5e5e"/><rect x="15" y="15" width="1" height="1" fill="#5e5e5e"/><rect x="16" y="15" width="1" height="1" fill="#7f7f7f"/><rect x="17" y="15" width="1" height="1" fill="#7f7f7f"/><rect x="18" y="15" width="1" height="1" fill="#484848"/><rect x="19" y="15" width="1" height="1" fill="#404040"/><rect x="12" y="16" width="1" height="1" fill="#5e5e5e"/><rect x="13" y="16" width="1" height="1" fill="#565656"/><rect x="14" y="16" width="1" height="1" fill="#565656"/><rect x="15" y="16" width="1" height="1" fill="#4d4d4d"/><rect x="16" y="16" width="1" height="1" fill="#5e5e5e"/><rect x="17" y="16" width="1" height="1" fill="#484848"/><rect x="18" y="16" width="1" height="1" fill="#3b3b3b"/><rect x="19" y="16" width="1" height="1" fill="#3b3b3b"/><rect x="12" y="17" width="1" height="1" fill="#565656"/><rect x="13" y="17" width="1" height="1" fill="#5e5e5e"/><rect x="14" y="17" width="1" height="1" fill="#5e5e5e"/><rect x="15" y="17" width="1" height="1" fill="#4d4d4d"/><rect x="16" y="17" width="1" height="1" fill="#565656"/><rect x="17" y="17" width="1" height="1" fill="#3b3b3b"/><rect x="18" y="17" width="1" height="1" fill="#404040"/><rect x="19" y="17" width="1" height="1" fill="#404040"/><rect x="13" y="18" width="1" height="1" fill="#5e5e5e"/><rect x="14" y="18" width="1" height="1" fill="#4d4d4d"/><rect x="15" y="18" width="1" height="1" fill="#6a6a6a"/><rect x="16" y="18" width="1" height="1" fill="#6a6a6a"/><rect x="17" y="18" width="1" height="1" fill="#404040"/><rect x="18" y="18" width="1" height="1" fill="#404040"/><rect x="19" y="18" width="1" height="1" fill="#343434"/><rect x="15" y="19" width="1" height="1" fill="#5e5e5e"/><rect x="16" y="19" width="1" height="1" fill="#5e5e5e"/><rect x="17" y="19" width="1" height="1" fill="#3b3b3b"/><rect x="18" y="19" width="1" height="1" fill="#404040"/>` }} />
    </svg>
  );
};

// Use React.forwardRef to pass the ref down to the SVG element
const ForwardRefComponent = React.forwardRef(StoneButton);

// Add display name for better debugging in React DevTools
ForwardRefComponent.displayName = 'StoneButton';

export default ForwardRefComponent;
