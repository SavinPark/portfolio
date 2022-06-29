function Contact() {
    return(
        <section id="contact">
            <h2>CONTACT</h2>
            <form action="MAILTO:savinpark0315@gmail.com" method="post" encType="text/plain">
                <input type="text" name="name" placeholder="Name" autoComplete="off"/>
                <input type="text" name="title" placeholder="Title" autoComplete="off"/>
                <textarea name="message" placeholder="Message" cols="30" rows="12" autoComplete="off"></textarea>
                {/* <input type="text" name="message" placeholder="Message"/> */}
                <button type="submit">SEND</button>
            </form>
            {/* <a href="mailto:savinpark0315@gmail.com">SEND MAIL</a> */}
        </section>
    );
}

export default Contact;