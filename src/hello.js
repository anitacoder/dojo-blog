import React from 'react';
let Btime = new Date().toTimeString();


class Helloword extends React.Component{
    render() {
        return (
            <div>
                <h1>Welcome to react <br/> <span className='red'>{Btime}</span></h1>
            </div>
        )
    }

}

export default Helloword;