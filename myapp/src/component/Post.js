import React from 'react'

export default function Post({ postlistchild }) {
    return (
        <>
            <div className='row'>
                {/* {
                    postlistchild.hashtag.map(tagname => <span>{tagname}</span>)
                } */}

                {/* {
                    postlistchild.map((tagnames) => {
                        return (
                            <p>{tagnames}</p>
                        )
                    })
                } */}

                {
                    postlistchild.map(listitem => {
                        return (
                            <>
                                <div className="col-sm-6" key={listitem.id}>
                                    <div className="card mt-4">
                                        <div className="card-body">
                                            <h5 className="card-title">{listitem.title}</h5>
                                            <p className="card-text">{listitem.body}</p>
                                            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>Likes- {listitem.likes}</span>
                                            
                                            {
                                            listitem.tt.map((tagnames) => {
                                                return (
                                                    <span className='badge bg-primary badge-item'>{tagnames}</span>
                                                )
                                            })
                                        }

                                            </div>
                                        
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>
        </>
    )
}
