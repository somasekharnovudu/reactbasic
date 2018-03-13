import React from 'react';
import cls from './Cockpit.css';
import Aux from '../../hoc/Auxillary';

const Cockpit=(props)=>{
    let pClass =[];
    let  btnClass=cls.Button;
    
    if(props.data.persons.length<=2){
        
        pClass.push(cls.red)
    }
    if(props.data.persons.length<=1){
        pClass.push(cls.bold)
    }
    if(props.data.isPersonsShow){
        btnClass=[cls.Button,cls.Red].join(" ");
    }

    return(
        <Aux>
            <h1>Hi, I am React app</h1>
            <p className={pClass.join(' ')}>This is really working</p>
            <button className={btnClass} onClick={props.personShower}>
                Toggle Persons
            </button>
        </Aux>
    )
}

export default Cockpit;