import React from 'react'
import axios from 'axios'
const FileDownload = require('js-file-download');

export default function BottomBar({ tags }) {

    async function generateCode() {
        try {
            const url = 'http://localhost:4000/generate'
            let response = await axios.get(url)
            FileDownload(response.data, 'generate.zip');

        } catch (error) {
            alert('Error: ' + error)
        } 
    }
    return (
        <div className='fixed-bottom p-4' style={{ backgroundColor: '#e9ecef' }}>
            <a className="btn btn-success btn-lg mr-1" href="http://localhost:4000/generate" target="_blank">Generate Code</a>
            <button onClick={() => generateCode()} className="btn btn-primary btn-lg m-l-auto">Deploy API</button>
            
        </div>
    )
}
