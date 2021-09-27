import React from "react"
import './Panel.css'
const Panel = ({ children, header, footer }) => {
    return (
        <div className='panel-wrapper'>
            <div className='panel-container'>
                <div className='panel-header'>
                    {header}
                </div>
                <div className='panel-body'>
                    {children}
                </div>
                <div className='panel-footer'>
                    {footer}
                </div>
            </div>
        </div>
    )
}
export default Panel