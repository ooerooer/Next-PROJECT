import { $apiAuth } from "@/api/interceptors"
import { IAuthPromise, ISignInPayload, ISignUpPayload,} from "../../types/auth.types"
import { cookies } from "next/headers"


export const singUp =async(data:ISignUpPayload):Promise<IAuthPromise | undefined>=>{
    try{
        const response = await $apiAuth.post("/auth/signUp", data)
        console.log(response);
        return response?.data
    }catch(error){
        console.log(error, "error")
    }
}

export const singIn =async(data: ISignInPayload): Promise<IAuthPromise | undefined>=>{
    try{
        const response = await $apiAuth.post("/auth/signIn", data)
        cookies().set("token", response?.data?.tokens?.access_token)
        return response?.data
    }catch(error){
        console.log(error, "error")
    }
}