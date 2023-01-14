import React, { useEffect } from "react";

export default function Policy() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.termly.io/embed-policy.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      name="termly-embed"
      data-id="9b818585-6542-461e-95de-f6fbffd5c7df"
      data-type="iframe"
    ></div>
  );
}