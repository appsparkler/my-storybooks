import React from "react";
import { useVariantExtractor } from "@react-bootstrap-5/hooks";

const AlertMain = (props, ref) => {
  const { variant, restProps: propsAfterVariant } = useVariantExtractor(props);
  const {
    children,
    className = "",
    dismissable,
    ...restProps
  } = propsAfterVariant;

  const alertDismissable = React.useMemo(() => {
    if (dismissable) {
      return `alert-dismissible fade show`;
    }
    return "";
  }, [dismissable]);

  const alertVariant = React.useMemo(() => {
    if (variant) return `alert-${variant}`;
    return "";
  }, [variant]);

  return (
    <div
      className={`alert ${alertVariant} ${alertDismissable} ${className}`}
      role="alert"
      {...restProps}
      ref={ref}
    >
      {children}
      {dismissable && (
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      )}
    </div>
  );
};
const Alert = React.forwardRef(AlertMain);

Alert.defaultProps = {
  className: "",
};

Alert.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const AlertLinkMain = ({ children, className, ...restProps }, ref) => (
  <a className={`alert-link ${className}`} ref={ref} {...restProps}>
    {children}
  </a>
);

export const AlertLink = React.forwardRef(AlertLinkMain);
AlertLink.defaultProps = {
  className: "",
};
AlertLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Alert;
