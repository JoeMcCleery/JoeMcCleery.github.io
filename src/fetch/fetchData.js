#! /usr/bin/env node

import fs from "fs";

const usernames = ["JoeMcCleery", "FearIndigo"];
const dataPath = "./src/data";

function githubFetch(url) {
  return fetch(url, {
    headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
  });
}

async function fetchUser(username) {
  const data = await githubFetch(
    `https://api.github.com/users/${username}`,
  ).then((res) => res.json());
  return data;
}

async function fetchRepos(user) {
  const data = await githubFetch(user.repos_url).then((res) => res.json());
  return data;
}

async function fetchLanguages(repo) {
  const data = await githubFetch(repo.languages_url).then((res) => res.json());
  return data;
}

async function fetchAllData() {
  for (let username of usernames) {
    // Fetch data
    const user = await fetchUser(username);
    const repos = await fetchRepos(user);
    const languages = [];
    for (let repo of repos) {
      let language = await fetchLanguages(repo);
      languages.push(language);
    }

    // Save data
    fs.writeFile(
      `${dataPath}/${username}.json`,
      JSON.stringify({ data: user }),
      (err) => console.log(err),
    );
    fs.writeFile(
      `${dataPath}/${username}-repos.json`,
      JSON.stringify({ data: repos }),
      (err) => console.log(err),
    );
    fs.writeFile(
      `${dataPath}/${username}-languages.json`,
      JSON.stringify({ data: languages }),
      (err) => console.log(err),
    );
  }
}

fetchAllData();
