import React from 'react'
import CustomAlert from './components/CustomAlert'

const App = () => {
    return (
        <>
            <h1 className='text-danger text-center shadow my-5 mx-3 py-3 border border-2 border-danger'>
                APP REACT
            </h1>

            <CustomAlert />
        </>
    )
}

export default App