import "./Login.css";
export default function Login()
{
    return(
        <div>
            <h1>Login User</h1>
        
        <form action="saveuser" method="post" className="loginform">
            <div>
            <input type="text" name="userName" className="loginusername" placeholder="enter username"/>
            </div>
            <div>
            <input type="text" name="userPassword" className="loginpassword" placeholder="enter passworld"/>
            </div>
            <input type="submit" value="SUBMIT" className="loginSubmit"/>
        </form>
        </div>
    );
}