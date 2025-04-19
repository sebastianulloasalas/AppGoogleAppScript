function doPost(e) {
  const sheet = SpreadsheetApp.openById('1hClkiMFbPGVbPil86amPOYnq8FuA2wzolAvjiFP-EAM').getSheetByName('Tareas');
  const data = JSON.parse(e.postData.contents);

  const tarea = data.tarea;
  const fecha = data.fecha;
  const date = new Date();

  sheet.appendRow([tarea, fecha, date]);

  return ContentService
    .createTextOutput(JSON.stringify({ message: 'Tarea registrada correctamente.' }))
    .setMimeType(ContentService.MimeType.JSON);
}