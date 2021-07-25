import { RepoData } from "src/app/app.component.models";

export class CommonUtils {
    public static getRepoData(data: any): RepoData[] {
        return data.map((repo: any) => {
            const owner = repo.owner;
            return {
                full_name: repo.full_name,
                avatar_url: owner.avatar_url,
                html_url: repo.html_url,
                description: repo.description,
                forks_count: repo.forks_count,
                open_issues_count: repo.open_issues_count,
                pulls_url: repo.pulls_url
            }
        });
    }
}