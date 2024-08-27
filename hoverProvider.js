const vscode = require('vscode');
const path = require('path');

class SVGHoverProvider {
  provideHover(document, position, token) {
    const fileName = document.fileName;
    const fileExtension = path.extname(fileName);

    if (fileExtension.toLowerCase() === '.svg') {
      const svgContent = document.getText();
      const encodedContent = encodeURIComponent(svgContent);
      const imagePreview = `<img src="data:image/svg+xml,${encodedContent}" style="max-width: 300px; max-height: 300px;" />`;

      return new vscode.Hover(imagePreview);
    }

    return null;
  }
}

module.exports = SVGHoverProvider;
