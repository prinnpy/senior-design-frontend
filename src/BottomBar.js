import React from 'react'

export default function BottomBar({ tags }) {
    console.log('tags', tags)
    return (
        <div className='fixed-bottom p-4' style={{ backgroundColor: '#e9ecef' }}>
            <button className="btn btn-success btn-lg mr-1">Generate Code</button>
            <button className="btn btn-primary btn-lg m-l-auto">Deploy API</button>
            
        </div>
    )
}
