import React from 'react';
import Request from './Request';

const PathsContainer = (props) => {

    const { tags, paths } = props;

    return (
        <div style={{padding: "20px"}}>
            {tags && tags.map(tag => {
                return (
                    <div key={'tag'+tag.name} style={{paddingBottom: "30px", maxWidth: '900px'}}>
                        <h2 style={{fontWeight: "bold"}}>{tag.name}</h2><p>{tag.description}</p>
                        <hr/>
                        {Object.keys(paths).map(path => {
                            if (String(path).includes(String(tag.name))) {

                                return Object.keys(paths[path]).map(req => {
                                    return (<Request
                                        key={'req' + path + req}
                                        path={path}
                                        request={req}
                                        requestSummary={paths[path][req].summary} />
                                    )
                                })
                            }
                        })}
                        
                    </div>
                );
            })}
        </div>
    )
}

export default PathsContainer;