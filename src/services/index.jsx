import axios from 'axios';

export async function fetchGitHubData() {
  const githubApiUserName = process.env.REACT_APP_GITHUB_API_USERNAME
  const githubApiToken = process.env.REACT_APP_GITHUB_API_TOKEN

  try {
    const reposUrl = `https://api.github.com/users/${githubApiUserName}/repos`;
    const headers = {
      Authorization: `token ${githubApiToken}`,
    };

    // Fetch all repositories
    const { data: repos } = await axios.get(reposUrl, { headers });

    // Fetch languages for each repository
    const languageStats = {};
    for (const repo of repos) {
      const languagesUrl = repo.languages_url;
      const { data: languages } = await axios.get(languagesUrl, { headers });
      for (const [language, count] of Object.entries(languages)) {
        languageStats[language] = (languageStats[language] || 0) + count;
      }
    }

    return languageStats;
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return null;
  }
};