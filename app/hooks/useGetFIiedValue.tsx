import { ChangeEvent, useState } from "react";

export const useGetFiledValue = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const getEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const getPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return {
        email,
        password,
        getEmail, // Переименовали для ясности
        getPassword  // Переименовали для ясности
    };
};