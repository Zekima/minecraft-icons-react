import * as React from 'react';

// Define a specific type for the props, extending standard SVG props
interface WoodenButtonProps extends React.SVGProps<SVGSVGElement> {
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

const WoodenButton: React.ForwardRefRenderFunction<SVGSVGElement, WoodenButtonProps> = (
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
      <g dangerouslySetInnerHTML={{ __html: `<rect x="15" y="12" width="1" height="1" fill="#9f844d"/><rect x="16" y="12" width="1" height="1" fill="#9f844d"/><rect x="17" y="12" width="1" height="1" fill="#695433"/><rect x="18" y="12" width="1" height="1" fill="#695433"/><rect x="13" y="13" width="1" height="1" fill="#bc9862"/><rect x="14" y="13" width="1" height="1" fill="#9f844d"/><rect x="15" y="13" width="1" height="1" fill="#735e39"/><rect x="16" y="13" width="1" height="1" fill="#735e39"/><rect x="17" y="13" width="1" height="1" fill="#b4905a"/><rect x="18" y="13" width="1" height="1" fill="#9f844d"/><rect x="19" y="13" width="1" height="1" fill="#9f844d"/><rect x="12" y="14" width="1" height="1" fill="#bc9862"/><rect x="13" y="14" width="1" height="1" fill="#695433"/><rect x="14" y="14" width="1" height="1" fill="#695433"/><rect x="15" y="14" width="1" height="1" fill="#9f844d"/><rect x="16" y="14" width="1" height="1" fill="#b4905a"/><rect x="17" y="14" width="1" height="1" fill="#9f844d"/><rect x="18" y="14" width="1" height="1" fill="#453921"/><rect x="19" y="14" width="1" height="1" fill="#453921"/><rect x="12" y="15" width="1" height="1" fill="#655431"/><rect x="13" y="15" width="1" height="1" fill="#655431"/><rect x="14" y="15" width="1" height="1" fill="#bc9862"/><rect x="15" y="15" width="1" height="1" fill="#bc9862"/><rect x="16" y="15" width="1" height="1" fill="#52422a"/><rect x="17" y="15" width="1" height="1" fill="#453921"/><rect x="18" y="15" width="1" height="1" fill="#322919"/><rect x="19" y="15" width="1" height="1" fill="#322919"/><rect x="12" y="16" width="1" height="1" fill="#493c24"/><rect x="13" y="16" width="1" height="1" fill="#493c24"/><rect x="14" y="16" width="1" height="1" fill="#655431"/><rect x="15" y="16" width="1" height="1" fill="#52422a"/><rect x="16" y="16" width="1" height="1" fill="#2e2416"/><rect x="17" y="16" width="1" height="1" fill="#322919"/><rect x="18" y="16" width="1" height="1" fill="#322919"/><rect x="19" y="16" width="1" height="1" fill="#4e3f27"/><rect x="12" y="17" width="1" height="1" fill="#78613e"/><rect x="13" y="17" width="1" height="1" fill="#78613e"/><rect x="14" y="17" width="1" height="1" fill="#493c24"/><rect x="15" y="17" width="1" height="1" fill="#2e2416"/><rect x="16" y="17" width="1" height="1" fill="#2e2416"/><rect x="17" y="17" width="1" height="1" fill="#52422a"/><rect x="18" y="17" width="1" height="1" fill="#52422a"/><rect x="19" y="17" width="1" height="1" fill="#453921"/><rect x="12" y="18" width="1" height="1" fill="#735c39"/><rect x="13" y="18" width="1" height="1" fill="#655431"/><rect x="14" y="18" width="1" height="1" fill="#735c39"/><rect x="15" y="18" width="1" height="1" fill="#322919"/><rect x="16" y="18" width="1" height="1" fill="#453921"/><rect x="17" y="18" width="1" height="1" fill="#4e3f27"/><rect x="18" y="18" width="1" height="1" fill="#453921"/><rect x="13" y="19" width="1" height="1" fill="#655431"/><rect x="14" y="19" width="1" height="1" fill="#655431"/><rect x="15" y="19" width="1" height="1" fill="#52422a"/><rect x="16" y="19" width="1" height="1" fill="#4e3f27"/>` }} />
    </svg>
  );
};

// Use React.forwardRef to pass the ref down to the SVG element
const ForwardRefComponent = React.forwardRef(WoodenButton);

// Add display name for better debugging in React DevTools
ForwardRefComponent.displayName = 'WoodenButton';

export default ForwardRefComponent;
