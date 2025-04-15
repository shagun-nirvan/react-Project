export const Contact = () => {
    const handleFormSubmit = (formData)=>{
        console.log(formData.entries());
        
    }
    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>
            <div className="contact-wrapper container">

                <form action={handleFormSubmit}>
                    <input type="text"
                        required
                        autoComplete="false"
                        placeholder="Enter your Name"
                        name="username"
                    />

                    <input type="email"
                        className="form-control"
                        placeholder="Enter your Email"
                        name="email"
                        required
                        autoComplete="false"
                    />

                    <textarea className="form-control"
                        rows={10}
                        placeholder="Enter your Message"
                        name="message"
                        required
                        autoComplete="false"
                    ></textarea>

                    <button type="submit" value="send">Send</button>
                </form>
            </div>
        </section>
    )
}