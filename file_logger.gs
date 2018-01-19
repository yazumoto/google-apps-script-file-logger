function logging(callback){
  LOG_FILE_NAME = 'script.log'
  function getOrCreateLogFile() {
    var scriptId = ScriptApp.getScriptId();
    var file = DriveApp.getFileById(scriptId);
    var parent = file.getParents().next();

    // Check log file existance
    var files = DriveApp.searchFiles('"'+parent.getId()+'" in parents');
    while(files.hasNext()){
      var file = files.next();
      if(file.getName() == LOG_FILE_NAME){
        return DocumentApp.openById(file.getId());
      }
    }
    // Log file doesn't exist
    var doc = DocumentApp.create(LOG_FILE_NAME);
    var docFile = DriveApp.getFileById( doc.getId() );
    parent.addFile( docFile );
    DriveApp.getRootFolder().removeFile(docFile);
    return doc;
  }

  try {
    callback();
  } finally {
    // Write logs
    getOrCreateLogFile().getBody().appendParagraph(Logger.getLog());
  }
}
