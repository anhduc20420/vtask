import TextInput from "../../../../common/components/Form/TextInput"
import loginLogin from  "../../../../asset/img/login.png"
import './style.css'
import Card from "../../../../common/components/Card"
import { useState } from "react"
import loadingGif from "../../../../asset/img/loading.gif"
import authService from "../../../../common/api/authSerivce"

function LoginForm() {
     const [username,setUsername] = useState("")
     const [password,setPassword] = useState("")
     authService.login(username,password).then((result) => {
          console.log(result)
     })
     const [showLoading,setShowLoading] = useState(false)
     const handleSubmitBtnClick = (e) => {
          e.preventDefault()
          console.log(username,password)
          console.log('Starting login')
          setShowLoading(true);
     }
     
     const handleUsernameChange = (e) => {
          setUsername(e.target.value)
     }

     const handlePasswordChange = (e) => {
          setPassword(e.target.value)
     }
     return(
          <div className={"login-form-container"}>
               <div className ={"login-form"}>
                         <Card>
                    <img src={loginLogin} alt=""/>
                    <form>
                         
                         <TextInput
                         onChange={handleUsernameChange}
                              value={username}
                              type={"text"}
                              placeholder={'Input your username'}
                         />
                         <TextInput
                         onChange={handlePasswordChange}
                         value={password}
                         type={"password"}
                         placeholder={'Input your password'}
                         />
                         <button onClick={handleSubmitBtnClick} type={"submit"}>Login</button>
                         <div>
                         {
                    showLoading && <img style={{marginTop: "20px"}} src={loadingGif} alt=""/>
                  }
                         </div>
                    </form>
                    </Card>
               </div>
          </div>
     
     )
}
export default LoginForm