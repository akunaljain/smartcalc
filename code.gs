// ================================================================
//  ⚡ Fast Amount Add Calculator — Google Apps Script Backend
//  Made by Kunal Jain
// ================================================================

function doGet(e) {
  return HtmlService
    .createHtmlOutputFromFile('index')
    .setTitle('⚡ Fast Amount Add Calculator')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}