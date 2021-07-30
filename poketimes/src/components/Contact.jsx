import React from 'react';

const Contact = (props) => {
    console.log(props);
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);
    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolore illo odio, excepturi officiis ducimus rem vero aspernatur laborum sint pariatur dolor praesentium deserunt fugiat cupiditate velit facere doloribus ratione.</p>
        </div>
    )
}

export default Contact;