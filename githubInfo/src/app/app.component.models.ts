export interface RepoData {
    pulls_url: string;
    description: string;
    full_name: string;
    avatar_url: string;
    html_url: string;
    forks_count: number;
    open_issues_count: number;   
    id?: number;
    pullsData?: any[];
}

export const DEFAULT_USER = 'fabpot';

export const DEFAULT_USER_FOR_OPEN_PR = 'weierophinney';

export enum TabHeadings{
    userRepos = 'User Repos',
    starRepos ='Star Repos',
    openPRs= 'My Open PRs on * repos'
}

export const APP_TITLE = 'githubInfo';

export const LOADING_MSG = 'Loading, please wait......';

export const NO_OPEN_PR_MSG = 'No open PRs';