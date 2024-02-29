import React from 'react'
import { singIn } from '@/api-service/auth.service'
import { IAuthPromise, ISignInPayload, } from '../../../../types/auth.types'
import { redirect } from 'next/navigation'

const SingIn = () => {
    const handleSubmit = async (formData: FormData) => {
        "use server"
        let username = formData.get("username")
        let password = formData.get("password")
        let payload: ISignInPayload = ({ username, password })
        const response: IAuthPromise | undefined = await singIn({ ...payload })
        console.log(response?.tokens, "user-response")
        redirect("/dashboard")
    }
    return (
        <div className='w-[100%] h-[100vh] flex justify-center items-center'>
            <form action={handleSubmit} className='form-control p-[30px] rounded-md bg-white w-[500px] h-[400px]'>

                <h1 className='text-[#182237] text-[30px] text-center'>Sing Up</h1>

                <p className='text-[#182237]'>username</p>
                <input className='w-[100%] h-[45px] text-[#000] border rounded-md p-[10px] shadow-sm mb-5 mt-2 hover:border-[#121826]' type="text" placeholder='username' name='username' />
                <p className='text-[#182237]'>password</p>
                <input className='w-[100%] h-[45px] text-[#000] border rounded-md p-[10px] shadow-sm mt-2 hover:border-[#121826]' type="text" placeholder='password' name='password' />

                <button className='w-[100%] h-[50px] border-[none] rounded-md shadow-xl text-[#fff] bg-[#182237] mt-7 hover:bg-[#121826]'>sing Up</button>

            </form>
        </div>
    )
}

export default SingIn