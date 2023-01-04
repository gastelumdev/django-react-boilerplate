import React from 'react'

const Accordion = (props) => {
    return (
        <div className=" mb-5 mt-5" id="accordion">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            {props.title}
                        </button>
                    </h5>
                </div>

                <div id="collapseOne" className={`collapse ${props.show}`} aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion