function doPost(e) {
  // Get the active spreadsheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Access the first sheet in the spreadsheet
  var sheet = ss.getSheets()[0];
  
  // Parse form data
  var formData = e.parameter;
  
  // Extract form fields
  var companyName = formData['company'];
  var location = formData['location'];
  var position = formData['position'];
  var appliedDate = formData['appliedDate'];
  var responseDate = formData['responseDate'];
  
  // Append form data to the sheet
  sheet.appendRow([companyName, location, position, appliedDate, responseDate]);
  
  // Return a response
  return ContentService.createTextOutput('Form submission successful!');
}
