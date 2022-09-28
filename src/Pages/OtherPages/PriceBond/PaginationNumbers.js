import React from "react";


const Pagination=({postsPerPage,totalPost,paginate})=>{
    const PageNumber=[]

    for(let i=1; i<= Math.ceil(totalPost/postsPerPage);i++){
        PageNumber.push(i);
    }
    return (
        <>
            <div className="pagination">
                <ul>
                    {
                        PageNumber.map(number=>{
                            return (
                                <>
                                    <li key={number} onClick={()=>paginate(number)}>
                                        {number}
                                    </li>
                                </>
                            )
                        })

                    }
                </ul>
            </div>
        </>
    )
}

export default Pagination