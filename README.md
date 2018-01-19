Google Apps Sciprt File Logger
===

File logging library for Google Apps Script.
You can create Log Document File in your script file folder and logging to the file.

## Install

In your Google Apps Script.

Menu > Resource > Library...

Enter `ScriptId` below.

```
1bWIXL3PmJQdgAjvUxY_qxStfTIdIMe7qwIqHq78XXzL3zyyVuhVvhI1S
```

Now you can use `FileLogger` class in your script.

## Usage

In your function, you can just write your code like this.

```
function myFunction() {
  FileLogger.logging(function(){
    // your code here.
    Logger.log('test log');
  });
}
```

=> This will create a Document File name 'script.log' and write text below.

```
Sat Jan 20 01:21:07 JST 2018 INFO: test log
```

`FileLogger.logging` has a callback parameter.
`FileLogger` create `script.log` Document File in a folder script file in if it doesn't exist.
Every `Logger.log` in this callback are written to this log file after your code run.
