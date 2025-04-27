import * as React from 'react';

// Define a specific type for the props, extending standard SVG props
interface MelonStemProps extends React.SVGProps<SVGSVGElement> {
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

const MelonStem: React.ForwardRefRenderFunction<SVGSVGElement, MelonStemProps> = (
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
      <g dangerouslySetInnerHTML={{ __html: `<rect x="14" y="10" width="1" height="1" fill="#68a83e"/><rect x="15" y="10" width="1" height="1" fill="#68a83e"/><rect x="14" y="11" width="1" height="1" fill="#68a83e"/><rect x="15" y="11" width="1" height="1" fill="#68a83e"/><rect x="14" y="12" width="1" height="1" fill="#92c162"/><rect x="15" y="12" width="1" height="1" fill="#92c162"/><rect x="16" y="12" width="1" height="1" fill="#46861c"/><rect x="17" y="12" width="1" height="1" fill="#46861c"/><rect x="14" y="13" width="1" height="1" fill="#7ebe54"/><rect x="15" y="13" width="1" height="1" fill="#7ebe54"/><rect x="16" y="13" width="1" height="1" fill="#68a83e"/><rect x="17" y="13" width="1" height="1" fill="#68a83e"/><rect x="14" y="14" width="1" height="1" fill="#7ebe54"/><rect x="15" y="14" width="1" height="1" fill="#7ebe54"/><rect x="16" y="14" width="1" height="1" fill="#68a83e"/><rect x="17" y="14" width="1" height="1" fill="#68a83e"/><rect x="16" y="15" width="1" height="1" fill="#7ebe54"/><rect x="17" y="15" width="1" height="1" fill="#7ebe54"/><rect x="16" y="16" width="1" height="1" fill="#7ebe54"/><rect x="17" y="16" width="1" height="1" fill="#7ebe54"/><rect x="16" y="17" width="1" height="1" fill="#7ebe54"/><rect x="17" y="17" width="1" height="1" fill="#7ebe54"/><rect x="18" y="17" width="1" height="1" fill="#68a83e"/><rect x="16" y="18" width="1" height="1" fill="#7ebe54"/><rect x="17" y="18" width="1" height="1" fill="#7ebe54"/><rect x="18" y="18" width="1" height="1" fill="#68a83e"/><rect x="13" y="19" width="1" height="1" fill="#92c162"/><rect x="16" y="19" width="1" height="1" fill="#7ebe54"/><rect x="17" y="19" width="1" height="1" fill="#7ebe54"/><rect x="18" y="19" width="1" height="1" fill="#68a83e"/><rect x="13" y="20" width="1" height="1" fill="#7ebe54"/><rect x="14" y="20" width="1" height="1" fill="#74b44a"/><rect x="15" y="20" width="1" height="1" fill="#74b44a"/><rect x="16" y="20" width="1" height="1" fill="#92c162"/><rect x="17" y="20" width="1" height="1" fill="#92c162"/><rect x="18" y="20" width="1" height="1" fill="#77b74d"/><rect x="13" y="21" width="1" height="1" fill="#7ebe54"/><rect x="14" y="21" width="1" height="1" fill="#74b44a"/><rect x="15" y="21" width="1" height="1" fill="#74b44a"/><rect x="16" y="21" width="1" height="1" fill="#92c162"/><rect x="17" y="21" width="1" height="1" fill="#92c162"/><rect x="18" y="21" width="1" height="1" fill="#77b74d"/><rect x="14" y="22" width="1" height="1" fill="#46861c"/><rect x="15" y="22" width="1" height="1" fill="#46861c"/><rect x="16" y="22" width="1" height="1" fill="#92c162"/><rect x="17" y="22" width="1" height="1" fill="#92c162"/><rect x="18" y="22" width="1" height="1" fill="#92c162"/><rect x="21" y="22" width="1" height="1" fill="#92c162"/><rect x="22" y="22" width="1" height="1" fill="#92c162"/><rect x="14" y="23" width="1" height="1" fill="#46861c"/><rect x="15" y="23" width="1" height="1" fill="#46861c"/><rect x="16" y="23" width="1" height="1" fill="#92c162"/><rect x="17" y="23" width="1" height="1" fill="#92c162"/><rect x="18" y="23" width="1" height="1" fill="#92c162"/><rect x="21" y="23" width="1" height="1" fill="#92c162"/><rect x="22" y="23" width="1" height="1" fill="#92c162"/><rect x="16" y="24" width="1" height="1" fill="#a4d374"/><rect x="17" y="24" width="1" height="1" fill="#a4d374"/><rect x="18" y="24" width="1" height="1" fill="#77b74d"/><rect x="19" y="24" width="1" height="1" fill="#92c162"/><rect x="20" y="24" width="1" height="1" fill="#92c162"/><rect x="16" y="25" width="1" height="1" fill="#a4d374"/><rect x="17" y="25" width="1" height="1" fill="#a4d374"/><rect x="18" y="25" width="1" height="1" fill="#77b74d"/><rect x="19" y="25" width="1" height="1" fill="#7ebe54"/><rect x="20" y="25" width="1" height="1" fill="#7ebe54"/><rect x="16" y="26" width="1" height="1" fill="#a4d374"/><rect x="17" y="26" width="1" height="1" fill="#a4d374"/><rect x="18" y="26" width="1" height="1" fill="#77b74d"/><rect x="19" y="26" width="1" height="1" fill="#7ebe54"/><rect x="20" y="26" width="1" height="1" fill="#7ebe54"/><rect x="16" y="27" width="1" height="1" fill="#92c162"/><rect x="17" y="27" width="1" height="1" fill="#92c162"/><rect x="18" y="27" width="1" height="1" fill="#77b74d"/><rect x="16" y="28" width="1" height="1" fill="#92c162"/><rect x="17" y="28" width="1" height="1" fill="#92c162"/><rect x="18" y="28" width="1" height="1" fill="#77b74d"/><rect x="16" y="29" width="1" height="1" fill="#7ebe54"/><rect x="17" y="29" width="1" height="1" fill="#7ebe54"/><rect x="18" y="29" width="1" height="1" fill="#77b74d"/><rect x="16" y="30" width="1" height="1" fill="#7ebe54"/><rect x="17" y="30" width="1" height="1" fill="#7ebe54"/><rect x="18" y="30" width="1" height="1" fill="#77b74d"/><rect x="16" y="31" width="1" height="1" fill="#7ebe54"/><rect x="17" y="31" width="1" height="1" fill="#7ebe54"/><rect x="18" y="31" width="1" height="1" fill="#77b74d"/>` }} />
    </svg>
  );
};

// Use React.forwardRef to pass the ref down to the SVG element
const ForwardRefComponent = React.forwardRef(MelonStem);

// Add display name for better debugging in React DevTools
ForwardRefComponent.displayName = 'MelonStem';

export default ForwardRefComponent;
