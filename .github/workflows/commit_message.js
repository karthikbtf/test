const fs = require('fs');

const data = `${process.env.JIRA} ${process.env.DESCRIPTION}\n${process.env.DESCRIPTION}`;

fs.writeFile('/tmp/commit-message', data, (err) => {
  process.stderr.write(err);
});
