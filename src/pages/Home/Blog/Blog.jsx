import React from 'react';
import { FaFilePdf } from 'react-icons/fa';
import Pdf from "react-to-pdf";

const ref = React.createRef();


const Blog = () => {
    return (
        <div className='leading-8 bg-orange-300 p-20 mt-20'>
            <Pdf targetRef={ref} filename="chef-looker-blog.pdf">
                {({ toPdf }) => <button onClick={toPdf} className='text-white border-2 border-white flex items-center gap-3 text-xl p-3 rounded hover:bg-orange-600 ml-auto'><FaFilePdf></FaFilePdf> Convert to pdf</button>}
            </Pdf>
            <div ref={ref}>
            <h1 className='text-center text-5xl font-bold mb-20 text-white'>Welcome to the Blog</h1>
                <div className='bg-white p-8 my-10 rounded-xl'>
                    <p className='text-2xl font-semibold mb-5'>1. Difference between uncontrolled and controlled components</p>
                    <p><b>Controlled</b> components in React are those whose state and behavior are managed by the parent component. To modify their state and behavior, these components rely on props that are given down from the parent component. Components that control their own state on an internal level are referred to as <b>uncontrolled</b> components.</p>
                </div>
                <div className='bg-white p-8 my-10 rounded-xl'>
                    <p className='text-2xl font-semibold mb-5'>2. How to validate React props using PropTypes</p>
                    <p>React has some built-in typechecking abilities. To run typechecking on the props for a component, one should assign the special propTypes property. PropTypes exports a range of validators that can be used to make sure the data you receive is valid.</p>
                    <img src="/proptype.jpg" className='my-5 rounded mx-auto' alt="" />
                    <p>In this example, we’re using PropTypes.string. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. For performance reasons, propTypes is only checked in development mode.</p>
                </div>
                <div className='bg-white p-8 my-10 rounded-xl'>
                    <p className='text-2xl font-semibold mb-5'>3. Difference between nodejs and express js</p>
                    <p><b>Node.js</b> is a platform for building the i/o applications which are server-side event-driven and made using JavaScript. <b>Express.js</b> is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.</p>
                </div>
                <div className='bg-white p-8 my-10 rounded-xl'>
                    <p className='text-2xl font-semibold mb-5'>4. What is a custom hook, and why will you create a custom hook?</p>
                    <p>Custom hook is a function which has input and output. Its name starts with <b>use</b> and can be used to call other hooks. Custom hook returns a normal non-jsx data and it can use other hooks as well. When we have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook such as <b>useFetch</b>. <br />
                        Custom Hooks offer the flexibility of sharing logic that wasn't possible in React components before. It can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>

                </div>
            </div>
        </div>
    );
};

export default Blog;