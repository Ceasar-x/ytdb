import React, { useState, useEffect } from "react";
import "./Spinner.css";

const Spinner = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate 2 seconds of loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div id="spinner" className="spinner-wrapper">
          <div className="spinner">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {!loading && <div className="content">{children}</div>}
    </>
  );
};

export default Spinner;
