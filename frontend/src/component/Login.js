import './Login.css';
export default function Login() {
    return (
        <main>
            <h1 className="tex">Your search for the perfect match ends here!</h1>
            <div className="wrapper">
                <div className="heading">
                    <h1>Login</h1>
                </div>
                <div className="social">
                    <a href="#" className="social-links"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="social-links"><i className="fa-brands fa-google"></i></a>
                </div>
                <form action="login" className="form-group" method="post">
                    <p className="account-heading">or use your account</p>
                    <input type="text" name="username" placeholder="username" className="email" />
                    <input type="password" name="password" placeholder="password" className="passwd" />
                    <a href="#" className="btn btn-forget">Forget your password?</a>
                    <a href="regisiter" className="btn btn-forget" >New User click here for Signup</a>
                    <a href="#"><button className="btn btn-primary" type="submit">log in</button></a>
                </form>
            </div>
        </main>
    );
}