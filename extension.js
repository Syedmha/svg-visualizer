const vscode = require('vscode');
const SVGHoverProvider = require('./hoverProvider');

function activate(context) {
  const hoverProvider = vscode.languages.registerHoverProvider('svg', new SVGHoverProvider());
  context.subscriptions.push(hoverProvider);
}


function deactivate() {}

module.exports = {
  activate,
  deactivate
};
