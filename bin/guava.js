#!/usr/bin/env node

var program = require('commander');
var cp = require('child_process');
var fs = require('fs');
var pj = require('../package.json');
var colors = require('colors');

// set log file names
var errlog = 'err.log',
    outlog = 'out.log',
    finish = 'don.log';

// ##############################################################
// Goal: configure commander options
//
program
  .version(content)
  .description(pj.description)
  .option("-b, --build", "build the development static website", build)
  .option("-d, --deploy", "deploy to Github")
  .option("-p, --production", "build the production static website", production)
  .option("-t, --test", "test the development static website", test)
  .option("-w, --watch", "launch the watch server for development", watch)
  .option("-s, --stop-watch", "stop the watch server", stopWatch)
  .option("-V, --version", "display version number")
  .parse(process.argv);

process.exit(0);

// ##############################################################
// Goal: create splash and version heading.
//
var content = [
  '',
  ' __' + '/######\\'.bold.red + '_____________________________________',
  ' _' + '|#'.bold.red + '______' + '#|'.bold.red + '____________________________________',
  ' _' + '|#'.bold.red + '_________' + '|#'.bold.yellow + '____' + '#|'.bold.yellow + '__' + '/###\\#|'.bold.green + '_' + '\\#'.bold.cyan + '____' + '#/'.bold.cyan + '_' + '/###\\#|'.bold.green + '_',
  ' _' + '|#'.bold.red + '___' + '|###|'.bold.red + '_' + '|#'.bold.yellow + '____' + '#|'.bold.yellow + '_' + '|#'.bold.green + '____' + '#|'.bold.green + '__' + '\\#'.bold.cyan + '__' + '#/'.bold.cyan + '_' + '|#'.bold.green + '____' + '#|'.bold.green + '_',
  ' _' + '|#'.bold.red + '______' + '#|'.bold.red + '_' + '|#'.bold.yellow + '____' + '#|'.bold.yellow + '_' + '|#'.bold.green + '____' + '#|'.bold.green + '___' + '\\##/'.bold.cyan + '__' + '|#'.bold.green + '____' + '#|'.bold.green + '_',
  ' __' + '\\######/'.bold.red + '___' + '\\###/#|'.bold.yellow + '__' + '\\###/#|'.bold.green + '____' + '\\/'.bold.cyan + '____' + '\\###/#|'.bold.green + '_',
  '',
  ' Version: ' + pj.version,
  ''
].join('\n');

// ##############################################################
// Goal: call brunch to build the development static site.
//
function build() {
  console.log('');
  console.log('Building your development static site...'.bold.blue);

  var cmd = 'brunch build';
  // Execute and log the command synchronously.
  execSync(cmd);
  console.log('Development build complete.'.green)
}

// ##############################################################
// Goal: call brunch to build the production static site.
//
function production() {
  console.log('');
  console.log('Building your production static site...'.bold.blue);

  var cmd = 'brunch build --production';
  // Execute and log the command synchronously.
  execSync(cmd);
  console.log('Production build complete.'.green)
}

// ##############################################################
// Goal: initiate sequence of calls to run buster test framework.
//
function test() {
  var cmd = "";
  var myArray = [];

  myArray.length = 0;

  console.log('Launching the testing process...'.bold.blue);

  // Ensure development build has completed.
  build();

  // Initialize the buster testing server.
  console.log('Initialize buster testing server.');
  cmd = './node_modules/.bin/buster-server';
  var bsvr = execSpawn(cmd, myArray);

  // Initialize the phantom testing framework.
  console.log('Initialize phantom headless capture.');
  cmd = "./node_modules/.bin/phantomjs";
  var psvr = execSpawn(cmd, [ './test/phantom.js' ]);

  // Launch the buster test cases.
  console.log('Tests case results...'.cyan);
  cmd = './node_modules/.bin/buster-test';
  execSync(cmd);

  // Clean up the server processes.
  bsvr.kill('SIGTERM');
  psvr.kill('SIGTERM');

  console.log('');
  console.log('Testing complete.'.green)
}

