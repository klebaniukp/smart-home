import React from 'react';
import Draggable from 'react-draggable';

function App() {
    return (
        <Draggable
            axis='x'
            handle='.handle'
            defaultPosition={{x: 10, y: 0}}
            grid={[25, 25]}
            scale={1}
        >
            <div className='bg-blue-500 text-white p-4 rounded-lg w-1/2'>
                I can be moved
            </div>
        </Draggable>
    );
}

export default App;
