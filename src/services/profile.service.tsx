import { Octokit } from "octokit";
import {  UserProfileResponse } from "../types/user.types";
const octokit = new Octokit({
    auth: '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'
});

const getUserProfile = async (username: string) => {
    let userResponse: UserProfileResponse = {
        userInfo: null,
        status: null,
    }

    try {
        let response = await octokit.request(`GET /users/${username}`, {
            username: 'Eriseldahoxha1',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
        userResponse.userInfo = {
            id: response.data.id,
            username: response.data.login,
            name: response.data.name,
            html_url: response.data.html_url,
            avatar_url: response.data.avatar_url,
            bio: response.data.bio,
            followers: response.data.followers,
            following: response.data.following
        };
        userResponse.status = response.status
    }
    catch (error : any) {
        console.error('Error fetching user profile:', {error});
        userResponse.status = error.status
    }
    return { ...userResponse}

}

export { getUserProfile }