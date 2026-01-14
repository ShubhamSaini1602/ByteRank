function getGitHubUrl() {
    const rootUrl = "https://github.com/login/oauth/authorize";

    const options = {
        client_id: import.meta.env.VITE_GITHUB_CLIENT_ID,
        redirect_uri: "http://localhost:5173/auth/github-callback",
        scope: "read:user user:email", // We ask for Profile AND Email access
    };

    const qs = new URLSearchParams(options);
    return `${rootUrl}?${qs.toString()}`;
}

export default getGitHubUrl;