// ##############################################################
// Goal: call brunch server for watching the site for changes..
//
function watch() {
  console.log('');
  console.log('Watching your static site development...'.bold.blue);

  var cmd = 'brunch watch --server';
  // Execute and log the command synchronously.
  wsvr = execSync(cmd);

  console.log('Watch process is running in the background.'.green);
  console.log('To stop the process, run: '.cyan + '"guava.js -s"'.bold.cyan);
}

// ##############################################################
// Goal: Create Pseudo Synchronous execution (until node v.0.12)
//
function execSync(command) {
  cleanLogs();
  var result = "";
  var out = fs.openSync(finish, 'a'),
      outstats = fs.statSync(finish);

  // Run the command in a subshell
  var cproc = cp.exec(command + ' 2>err.log 1>out.log && echo done! > don.log');

  // Block the event loop until the command has executed.
  while ( outstats["size"] == 0 ) {
    outstats = fs.statSync(finish);
    if ( pauseOne() ) {
      fs.writeFileSync(finish, fs.appendFile(errlog, outlog));
    }
  }

  // If output log is empty, return the error log.
  errstats = fs.statSync(outlog);
  if (errstats["size"] == 0) {
    result = fs.readFileSync(errlog);
  } else {
    result = fs.readFileSync(outlog);
  }

  // Delete temporary files.
  cleanLogs();

  process.stdout.write(result);
  return cproc;
}

// ##############################################################
// Goal: Create Pseudo Synchronous background child launcher.
//
function execSpawn(command, params) {
  cleanLogs();
  var out = fs.openSync(outlog, 'a'),
      err = fs.openSync(errlog, 'a'),
      outstats = fs.statSync(outlog),
      errstats = fs.statSync(errlog),
      result = "";

  if ( params.length == 0 ) {
    params.push(command);
    command = 'node';
  }

  // Run the command as a background process
  var cproc = cp.spawn(command, params, {
    stdio: [ 'ignore', out, err ], // piping stdout and stderr to files.
    detached: true
  });


  // Block the event loop until the command has executed.
  while ( outstats["size"] == 0 && errstats["size"] == 0 ) {
    // update the file stats.
    outstats = fs.statSync(outlog);
    errstats = fs.statSync(errlog);
    if ( command !== 'node' ) {
      fs.writeSync(out, 'phantom-server running\n');
    }
  }

  // Read the result
  if (errstats["size"] == 0) {
    result = "(" + cproc.pid + ") -> " + fs.readFileSync(outlog);
  } else {
    result = fs.readFileSync(errlog);
  }
  process.stdout.write(result);

  // Delete temporary files.
  cleanLogs();

  return cproc;
}

function stopWatch() {
  var spid = findPID("brunch watch --server 2");

  if ( spid ) {
    killProc('brunch watch --server');
    console.log('Watch server successfully stopped.'.green);
  } else {
    console.log("Watch process not found.".cyan);
  }
}

function cleanLogs() {
  if ( fs.existsSync(outlog) ) {
    fs.unlinkSync(outlog);
  }
  if ( fs.existsSync(errlog) ) {
    fs.unlinkSync(errlog);
  }
  if ( fs.existsSync(finish) ) {
    fs.unlinkSync(finish);
  }
}

function pauseOne(OptArg) {
  if (typeof OptArg === 'undefined') {
    OptArg = 1;
  }
  var timeout = true;
  var expire = Date.now() + (1000 * OptArg);

  while ( timeout ) {
    if ( Date.now() > expire ) {
      timeout = false;
    }
  }
  return true;
}

function killProc(searchStr) {
  var exec = cp.execFile;

  // Goal: stop any process and associated processes in its process group.
  exec('pkill', [ '-f', searchStr ], function(error, stdout, stderr) {
    if (error) return cb(error);
    cb(null, stdout);
  });
}

function findPID(searchStr) {
  var exec = cp.exec;
  var cmd = 'pgrep -f "' + searchStr + '" > ' + outlog;

  // Launch the process ID search.
  exec(cmd);

  // Pause to ensure log file is ready.
  pauseOne();

  // Capture the process ID from the log by line.
  var myArray = fs.readFileSync(outlog).toString().split("\n");

  // Clean any log files.
  cleanLogs();

  // Ensure real process ID is returned, if any.
  if (myArray[1] !== '') {
    return myArray[0];
  } else {
    return null;
  }
}
