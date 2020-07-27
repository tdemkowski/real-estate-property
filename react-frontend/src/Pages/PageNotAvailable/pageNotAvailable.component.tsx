import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import './pageNotAvailable.styles.scss'

const PageNotAvailable = () => {
    useEffect(() => {
        document.title = "Page Not Found"
    })

    return (
        <div className="pageNotFound">
            <h1>Sorry, this page isn't available.</h1>
            <p>The link you followed may be broken, or the page may have been removed.</p>
            <Link to="/" style={{ textDecoration: 'none' }}>
                        <p>Go back to Instagram.</p>
            </Link>
        </div>
    )
}

export default PageNotAvailable