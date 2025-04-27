import * as React from 'react';

// Define a specific type for the props, extending standard SVG props
interface BrownMushroomProps extends React.SVGProps<SVGSVGElement> {
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

const BrownMushroom: React.ForwardRefRenderFunction<SVGSVGElement, BrownMushroomProps> = (
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
      <g dangerouslySetInnerHTML={{ __html: `<rect x="12" y="20" width="1" height="1" fill="#cc9978"/><rect x="13" y="20" width="1" height="1" fill="#cc9978"/><rect x="14" y="20" width="1" height="1" fill="#cc9978"/><rect x="15" y="20" width="1" height="1" fill="#cc9978"/><rect x="16" y="20" width="1" height="1" fill="#cc9978"/><rect x="17" y="20" width="1" height="1" fill="#cc9978"/><rect x="18" y="20" width="1" height="1" fill="#916d55"/><rect x="19" y="20" width="1" height="1" fill="#916d55"/><rect x="12" y="21" width="1" height="1" fill="#cc9978"/><rect x="13" y="21" width="1" height="1" fill="#cc9978"/><rect x="14" y="21" width="1" height="1" fill="#cc9978"/><rect x="15" y="21" width="1" height="1" fill="#cc9978"/><rect x="16" y="21" width="1" height="1" fill="#cc9978"/><rect x="17" y="21" width="1" height="1" fill="#cc9978"/><rect x="18" y="21" width="1" height="1" fill="#916d55"/><rect x="19" y="21" width="1" height="1" fill="#916d55"/><rect x="10" y="22" width="1" height="1" fill="#cc9978"/><rect x="11" y="22" width="1" height="1" fill="#cc9978"/><rect x="12" y="22" width="1" height="1" fill="#cc9978"/><rect x="13" y="22" width="1" height="1" fill="#cc9978"/><rect x="14" y="22" width="1" height="1" fill="#916d55"/><rect x="15" y="22" width="1" height="1" fill="#916d55"/><rect x="16" y="22" width="1" height="1" fill="#916d55"/><rect x="17" y="22" width="1" height="1" fill="#916d55"/><rect x="18" y="22" width="1" height="1" fill="#916d55"/><rect x="19" y="22" width="1" height="1" fill="#916d55"/><rect x="20" y="22" width="1" height="1" fill="#725643"/><rect x="21" y="22" width="1" height="1" fill="#725643"/><rect x="10" y="23" width="1" height="1" fill="#cc9978"/><rect x="11" y="23" width="1" height="1" fill="#cc9978"/><rect x="12" y="23" width="1" height="1" fill="#cc9978"/><rect x="13" y="23" width="1" height="1" fill="#cc9978"/><rect x="14" y="23" width="1" height="1" fill="#916d55"/><rect x="15" y="23" width="1" height="1" fill="#916d55"/><rect x="16" y="23" width="1" height="1" fill="#916d55"/><rect x="17" y="23" width="1" height="1" fill="#916d55"/><rect x="18" y="23" width="1" height="1" fill="#916d55"/><rect x="19" y="23" width="1" height="1" fill="#916d55"/><rect x="20" y="23" width="1" height="1" fill="#725643"/><rect x="21" y="23" width="1" height="1" fill="#725643"/><rect x="10" y="24" width="1" height="1" fill="#916d55"/><rect x="11" y="24" width="1" height="1" fill="#916d55"/><rect x="12" y="24" width="1" height="1" fill="#916d55"/><rect x="13" y="24" width="1" height="1" fill="#916d55"/><rect x="14" y="24" width="1" height="1" fill="#916d55"/><rect x="15" y="24" width="1" height="1" fill="#916d55"/><rect x="16" y="24" width="1" height="1" fill="#916d55"/><rect x="17" y="24" width="1" height="1" fill="#916d55"/><rect x="18" y="24" width="1" height="1" fill="#725643"/><rect x="19" y="24" width="1" height="1" fill="#725643"/><rect x="20" y="24" width="1" height="1" fill="#725643"/><rect x="21" y="24" width="1" height="1" fill="#725643"/><rect x="10" y="25" width="1" height="1" fill="#916d55"/><rect x="11" y="25" width="1" height="1" fill="#916d55"/><rect x="12" y="25" width="1" height="1" fill="#916d55"/><rect x="13" y="25" width="1" height="1" fill="#916d55"/><rect x="14" y="25" width="1" height="1" fill="#916d55"/><rect x="15" y="25" width="1" height="1" fill="#916d55"/><rect x="16" y="25" width="1" height="1" fill="#916d55"/><rect x="17" y="25" width="1" height="1" fill="#916d55"/><rect x="18" y="25" width="1" height="1" fill="#725643"/><rect x="19" y="25" width="1" height="1" fill="#725643"/><rect x="20" y="25" width="1" height="1" fill="#725643"/><rect x="21" y="25" width="1" height="1" fill="#725643"/><rect x="10" y="26" width="1" height="1" fill="#916d55"/><rect x="11" y="26" width="1" height="1" fill="#916d55"/><rect x="12" y="26" width="1" height="1" fill="#725643"/><rect x="13" y="26" width="1" height="1" fill="#725643"/><rect x="14" y="26" width="1" height="1" fill="#725643"/><rect x="15" y="26" width="1" height="1" fill="#725643"/><rect x="16" y="26" width="1" height="1" fill="#725643"/><rect x="17" y="26" width="1" height="1" fill="#725643"/><rect x="18" y="26" width="1" height="1" fill="#725643"/><rect x="19" y="26" width="1" height="1" fill="#725643"/><rect x="20" y="26" width="1" height="1" fill="#725643"/><rect x="21" y="26" width="1" height="1" fill="#725643"/><rect x="10" y="27" width="1" height="1" fill="#916d55"/><rect x="11" y="27" width="1" height="1" fill="#916d55"/><rect x="12" y="27" width="1" height="1" fill="#725643"/><rect x="13" y="27" width="1" height="1" fill="#725643"/><rect x="14" y="27" width="1" height="1" fill="#725643"/><rect x="15" y="27" width="1" height="1" fill="#725643"/><rect x="16" y="27" width="1" height="1" fill="#725643"/><rect x="17" y="27" width="1" height="1" fill="#725643"/><rect x="18" y="27" width="1" height="1" fill="#725643"/><rect x="19" y="27" width="1" height="1" fill="#725643"/><rect x="20" y="27" width="1" height="1" fill="#725643"/><rect x="21" y="27" width="1" height="1" fill="#725643"/><rect x="14" y="28" width="1" height="1" fill="#685b52"/><rect x="15" y="28" width="1" height="1" fill="#685b52"/><rect x="16" y="28" width="1" height="1" fill="#49403a"/><rect x="17" y="28" width="1" height="1" fill="#49403a"/><rect x="14" y="29" width="1" height="1" fill="#685b52"/><rect x="15" y="29" width="1" height="1" fill="#685b52"/><rect x="16" y="29" width="1" height="1" fill="#49403a"/><rect x="17" y="29" width="1" height="1" fill="#49403a"/><rect x="14" y="30" width="1" height="1" fill="#685b52"/><rect x="15" y="30" width="1" height="1" fill="#685b52"/><rect x="16" y="30" width="1" height="1" fill="#49403a"/><rect x="17" y="30" width="1" height="1" fill="#49403a"/><rect x="14" y="31" width="1" height="1" fill="#685b52"/><rect x="15" y="31" width="1" height="1" fill="#685b52"/><rect x="16" y="31" width="1" height="1" fill="#49403a"/><rect x="17" y="31" width="1" height="1" fill="#49403a"/>` }} />
    </svg>
  );
};

// Use React.forwardRef to pass the ref down to the SVG element
const ForwardRefComponent = React.forwardRef(BrownMushroom);

// Add display name for better debugging in React DevTools
ForwardRefComponent.displayName = 'BrownMushroom';

export default ForwardRefComponent;
