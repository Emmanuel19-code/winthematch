import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export interface RegisterSuccessResponse {
  data: {
    id: string;
    fullname: string;
    mobile_number: string;
    email: string;
    is_verified: boolean;
    is_active: boolean;
  };
  info: string;
}


export interface ErrorResponse {
  detail: string;
}


export interface UserInfo 
{
    fullname:string,
    mobile_number:string,
    email:string,
    password:string,
    confirm_password:string,
}
export interface UserLogin
{
    email:string,
    password:string
}

export const api = createApi({
    baseQuery:fetchBaseQuery({baseUrl:"https://api.winthematch.vip"}),
    reducerPath:"api",
    tagTypes:[],
    endpoints:(build)=>({
        registerUser:build.mutation<UserInfo>({
            query:(userInfo)=>({
                url:"/api/v1/user/auth/signup",
                method:"POST",
                body:userInfo
            })
        }),
        loginUser:build.mutation({
             query:(userInfo)=>({
                url:"/api/v1/user/auth/login",
                method:"POST",
                body:userInfo
             })
        }),
        sendEmailVerification:build.mutation({
            query:(email)=>({
                url:"api/v1/user/auth/send_verification_email",
                method:"POST",
                body:email
            })
        })
    })
})

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useSendEmailVerificationMutation
} = api;