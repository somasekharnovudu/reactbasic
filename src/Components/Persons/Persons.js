import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{
    constructor(props){
        super(props)

        console.log("[persons.js] inside constructor")
    }
    componentWillMount(){
        console.log("[Persons.js] inside component will mount")
    }
   
    componentDidMount(){
        console.log("[Persons.js] inside component Did mount")
    }
    componentWillReceiveProps(nextprops){
        console.log("[persons.js] in component will recieve props")
        console.log(nextprops);
    }
    componentWillUpdate(nextprops,nextstate){
        console.log("[persons.js] in component will update");
        console.log(nextprops,nextstate);
    }
    componentDidUpdate(){
        console.log("[persons.js] in component did update");
    }

    
    render(){
        console.log("[Persons.js] inside render");

        return(
           this.props.persons.map((person,index)=>{
                return (
                    <Person
                        clicker={()=>{this.props.clicked(index)}}
                        name={person.name}
                        age={person.age}
                        position={index}
                        key={person.age}
                        changer={(event)=>{this.props.changed(event,person.id)}}
                    />
                )
            })
        )
    }
}
    
export default Persons;