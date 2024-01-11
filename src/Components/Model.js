import { createPortal } from "react-dom";
import { RxCrossCircled } from "react-icons/rx";

const Model = ({ isopen, onclose, children }) => {






    return createPortal(
        <>
            {isopen && (

                <div style={{
                    backdropFilter: "blur(8px)",
                    height: "100vh",
                    width: "100vw",
                    position: "absolute",
                    zIndex: 40,
                    top:0,
                    display:"grid",
                    placeItems:"center"
                }}>

                    <div className=" m-auto p-3 bg-white  " style={{ maxHeight: "350px",
                    minWidth: "80%",
                    zIndex: 50,
                    position: "relative",
                    }}>
                        <div className="d-flex justify-content-end">
                            <RxCrossCircled className="fs-1 " style={{cursor: "pointer"}} onClick={onclose} />
                        </div>
                        {children}
                    </div>

                    
                </div>


            )}
        </>
        , document.getElementById("model-root")
    );
}

export default Model
