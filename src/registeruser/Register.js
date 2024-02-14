
import "./Register.css";
export default function Register()
{
    return(
        <div className="registerUser">        <h1>Register new User</h1>
        <form action="saveuser" method="post" className="regform">
            <div>
            <input type="text" name="userName" className="regusername" placeholder="enter username"/>
            </div>
            <div>
            <input type="text" name="userEmail" className="regemail" placeholder="enter email"/>
            </div>
            <div>
            <input type="text" name="userPassword" className="regpassword" placeholder="enter passworld"/>
            </div>
            <input type="submit" value="SUBMIT" className="regSubmit"/>
        </form>
        </div>

    );
}