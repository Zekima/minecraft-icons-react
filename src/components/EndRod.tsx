import * as React from 'react';

// Define a specific type for the props, extending standard SVG props
interface EndRodProps extends React.SVGProps<SVGSVGElement> {
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

const EndRod: React.ForwardRefRenderFunction<SVGSVGElement, EndRodProps> = (
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
      <g dangerouslySetInnerHTML={{ __html: `<rect x="14" y="7" width="1" height="1" fill="#9a9080"/><rect x="15" y="7" width="1" height="1" fill="#f2e3c9"/><rect x="16" y="7" width="1" height="1" fill="#f2e3c9"/><rect x="17" y="7" width="1" height="1" fill="#696057"/><rect x="14" y="8" width="1" height="1" fill="#9a9080"/><rect x="15" y="8" width="1" height="1" fill="#9a8d80"/><rect x="16" y="8" width="1" height="1" fill="#696357"/><rect x="17" y="8" width="1" height="1" fill="#696057"/><rect x="14" y="9" width="1" height="1" fill="#9c9586"/><rect x="15" y="9" width="1" height="1" fill="#9c9686"/><rect x="16" y="9" width="1" height="1" fill="#6a665b"/><rect x="17" y="9" width="1" height="1" fill="#6a675b"/><rect x="14" y="10" width="1" height="1" fill="#9d9991"/><rect x="15" y="10" width="1" height="1" fill="#9c9686"/><rect x="16" y="10" width="1" height="1" fill="#6b6963"/><rect x="17" y="10" width="1" height="1" fill="#6a675b"/><rect x="14" y="11" width="1" height="1" fill="#9f9b92"/><rect x="15" y="11" width="1" height="1" fill="#9f9d93"/><rect x="16" y="11" width="1" height="1" fill="#6c6a64"/><rect x="17" y="11" width="1" height="1" fill="#6d6b64"/><rect x="14" y="12" width="1" height="1" fill="#9f9d93"/><rect x="15" y="12" width="1" height="1" fill="#9f9f9f"/><rect x="16" y="12" width="1" height="1" fill="#6d6b64"/><rect x="17" y="12" width="1" height="1" fill="#6d6c6d"/><rect x="14" y="13" width="1" height="1" fill="#a0a0a0"/><rect x="15" y="13" width="1" height="1" fill="#9f9f9f"/><rect x="16" y="13" width="1" height="1" fill="#6d6d6d"/><rect x="17" y="13" width="1" height="1" fill="#6d6c6d"/><rect x="14" y="14" width="1" height="1" fill="#a0a0a0"/><rect x="15" y="14" width="1" height="1" fill="#a0a0a0"/><rect x="16" y="14" width="1" height="1" fill="#6e6e6e"/><rect x="17" y="14" width="1" height="1" fill="#6d6d6d"/><rect x="14" y="15" width="1" height="1" fill="#a0a0a0"/><rect x="15" y="15" width="1" height="1" fill="#a0a0a0"/><rect x="16" y="15" width="1" height="1" fill="#6e6e6e"/><rect x="17" y="15" width="1" height="1" fill="#6d6d6d"/><rect x="14" y="16" width="1" height="1" fill="#a09d99"/><rect x="15" y="16" width="1" height="1" fill="#a0a0a0"/><rect x="16" y="16" width="1" height="1" fill="#6e6e6e"/><rect x="17" y="16" width="1" height="1" fill="#6d6d6d"/><rect x="14" y="17" width="1" height="1" fill="#a09d97"/><rect x="15" y="17" width="1" height="1" fill="#a0a0a0"/><rect x="16" y="17" width="1" height="1" fill="#6d6b68"/><rect x="17" y="17" width="1" height="1" fill="#6c6a66"/><rect x="14" y="18" width="1" height="1" fill="#a09d97"/><rect x="15" y="18" width="1" height="1" fill="#9e9c95"/><rect x="16" y="18" width="1" height="1" fill="#6d6b67"/><rect x="17" y="18" width="1" height="1" fill="#6c6a65"/><rect x="14" y="19" width="1" height="1" fill="#9f9b92"/><rect x="15" y="19" width="1" height="1" fill="#9e9b94"/><rect x="16" y="19" width="1" height="1" fill="#6d6b67"/><rect x="17" y="19" width="1" height="1" fill="#6c685c"/><rect x="14" y="20" width="1" height="1" fill="#9e9887"/><rect x="15" y="20" width="1" height="1" fill="#9e9987"/><rect x="16" y="20" width="1" height="1" fill="#6c6a64"/><rect x="17" y="20" width="1" height="1" fill="#6a675b"/><rect x="14" y="21" width="1" height="1" fill="#9e9887"/><rect x="15" y="21" width="1" height="1" fill="#9c9686"/><rect x="16" y="21" width="1" height="1" fill="#6c685c"/><rect x="17" y="21" width="1" height="1" fill="#6a675b"/><rect x="14" y="22" width="1" height="1" fill="#9e9783"/><rect x="15" y="22" width="1" height="1" fill="#9b9481"/><rect x="16" y="22" width="1" height="1" fill="#6c675a"/><rect x="17" y="22" width="1" height="1" fill="#6a6558"/><rect x="13" y="23" width="1" height="1" fill="#a777a7"/><rect x="14" y="23" width="1" height="1" fill="#9a8d80"/><rect x="15" y="23" width="1" height="1" fill="#9a9080"/><rect x="16" y="23" width="1" height="1" fill="#696057"/><rect x="17" y="23" width="1" height="1" fill="#696357"/><rect x="18" y="23" width="1" height="1" fill="#b68bb6"/><rect x="12" y="24" width="1" height="1" fill="#6f506f"/><rect x="13" y="24" width="1" height="1" fill="#6f506f"/><rect x="14" y="24" width="1" height="1" fill="#a979a9"/><rect x="15" y="24" width="1" height="1" fill="#a979a9"/><rect x="16" y="24" width="1" height="1" fill="#b487b4"/><rect x="17" y="24" width="1" height="1" fill="#b487b4"/><rect x="18" y="24" width="1" height="1" fill="#4c364c"/><rect x="19" y="24" width="1" height="1" fill="#4c364c"/><rect x="14" y="25" width="1" height="1" fill="#6f506f"/><rect x="15" y="25" width="1" height="1" fill="#6f506f"/><rect x="16" y="25" width="1" height="1" fill="#4c364c"/><rect x="17" y="25" width="1" height="1" fill="#4c364c"/>` }} />
    </svg>
  );
};

// Use React.forwardRef to pass the ref down to the SVG element
const ForwardRefComponent = React.forwardRef(EndRod);

// Add display name for better debugging in React DevTools
ForwardRefComponent.displayName = 'EndRod';

export default ForwardRefComponent;
