import React from 'react'
import { Outlet } from 'react-router-dom'
import './index.scss'
import SideBar from '../SideBar'

const Layout = () => {
    return (
        <div className='App'>
            <SideBar />
            <div className="page">
                <span className="tags top-tags">&lt;body&gt;</span>
                <Outlet />
                <span className="tags bottom-tags">&lt;/body&gt;</span><br />
                <span className="bottom-tag-html">{'</html>'}</span>
            </div>
        </div>
    )
}

export default Layout