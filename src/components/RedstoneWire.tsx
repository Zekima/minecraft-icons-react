import * as React from 'react';

// Define a specific type for the props, extending standard SVG props
interface RedstoneWireProps extends React.SVGProps<SVGSVGElement> {
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

const RedstoneWire: React.ForwardRefRenderFunction<SVGSVGElement, RedstoneWireProps> = (
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
      <g dangerouslySetInnerHTML={{ __html: `<rect x="8" y="12" width="1" height="1" fill="#af0000"/><rect x="9" y="12" width="1" height="1" fill="#af0000"/><rect x="10" y="12" width="1" height="1" fill="#af0000"/><rect x="11" y="12" width="1" height="1" fill="#af0000"/><rect x="12" y="12" width="1" height="1" fill="#af0000"/><rect x="13" y="12" width="1" height="1" fill="#af0000"/><rect x="8" y="13" width="1" height="1" fill="#af0000"/><rect x="9" y="13" width="1" height="1" fill="#af0000"/><rect x="10" y="13" width="1" height="1" fill="#af0000"/><rect x="11" y="13" width="1" height="1" fill="#af0000"/><rect x="12" y="13" width="1" height="1" fill="#af0000"/><rect x="13" y="13" width="1" height="1" fill="#af0000"/><rect x="0" y="14" width="1" height="1" fill="#d60000"/><rect x="1" y="14" width="1" height="1" fill="#d60000"/><rect x="4" y="14" width="1" height="1" fill="#fd0000"/><rect x="5" y="14" width="1" height="1" fill="#fd0000"/><rect x="6" y="14" width="1" height="1" fill="#af0000"/><rect x="7" y="14" width="1" height="1" fill="#af0000"/><rect x="12" y="14" width="1" height="1" fill="#d60000"/><rect x="13" y="14" width="1" height="1" fill="#d60000"/><rect x="14" y="14" width="1" height="1" fill="#af0000"/><rect x="15" y="14" width="1" height="1" fill="#af0000"/><rect x="16" y="14" width="1" height="1" fill="#fd0000"/><rect x="17" y="14" width="1" height="1" fill="#fd0000"/><rect x="20" y="14" width="1" height="1" fill="#d60000"/><rect x="21" y="14" width="1" height="1" fill="#d60000"/><rect x="24" y="14" width="1" height="1" fill="#fd0000"/><rect x="25" y="14" width="1" height="1" fill="#fd0000"/><rect x="28" y="14" width="1" height="1" fill="#fd0000"/><rect x="29" y="14" width="1" height="1" fill="#fd0000"/><rect x="0" y="15" width="1" height="1" fill="#d60000"/><rect x="1" y="15" width="1" height="1" fill="#d60000"/><rect x="4" y="15" width="1" height="1" fill="#fd0000"/><rect x="5" y="15" width="1" height="1" fill="#fd0000"/><rect x="6" y="15" width="1" height="1" fill="#af0000"/><rect x="7" y="15" width="1" height="1" fill="#af0000"/><rect x="12" y="15" width="1" height="1" fill="#d60000"/><rect x="13" y="15" width="1" height="1" fill="#d60000"/><rect x="14" y="15" width="1" height="1" fill="#af0000"/><rect x="15" y="15" width="1" height="1" fill="#af0000"/><rect x="16" y="15" width="1" height="1" fill="#fd0000"/><rect x="17" y="15" width="1" height="1" fill="#fd0000"/><rect x="20" y="15" width="1" height="1" fill="#d60000"/><rect x="21" y="15" width="1" height="1" fill="#d60000"/><rect x="24" y="15" width="1" height="1" fill="#fd0000"/><rect x="25" y="15" width="1" height="1" fill="#fd0000"/><rect x="28" y="15" width="1" height="1" fill="#fd0000"/><rect x="29" y="15" width="1" height="1" fill="#fd0000"/><rect x="6" y="16" width="1" height="1" fill="#d60000"/><rect x="7" y="16" width="1" height="1" fill="#d60000"/><rect x="8" y="16" width="1" height="1" fill="#d60000"/><rect x="9" y="16" width="1" height="1" fill="#d60000"/><rect x="14" y="16" width="1" height="1" fill="#d60000"/><rect x="15" y="16" width="1" height="1" fill="#d60000"/><rect x="18" y="16" width="1" height="1" fill="#fd0000"/><rect x="19" y="16" width="1" height="1" fill="#fd0000"/><rect x="20" y="16" width="1" height="1" fill="#af0000"/><rect x="21" y="16" width="1" height="1" fill="#af0000"/><rect x="24" y="16" width="1" height="1" fill="#af0000"/><rect x="25" y="16" width="1" height="1" fill="#af0000"/><rect x="6" y="17" width="1" height="1" fill="#d60000"/><rect x="7" y="17" width="1" height="1" fill="#d60000"/><rect x="8" y="17" width="1" height="1" fill="#d60000"/><rect x="9" y="17" width="1" height="1" fill="#d60000"/><rect x="14" y="17" width="1" height="1" fill="#d60000"/><rect x="15" y="17" width="1" height="1" fill="#d60000"/><rect x="18" y="17" width="1" height="1" fill="#fd0000"/><rect x="19" y="17" width="1" height="1" fill="#fd0000"/><rect x="20" y="17" width="1" height="1" fill="#af0000"/><rect x="21" y="17" width="1" height="1" fill="#af0000"/><rect x="24" y="17" width="1" height="1" fill="#af0000"/><rect x="25" y="17" width="1" height="1" fill="#af0000"/><rect x="20" y="18" width="1" height="1" fill="#af0000"/><rect x="21" y="18" width="1" height="1" fill="#af0000"/><rect x="22" y="18" width="1" height="1" fill="#fd0000"/><rect x="23" y="18" width="1" height="1" fill="#fd0000"/><rect x="20" y="19" width="1" height="1" fill="#af0000"/><rect x="21" y="19" width="1" height="1" fill="#af0000"/><rect x="22" y="19" width="1" height="1" fill="#fd0000"/><rect x="23" y="19" width="1" height="1" fill="#fd0000"/>` }} />
    </svg>
  );
};

// Use React.forwardRef to pass the ref down to the SVG element
const ForwardRefComponent = React.forwardRef(RedstoneWire);

// Add display name for better debugging in React DevTools
ForwardRefComponent.displayName = 'RedstoneWire';

export default ForwardRefComponent;
