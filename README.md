# gitUserInfo
a Single Page Application which displays information about repositories related to a GitHub user.

There are three tabs in the page. 
1 will show github repos related to user as of now hardcoded as `fabpot`
2 will show star marked repos by the user `fabpot`
3 will show open pull request by user(as of now `weierophinney` because there was none for `fabpot`) in his(user `fabpot`) star marked repos.

starred data will get refreshed in every 30 secs.

in case api give auth error please run bellow command
curl -u "USERNAME"" https://api.github.com
https://docs.github.com/en/rest/overview/resources-in-the-rest-api#authentication

for more info about how to run and build project please read githubInfo/README

## possible enhancements 
This project was done just for demo. There could be enhancements some are-
get input user from UI
use ngrx for state management
use multiple modules 
lazy loading or routes for each tab and fetch data only for active tab
may use web sockets instead of interval to refresh data in each 30 secs
error handling in http calls
UX improvements
e2e tests
