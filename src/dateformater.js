import React from "react";


class Dateformater extends React.Component {
    constructor(props){
        super(props);
    }

    format(val){
        const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
        let parsed_Date = new Date(Date.parse(val));
        let formated_Date = parsed_Date.getDate() + "-" + months[parsed_Date.getMonth()] + "-" + parsed_Date.getFullYear()
        return formated_Date;
    }
    render() {
        return (
            <span>{this.format(this.props.value)}</span>
        )
        
    }
}

export default Dateformater;