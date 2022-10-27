import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

export default function Llogin() {
    //design wonderful, colorful  ui for login page
    //use react-bootstrap
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return <div>
        <h2>Login</h2>
        <form onSubmit={(e) => {
            e.preventDefault();
            axios.post("http://localhost:5000/login", {
                email,
                password,
            });
        }
        }>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="text" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                <br />
                <Button type="submit" className='mt-2'>Login</Button>
            </div>
        </form>
    </div>;


}
