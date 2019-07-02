// File path to main working directory (modern/automation)
var filePath = File($.filename).parent.parent.fsName;

// Get an array of each file in the source folder
folder = new Folder( filePath + "\\out" );
files_array = folder.getFiles();

$.evalFile(filePath + "\\scripts\\borderify.jsx");

// Run the script on each image in the source folder
for(var n=0;n<files_array.length;n++){
  var file = files_array[n];

  // Ensure the image can be borderify'd, then do it
  if (file.constructor != Folder) {
    borderify(file);
  }
}