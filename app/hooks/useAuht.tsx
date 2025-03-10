import { useMutation } from "react-query";
import { AuthService } from "services/AuthService";
import { IAuth } from "components/screens/auth/auth.interface"; // Import IAuth

export const useAuth = () => {
    const registerMutation = useMutation(
        (userData: IAuth) => AuthService.register(userData), // Принимаем данные
        {
            onSuccess: (data, variables, context) => {
                console.log("Register success:", data, variables); // Логируем данные
            },
            onError: (error) => {
                console.error("Register error:", error); // Обрабатываем ошибки
            },
        }
    );

    const authMutation = useMutation(
        (userData: IAuth) => AuthService.auth(userData), // Принимаем данные
        {
            onSuccess: (data, variables, context) => {
                console.log("Auth success:", data, variables); // Логируем данные
            },
             onError: (error) => {
                console.error("Auth error:", error); // Обрабатываем ошибки
            },
        }
    );

    return {
        register: registerMutation,
        auth: authMutation,
    };
};