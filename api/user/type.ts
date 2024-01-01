export interface UserInfo {
  id: number;
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  dateOfBirth: string;
  bio: string;
  profilePictureUrl: string;
  websiteUrl: string;
}

export interface FetchUserInfoReq {
  userId: string;
}

export type FetchUserInfoRes = UserInfo;
