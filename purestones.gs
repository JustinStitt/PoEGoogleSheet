var f2 = SpreadsheetApp.getActiveSpreadsheet().getRange("F2").getValue();
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
function modifyCell(cellName, increase,amnt) {
  var range = SpreadsheetApp.getActiveSheet().getRange(cellName);
  var toAdd = -amnt;
  if (increase){
    toAdd=amnt;
  }
  range.setValue(range.getValue() + toAdd);
}

function addRun()
{
  modifyCell("H3",false,1);
  modifyCell("H4",false,1);
  modifyCell("H5",false,1);
  modifyCell("H6",false,1);
  modifyCell("H7",false,1);
  modifyCell("E2",true,1);
}
function chaos0()
{

  modifyCell("H3",true,f2);
  
  var h9 = SpreadsheetApp.getActiveSheet().getRange("H9");
  var h10 = SpreadsheetApp.getActiveSheet().getRange("H10");
  h10.setValue(   (h10.getValue() + (f2 * h9.getValue())  ) );
}

function chaos1()
{
  modifyCell("H4",true,f2);
  
  var h9 = SpreadsheetApp.getActiveSheet().getRange("H9");
  var h10 = SpreadsheetApp.getActiveSheet().getRange("H10");
  h10.setValue(   (h10.getValue() + (f2 * h9.getValue())  ) );
}

function chaos2()
{
  modifyCell("H5",true,f2);
  
  var h9 = SpreadsheetApp.getActiveSheet().getRange("H9");
  var h10 = SpreadsheetApp.getActiveSheet().getRange("H10");
  h10.setValue(   (h10.getValue() + (f2 * h9.getValue())  ) );
}

function chaos3()
{
  modifyCell("H6",true,f2);
  
  var h9 = SpreadsheetApp.getActiveSheet().getRange("H9");
  var h10 = SpreadsheetApp.getActiveSheet().getRange("H10");
  h10.setValue(   (h10.getValue() + (f2 * h9.getValue())  ) );
}
function chaos4()
{
  modifyCell("H7",true,f2);
  
  var h9 = SpreadsheetApp.getActiveSheet().getRange("H9");
  var h10 = SpreadsheetApp.getActiveSheet().getRange("H10");
  h10.setValue(   (h10.getValue() + (f2 * h9.getValue())  ) );
}

function addAmulet()
{
  modifyCell("J2",true, 1);
  
  var h9 = SpreadsheetApp.getActiveSheet().getRange("H9");
  var h10 = SpreadsheetApp.getActiveSheet().getRange("H10");
  h10.setValue(h10.getValue() + h9.getValue());
}

function addExalt()
{
  modifyCell("K2",true, 1);
  
  var h9 = SpreadsheetApp.getActiveSheet().getRange("H9");
  var h10 = SpreadsheetApp.getActiveSheet().getRange("H10");
  h10.setValue(h10.getValue() + h9.getValue());
}
function resetNames()
{
  var slots = SpreadsheetApp.getActiveSheet().getRange(3, 7, 5)
  slots.setValue("none");
}
function getSlot(x,y){
  var col = alphabet[x];
  var concat = col + String(y);
  return SpreadsheetApp.getActiveSpreadsheet().getRange(concat);
}
