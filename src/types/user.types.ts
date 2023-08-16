export interface UserProfile {
    id: number;
    username: string;
    name: string
    html_url: string;
    avatar_url: string
    bio: string
    followers: number,
    following: number
  }
  

  export interface UserProfileResponse {
    userInfo: UserProfile | null
    status: number | null
  }
  