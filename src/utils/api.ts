const profileURL = `https://api.github.com/users/wander-alves`;
const repositorySearchIssuesURL = `https://api.github.com/search/issues`;
const repositoryIssuesURL = `https://api.github.com/repos/wander-alves/rocketseat-github-posts/issues`;

async function getProfileInfo () {
  const response = await fetch(profileURL)
  const body = await response.json();

  return body;
}

async function getRepositoryIssues(query: string = "") {
  const requestURL = new URL(repositorySearchIssuesURL);
  requestURL.searchParams.set('q', `${query} repo:wander-alves/rocketseat-github-posts`);

  const response = await fetch(requestURL);
  const body = await response.json();

  return body.items;
}

async function getRepositoryIssueDetails(id: string) {
  const response = await fetch(`${repositoryIssuesURL}/${id}`);
  const body = await response.json();

  return body;
}

export { getProfileInfo, getRepositoryIssues, getRepositoryIssueDetails}