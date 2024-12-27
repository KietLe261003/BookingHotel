import LoginPage from "../Page/ClientPage/AuthPage/LoginPage";
import LogupPage from "../Page/ClientPage/AuthPage/LogupPage";
import RouterLink from "../Until/RouterLink";

export const authRoute=[
    {
        path: RouterLink.Login,
        element: LoginPage
    },
    {
        path: RouterLink.Logup,
        element: LogupPage
    }
]