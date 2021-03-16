import React, { useState } from 'react';
import axios from 'axios'
import { APIURL } from '../shared/config'
import Spinner from 'react-bootstrap/Spinner'
const FileDownload = require('js-file-download');

export default function BottomBar({ tags, apiID }) {

    const [loading, setLoading] = useState(false);


    async function generateCode() {
        try {
            // alert(apiID)
            setLoading(true)
            const url = `${APIURL}/generate/${apiID}`
            let response = await axios.get(url)
            FileDownload(response.data, 'generate.zip');

        } catch (error) {
            alert('Error: ' + error)
        }
        setLoading(false)

    }
    return (
        <div className='fixed-bottom p-4' style={{ backgroundColor: '#e9ecef' }}>
            <button onClick={() => generateCode()} className="btn btn-success btn-lg mr-2 m-l-auto d-flex justify-content-center align-items-center">
                {loading &&
                    <Spinner animation="border" variant="light" className="mr-2" />
                }

                Generate API</button>

            {/* <button onClick={() => generateCode()} className="btn btn-primary btn-lg m-l-auto">Deploy API</button> */}

        </div>
    )
}
