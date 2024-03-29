import React from 'react';

/** Site-wide footer for Flüffy Data Enterprises, Inc. */

function Footer() {
  return (
    <footer className="App-footer mt-5 text-muted">
      <small>
        Prødutïv is copyright ©{new Date().getFullYear()} by Flüffy Data Enterprises, Inc.
      </small>
    </footer>
  );
}

export default Footer;