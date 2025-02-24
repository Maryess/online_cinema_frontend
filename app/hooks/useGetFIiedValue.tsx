import { ChangeEvent, useState } from "react"

export const useGetFiledValue = () => {
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')

    const getEmail = (e:ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)

        console.log(email)
    }

    const getPassword = (e:ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)

        console.log(password)
    }

    return {
        email,
        password,
        getEmail,
        getPassword
    }
}