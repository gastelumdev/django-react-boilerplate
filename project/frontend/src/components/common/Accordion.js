import React, { useState } from 'react'

const Accordion = (props) => {
    const [show, setShow] = useState(false);

    return (
        <div className=" mb-5 mt-4" id="accordion">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={() => setShow(!show)}>
                            {props.title}
                        </button>
                    </h5>
                </div>

                <div id="collapseOne" className={`collapse ${show ? 'show' : ''}`} aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion