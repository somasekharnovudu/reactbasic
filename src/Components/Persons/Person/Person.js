import React, {Component} from 'react';
import './Person.css';
import cls from './Person.css';
import Aux from '../../../hoc/Auxillary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component{
    constructor(props){
        super(props)

        console.log("[person.js] inside constructor")
    }

    componentWillMount(){
        console.log("[Person.js] inside component will mount")
    }
   
    componentDidMount(){
        console.log("[Person.js] inside component Did mount");
        if(this.props.position===0){
            this.inputElement.focus();
        }   
    }

    render(){
        console.log("[Person.js] inside render")
        return(
            <Aux>
                <p onClick={this.props.clicker}>I am {this.props.name} and i am {this.props.age}</p>
                <input 
                    ref={(inp)=>{ this.inputElement=inp }}
                    type="text" 
                    onChange={this.props.changer} 
                    className="Mychanger" 
                    value={this.props.name}/>


            </Aux>
        )
    }
}
Person.propTypes={
    clicker:PropTypes.func ,
    changer: PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number,
};

export default withClass(Person,cls.Person);