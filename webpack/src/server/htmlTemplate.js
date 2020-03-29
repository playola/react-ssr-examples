/**
 * It returns the html template string.
 * @param {String} title
 * @param {React.Node} body
 */
const htmlTemplate = ({ title, body }) => `
<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="shortcut icon" href="../assets/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="manifest" href="../assets/manifest.json" />
      <title>${title}</title>
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="app">${body}</div>
      <script src="../client/index.js"></script>
    </body>
  </html>
`;

export default htmlTemplate;
