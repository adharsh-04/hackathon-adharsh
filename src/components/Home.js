import React from 'react'

function Home() {
    return (
        <div className='container bg-light'>
            <h1 className='text-center mt-3 text-primary'>Welcome to React!!!</h1>
            <img src='https://knackforge.com/wp-content/uploads/2022/11/Benefits-of-ReactJS.jpg' alt='' className='m-4 w-25 h-25 d-block mx-auto' />
            <p className='lead fw-2 text-dark'>React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.[8][9] A key advantage of React is that it only rerenders those parts of the page that have changed, avoiding unnecessary rerendering of unchanged DOM elements.React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.[8][9] A key advantage of React is that it only rerenders those parts of the page that have changed, avoiding unnecessary rerendering of unchanged DOM elements.</p>
        </div>
    )
}

export default Home