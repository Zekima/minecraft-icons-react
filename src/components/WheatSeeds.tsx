import * as React from 'react';

// Define a specific type for the props, extending standard SVG props
interface WheatSeedsProps extends React.SVGProps<SVGSVGElement> {
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

const WheatSeeds: React.ForwardRefRenderFunction<SVGSVGElement, WheatSeedsProps> = (
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
      <g dangerouslySetInnerHTML={{ __html: `<rect x="10" y="8" width="1" height="1" fill="#00e210"/><rect x="11" y="8" width="1" height="1" fill="#00e210"/><rect x="22" y="8" width="1" height="1" fill="#00e210"/><rect x="23" y="8" width="1" height="1" fill="#00e210"/><rect x="10" y="9" width="1" height="1" fill="#00e210"/><rect x="11" y="9" width="1" height="1" fill="#00e210"/><rect x="22" y="9" width="1" height="1" fill="#00e210"/><rect x="23" y="9" width="1" height="1" fill="#00e210"/><rect x="10" y="10" width="1" height="1" fill="#69b038"/><rect x="11" y="10" width="1" height="1" fill="#69b038"/><rect x="24" y="10" width="1" height="1" fill="#00e210"/><rect x="25" y="10" width="1" height="1" fill="#00e210"/><rect x="10" y="11" width="1" height="1" fill="#69b038"/><rect x="11" y="11" width="1" height="1" fill="#69b038"/><rect x="24" y="11" width="1" height="1" fill="#00e210"/><rect x="25" y="11" width="1" height="1" fill="#00e210"/><rect x="10" y="12" width="1" height="1" fill="#2e430c"/><rect x="11" y="12" width="1" height="1" fill="#2e430c"/><rect x="24" y="12" width="1" height="1" fill="#69b038"/><rect x="25" y="12" width="1" height="1" fill="#69b038"/><rect x="26" y="12" width="1" height="1" fill="#69b038"/><rect x="27" y="12" width="1" height="1" fill="#69b038"/><rect x="10" y="13" width="1" height="1" fill="#2e430c"/><rect x="11" y="13" width="1" height="1" fill="#2e430c"/><rect x="24" y="13" width="1" height="1" fill="#69b038"/><rect x="25" y="13" width="1" height="1" fill="#69b038"/><rect x="26" y="13" width="1" height="1" fill="#69b038"/><rect x="27" y="13" width="1" height="1" fill="#69b038"/><rect x="8" y="14" width="1" height="1" fill="#00e210"/><rect x="9" y="14" width="1" height="1" fill="#00e210"/><rect x="16" y="14" width="1" height="1" fill="#69b038"/><rect x="17" y="14" width="1" height="1" fill="#69b038"/><rect x="18" y="14" width="1" height="1" fill="#447224"/><rect x="19" y="14" width="1" height="1" fill="#447224"/><rect x="24" y="14" width="1" height="1" fill="#2e430c"/><rect x="25" y="14" width="1" height="1" fill="#2e430c"/><rect x="26" y="14" width="1" height="1" fill="#2e430c"/><rect x="27" y="14" width="1" height="1" fill="#2e430c"/><rect x="8" y="15" width="1" height="1" fill="#00e210"/><rect x="9" y="15" width="1" height="1" fill="#00e210"/><rect x="16" y="15" width="1" height="1" fill="#69b038"/><rect x="17" y="15" width="1" height="1" fill="#69b038"/><rect x="18" y="15" width="1" height="1" fill="#447224"/><rect x="19" y="15" width="1" height="1" fill="#447224"/><rect x="24" y="15" width="1" height="1" fill="#2e430c"/><rect x="25" y="15" width="1" height="1" fill="#2e430c"/><rect x="26" y="15" width="1" height="1" fill="#2e430c"/><rect x="27" y="15" width="1" height="1" fill="#2e430c"/><rect x="8" y="16" width="1" height="1" fill="#00e210"/><rect x="9" y="16" width="1" height="1" fill="#00e210"/><rect x="12" y="16" width="1" height="1" fill="#acb038"/><rect x="13" y="16" width="1" height="1" fill="#acb038"/><rect x="16" y="16" width="1" height="1" fill="#2e430c"/><rect x="17" y="16" width="1" height="1" fill="#2e430c"/><rect x="18" y="16" width="1" height="1" fill="#2e430c"/><rect x="19" y="16" width="1" height="1" fill="#2e430c"/><rect x="8" y="17" width="1" height="1" fill="#00e210"/><rect x="9" y="17" width="1" height="1" fill="#00e210"/><rect x="12" y="17" width="1" height="1" fill="#acb038"/><rect x="13" y="17" width="1" height="1" fill="#acb038"/><rect x="16" y="17" width="1" height="1" fill="#2e430c"/><rect x="17" y="17" width="1" height="1" fill="#2e430c"/><rect x="18" y="17" width="1" height="1" fill="#2e430c"/><rect x="19" y="17" width="1" height="1" fill="#2e430c"/><rect x="6" y="18" width="1" height="1" fill="#69b038"/><rect x="7" y="18" width="1" height="1" fill="#69b038"/><rect x="8" y="18" width="1" height="1" fill="#447224"/><rect x="9" y="18" width="1" height="1" fill="#447224"/><rect x="12" y="18" width="1" height="1" fill="#2e430c"/><rect x="13" y="18" width="1" height="1" fill="#2e430c"/><rect x="6" y="19" width="1" height="1" fill="#69b038"/><rect x="7" y="19" width="1" height="1" fill="#69b038"/><rect x="8" y="19" width="1" height="1" fill="#447224"/><rect x="9" y="19" width="1" height="1" fill="#447224"/><rect x="12" y="19" width="1" height="1" fill="#2e430c"/><rect x="13" y="19" width="1" height="1" fill="#2e430c"/><rect x="6" y="20" width="1" height="1" fill="#2e430c"/><rect x="7" y="20" width="1" height="1" fill="#2e430c"/><rect x="8" y="20" width="1" height="1" fill="#2e430c"/><rect x="9" y="20" width="1" height="1" fill="#2e430c"/><rect x="16" y="20" width="1" height="1" fill="#00e210"/><rect x="17" y="20" width="1" height="1" fill="#00e210"/><rect x="22" y="20" width="1" height="1" fill="#acb038"/><rect x="23" y="20" width="1" height="1" fill="#acb038"/><rect x="24" y="20" width="1" height="1" fill="#6f7224"/><rect x="25" y="20" width="1" height="1" fill="#6f7224"/><rect x="6" y="21" width="1" height="1" fill="#2e430c"/><rect x="7" y="21" width="1" height="1" fill="#2e430c"/><rect x="8" y="21" width="1" height="1" fill="#2e430c"/><rect x="9" y="21" width="1" height="1" fill="#2e430c"/><rect x="16" y="21" width="1" height="1" fill="#00e210"/><rect x="17" y="21" width="1" height="1" fill="#00e210"/><rect x="22" y="21" width="1" height="1" fill="#acb038"/><rect x="23" y="21" width="1" height="1" fill="#acb038"/><rect x="24" y="21" width="1" height="1" fill="#6f7224"/><rect x="25" y="21" width="1" height="1" fill="#6f7224"/><rect x="14" y="22" width="1" height="1" fill="#69b038"/><rect x="15" y="22" width="1" height="1" fill="#69b038"/><rect x="16" y="22" width="1" height="1" fill="#447224"/><rect x="17" y="22" width="1" height="1" fill="#447224"/><rect x="22" y="22" width="1" height="1" fill="#2e430c"/><rect x="23" y="22" width="1" height="1" fill="#2e430c"/><rect x="24" y="22" width="1" height="1" fill="#2e430c"/><rect x="25" y="22" width="1" height="1" fill="#2e430c"/><rect x="14" y="23" width="1" height="1" fill="#69b038"/><rect x="15" y="23" width="1" height="1" fill="#69b038"/><rect x="16" y="23" width="1" height="1" fill="#447224"/><rect x="17" y="23" width="1" height="1" fill="#447224"/><rect x="22" y="23" width="1" height="1" fill="#2e430c"/><rect x="23" y="23" width="1" height="1" fill="#2e430c"/><rect x="24" y="23" width="1" height="1" fill="#2e430c"/><rect x="25" y="23" width="1" height="1" fill="#2e430c"/><rect x="14" y="24" width="1" height="1" fill="#2e430c"/><rect x="15" y="24" width="1" height="1" fill="#2e430c"/><rect x="16" y="24" width="1" height="1" fill="#2e430c"/><rect x="17" y="24" width="1" height="1" fill="#2e430c"/><rect x="14" y="25" width="1" height="1" fill="#2e430c"/><rect x="15" y="25" width="1" height="1" fill="#2e430c"/><rect x="16" y="25" width="1" height="1" fill="#2e430c"/><rect x="17" y="25" width="1" height="1" fill="#2e430c"/>` }} />
    </svg>
  );
};

// Use React.forwardRef to pass the ref down to the SVG element
const ForwardRefComponent = React.forwardRef(WheatSeeds);

// Add display name for better debugging in React DevTools
ForwardRefComponent.displayName = 'WheatSeeds';

export default ForwardRefComponent;
