import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useAppContext } from "../../reducers/AppContext";

export default function Llogin() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [submitType, setSubmitType] = React.useState("");
    const { setUser } = useAppContext();

    const loginUser = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/${submitType}`, {
            email: email,
            password: password,
        })
            .then((res) => {
                console.log(res.data);
                setUser({
                    "email": email,
                    "password": password,
                })
            })
            .catch((err) => {
                console.log(err.message);
            })
            window.location.href = "/";
    }



    return <div className='mt-4 pt-4'>
        <h2 className="mt-4 pt-4"
            style={{
                textShadow: "2px 2px 2px green",
                fontWeight: "bolder",
            }}
        >Login / Create Account</h2>
        
        <form onSubmit={loginUser}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="text" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                <br />
                <Button type="submit" className='mt-2' onClick={() => setSubmitType("login")}
                    variant="info"
                >Login</Button>
                <p>or</p>
                <Button
                    variant="success"
                    type="submit" className='mt-2' onClick={() => setSubmitType("signup")}>Create account</Button>
            </div>
        </form>
    </div>;


}
