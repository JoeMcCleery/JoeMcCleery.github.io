const usernames = ["JoeMcCleery", "FearIndigo"];

function fetchData({ github, context, core, io }) {
  const users = [];
  usernames.forEach((username) => {
    const user = await github.rest.users.getByUsername({ username });
    console.log(user);
  });
}

module.exports = fetchData;
