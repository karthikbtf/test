const sanitize = (str) => str.replaceAll('"','\\"').replaceAll('$','\\$').replaceAll('!','\\!');

const email = sanitize(process.env.EMAIL);
const description = sanitize(process.env.DESCRIPTION);
const jira = sanitize(process.env.JIRA);

process.stdout.write(`EMAIL=${email}`);
process.stdout.write(`DESCRIPTION=${description}`);
process.stdout.write(`JIRA=${jira}`);
