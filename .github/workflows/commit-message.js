const fs = require('fs');

console.log('ENV', process.env, 'ENVEND');

const data = `${process.env.JIRA} ${process.env.DESCRIPTION}\n${process.env.DESCRIPTION}`;

console.log('DATA', data, 'DATAEND');

fs.writeFile('/tmp/commit-message', data, (err) => {
  process.stderr.write(err);
});
