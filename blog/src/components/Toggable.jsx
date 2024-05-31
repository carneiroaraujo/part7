import { useState } from "react";
import PropTypes from "prop-types";
function Toggable({ children, buttonLabel }) {
  const [visible, setVisible] = useState(false);
  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };
  return (
    <div>
      <div style={hideWhenVisible} className="button is-normal is-fullwidth">
        <button onClick={() => setVisible(true)}>{buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        {children}
        <button onClick={() => setVisible(false)}>cancel</button>
      </div>
    </div>
  );
}
Toggable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
export default Toggable;
