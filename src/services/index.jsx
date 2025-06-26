import axios from 'axios';

export async function fetchGitHubData(username, token) {
  try {
    const reposUrl = `https://api.github.com/users/${username}/repos`;
    const headers = {
      Authorization: `token ${token}`,
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