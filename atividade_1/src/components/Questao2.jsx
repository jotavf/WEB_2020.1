import React,{Component} from 'react';

class Name extends Component {
    render(){
        return(
            <div className="Name">
                <h1>João Victor Falcão</h1>
            </div>
        )
    }
}

class Course extends Component {
    render() {
        return(
            <div>
                <h1>Eng. de Software</h1>
            </div>
        );
    }
}

class City extends Component {
    render() {
        return(
            <div>
                <h1>Quixeramobim</h1>
            </div>
        );
    }
}

export {Name, Course, City};