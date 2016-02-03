process.stdin.setEncoding('ASCII');
process.stdin.setRawMode(true);


process.stdin.on('readable', () => {
  var chunk = process.stdin.read();

 if (chunk !== null) {
    decttouch(chunk);

  }