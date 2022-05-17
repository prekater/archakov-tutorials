import React from 'react'
import { tabs } from './tabs'

function App() {
    const [activeId, setActiveId] = React.useState(1)
    const handleClick = (id) => {
        setActiveId(id)
    }

    return (
        <div className='app-container'>
            <h1 className='app-title'>FAQ</h1>
            <div className='app-tabs'>
                {
                    tabs.map((tab) => (
                        <div className={activeId === tab.id ? 'tab active' : 'tab'} key={tab.id}>
                            <input id={`tab-${tab.id}`} type='checkbox' name='tabs' />
                            <label htmlFor={`tab-${tab.id}`} onClick={() => handleClick(tab.id)}>{tab.title}</label>
                            <div className='tab-content'>
                                <p>
                                    {tab.description}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default App
