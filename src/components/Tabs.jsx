import React from 'react'

function Tabs() {
    const tabs = ['All','Open','Completed']
  return (
    <div className="tab-container">
        {
            tabs.map((tab,tabIndex)=>{
               return (
                <button key={tabIndex} className="tab-button">
                    <h4>{tab} <span>(0)</span></h4></button>
               )
            })
        }
    </div>
  )
}

export default Tabs