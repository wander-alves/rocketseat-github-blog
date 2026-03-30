const profileURL = `https://api.github.com/users/wander-alves`;
const repositoryIssuesURL = `https://api.github.com/repos/wander-alves/rocketseat-github-posts/issues`;

async function getProfileInfo () {
  const response = await fetch(profileURL)
  const body = await response.json();

  return body;
}

async function getRepositoryIssues() {
  const response = await fetch(repositoryIssuesURL)
  const body = await response.json();

  return body;
}

async function getRepositoryIssueDetails(id: string) {
  const response = await fetch(`${repositoryIssuesURL}/${id}`);
  const body = await response.json();

  return body;
}

export { getProfileInfo, getRepositoryIssues, getRepositoryIssueDetails}