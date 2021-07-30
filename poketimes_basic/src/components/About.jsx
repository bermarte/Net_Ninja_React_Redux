import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolore illo odio, excepturi officiis ducimus rem vero aspernatur laborum sint pariatur dolor praesentium deserunt fugiat cupiditate velit facere doloribus ratione.</p>
        </div>
    )
}

export default Rainbow(About);