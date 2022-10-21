import React from 'react';
import footer from "../../assets/images/footer.png"

const Footer = () => {
    return (
        <div style={
           {background:`url(${footer})`,
           backgroundSize:"cover"}
        } className="mx-12">
            <h3>I'm From Footer</h3>
            <p>Hello this is me and how can i live there with that people please come back to me how can we solve the problem Hello this is me and how can i live there with that people please come back to me how can we solve the problem </p>
        </div>
    );
};

export default Footer;