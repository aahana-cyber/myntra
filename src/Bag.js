import { useState } from "react"



function Bag({setBag,bag,removeHandler}){
    return(
        <div>
             {bag?.length === 0 ? (  //if bag is empty show me this stuff (: = else)
                <div>
                    <h2>Your shopping bag is empty!</h2>
                    <p>You have no items in your bag. To buy one or more items, click "Add to bag" button next to the item.</p>
                </div>
                ) :(
            <div style={{padding:'40px'}}>
            <div><h1> Items in Your Bag Are</h1></div>
            <div style={{display:'flex',flexDirection:'column',gap:16}}>
                {bag?.map((val,index)=>{
                    console.log("mapped", val)
                    return(
                        <div key={index}>
                            
                            <div style={{display:'flex',alignItems:"center", gap:10}}>
                            <img src={val?.src} style={{width:'120px',height:'100px'}}></img>
                            <button onClick={()=>{
                              removeHandler(val)  
                            }}> Remove from Bag</button>
                            </div>

                            </div>
                    )
                })}
                </div>
            </div>)}
        </div>
    )
}
export default Bag;