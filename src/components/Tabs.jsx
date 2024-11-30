import React from 'react'

function Tabs(props) {
    const tabs = ['All','Open','Completed']
    const {todos, selectedTab,setSelectedTab} = props
  return (
    <div className="tab-container">
        {
            tabs.map((tab,tabIndex)=>{
              const numofTask = tab == 'All'?
              todos.length :
              tab === 'Open' ? 
              todos.filter(val => !val.complete).length :
              todos.filter(val => val.complete).length
               return (
                <button 
                onClick={() =>{
                  setSelectedTab(tab)
                }}
                key={tabIndex} className={"tab-button "+(tab == selectedTab? 'tab-selected': "")}>
                    <h4>{tab} <span>({numofTask})</span></h4></button>
               )
            })
        }
        <hr/>
    </div>
  )
}

export default Tabs