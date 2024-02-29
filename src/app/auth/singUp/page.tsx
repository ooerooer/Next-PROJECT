import { singUp } from '../../../api-service/auth.service'
import React from 'react'
import { IAuthPromise, ISignUpPayload } from '../../../../types/auth.types'
import { redirect } from 'next/navigation'

interface formData {
    full_name: FormDataEntryValue | null;
    username: FormDataEntryValue | null;
    password: FormDataEntryValue | null;
}

const SingUp = () => {

    const handleSubmit = async (formData: FormData) => {
        "use server"
        let full_name = formData.get("full_name")
        let username = formData.get("username");
        let password = formData.get("password");
        let payload: formData = { full_name, username, password }
        const response: IAuthPromise | undefined = await singUp({ ...payload })
        console.log(response?.tokens, "token")
        redirect("/auth/singIn")
    }

    return (
        <div className='w-[100%] h-[100vh] flex justify-center items-center'>
            <form action={handleSubmit} className='form-control p-[30px] rounded-md bg-white w-[500px] h-[500px]'>

                <h1 className='text-[#182237] text-[30px] text-center'>Sing Up</h1>

                <p className='text-[#182237] mt-5'>full_name</p>
                <input className='w-[100%] h-[45px] text-[#000] border rounded-md p-[10px] shadow-sm mb-5 mt-2 hover:border-[#121826]' type="text" placeholder='full_name' name='full_name' />

                <p className='text-[#182237]'>username</p>
                <input className='w-[100%] h-[45px] text-[#000] border rounded-md p-[10px] shadow-sm mb-5 mt-2 hover:border-[#121826]' type="text" placeholder='username' name='username' />

                <p className='text-[#182237]'>password</p>
                <input className='w-[100%] h-[45px] text-[#000] border rounded-md p-[10px] shadow-sm mt-2 hover:border-[#121826]' type="text" placeholder='password' name='password' />

                {/* <div className='flex items-center gap-[20px]'> */}
                <button className='w-[100%] h-[50px] border-[none] rounded-md shadow-xl text-[#fff] bg-[#182237] mt-7 hover:bg-[#121826]'>sing Up</button>
                {/* <button className='w-[100%] h-[50px] border-[none] rounded-md shadow-xl text-[#fff] bg-[#182237] mt-7 hover:bg-[#121826]'>sing in</button> */}
                {/* </div> */}

            </form>
        </div>
    )
}

export default SingUp