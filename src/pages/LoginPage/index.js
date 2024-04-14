import LoginFooter from "./components/LoginFooter"
import LoginForm from "./components/LoginForm"
import WecomeLogo from "./components/WelcomeLogo"

function LoginPage() {
     return(
          <div>
               <WecomeLogo />
               <LoginForm />
               <LoginFooter />
          </div>
     )
}

export default LoginPage