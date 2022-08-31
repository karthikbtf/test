const fs = require('fs');

console.log(process.env);

const data = `${process.env.JIRA} ${process.env.DESCRIPTION}\n${process.env.DESCRIPTION}`;

fs.writeFile('/tmp/commit-message', data, (err) => {
  process.stderr.write(err);
});
