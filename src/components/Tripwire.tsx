import * as React from 'react';

// Define a specific type for the props, extending standard SVG props
interface TripwireProps extends React.SVGProps<SVGSVGElement> {
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

const Tripwire: React.ForwardRefRenderFunction<SVGSVGElement, TripwireProps> = (
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
      <g dangerouslySetInnerHTML={{ __html: `<rect x="17" y="1" width="1" height="1" fill="#a4a4a4"/><rect x="16" y="3" width="1" height="1" fill="#777777"/><rect x="17" y="3" width="1" height="1" fill="#939393"/><rect x="17" y="5" width="1" height="1" fill="#959595"/><rect x="16" y="7" width="1" height="1" fill="#5b5b5b"/><rect x="16" y="9" width="1" height="1" fill="#777777"/><rect x="17" y="9" width="1" height="1" fill="#8f8f8f"/><rect x="16" y="12" width="1" height="1" fill="#5b5b5b"/><rect x="17" y="13" width="1" height="1" fill="#767676"/><rect x="17" y="15" width="1" height="1" fill="#a4a4a4"/><rect x="17" y="17" width="1" height="1" fill="#a4a4a4"/><rect x="16" y="19" width="1" height="1" fill="#777777"/><rect x="17" y="19" width="1" height="1" fill="#939393"/><rect x="17" y="21" width="1" height="1" fill="#959595"/><rect x="16" y="23" width="1" height="1" fill="#5b5b5b"/><rect x="16" y="25" width="1" height="1" fill="#777777"/><rect x="17" y="25" width="1" height="1" fill="#8f8f8f"/><rect x="16" y="28" width="1" height="1" fill="#5b5b5b"/><rect x="17" y="29" width="1" height="1" fill="#767676"/><rect x="17" y="31" width="1" height="1" fill="#a4a4a4"/>` }} />
    </svg>
  );
};

// Use React.forwardRef to pass the ref down to the SVG element
const ForwardRefComponent = React.forwardRef(Tripwire);

// Add display name for better debugging in React DevTools
ForwardRefComponent.displayName = 'Tripwire';

export default ForwardRefComponent;
