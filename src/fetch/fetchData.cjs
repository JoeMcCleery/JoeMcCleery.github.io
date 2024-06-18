const usernames = ["JoeMcCleery", "FearIndigo"];
const dataPath = "/src/data";

async function fetchData({ github, context }) {
  const users = [];
  for (let username of usernames) {
    const user = await github.rest.users.getByUsername({ username });
    console.log(user);
  }
}

module.exports = fetchData;
