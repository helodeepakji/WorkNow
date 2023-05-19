import './Contact.css';
export default function Contact() {
    return(
        <div className="contact">
            <h2 className="contact-title">
            Are you want Good Partner? <br></br>
            Let go to find out.
            </h2>
            <form action="" method="post" className="contact-form">
                <label for="name">
                    <span className="input-name">
                    Name:
                    </span>
                    <input type="text" name="name" id="name" className="name" required />
                </label>
                <label for="email">
                    <span className="input-name">
                    Email address:
                    </span>
                    <input type="text" name="email" id="email" className="email" required />
                </label>
                <label for="email">
                    <span className="input-name">
                    Phone Number:
                    </span>
                    <input type="Number" name="number" id="number" className="email" required />
                </label>
                <label for="project-info">
                    <span className="input-name">
                    Tell about your Query:
                    </span>
                    <textarea name="query" id="project-info" className="project-info"></textarea>
                </label>
                <button className="btn send-btn">
                    Send
                </button>
            </form>
        </div>
    );
}