import React from "react";


const Accordian = ({accordianitem, itemcontent, active, setActive}) => {
    
  return(
    <>
    <div className="row">
        <div className={(active === accordianitem ? "list-group-item col-12 text-left active" : "list-group-item col-12 text-left")}
         onClick={() => setActive(accordianitem)}>
            {accordianitem}
        <span className="float-right lead font-bold">
            {(active === accordianitem ? "-" : "+")}
        </span>
        </div>
        <div className={(active === accordianitem ? "show": "") + " contentitem"}>
            <p className="col-12 text-left bg-white p-3">
             {itemcontent}
             </p>       
        </div>
       
    </div>
    </>
  );
}

export default Accordian;