import React,{PureComponent} from 'react';
import cls from "./App.css";
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import Aux from '../hoc/Auxillary';   
import withClass from '../hoc/withClass';

class App extends PureComponent{
    constructor(props){
        super(props)

        console.log("[app.js] constructor");
    }
    
    componentWillMount(){
        console.log("[app.js] inside component will mount")
    }
   
    componentDidMount(){
        console.log("[app.js] inside component Did mount")
    }
    componentWillUpdate(nextprops,nextstate){
        console.log("[app.js] in component will update");
        console.log(nextprops,nextstate);
    }
    componentDidUpdate(){
        console.log("[app.js] in component did update");
    }

    state={
        persons:[
            {id:"app1",name:"Max",age:25},
            {id:"app2",name:"Manu",age:28},
            {id:"app3",name:"Stephine",age:20}
        ],
        isPersonsShow:false,
        otherValue:"some other value",
        toggleClicked:0
    };

    togglePersonsHandler=()=>{
        var shower=this.state.isPersonsShow;
        this.setState((prevState,props)=>{
            return {
                isPersonsShow: !shower,
                toggleClicked :prevState.toggleClicked +1
            }
        }); 
        //this.setState({isPersonsShow:!shower,toggleClicked:this.state.toggleClicked+1});
    }

    valchanger=(event,id)=>{
        let personIndex=this.state.persons.findIndex(p=>p.id===id);
        var persons=[...this.state.persons];
        persons[personIndex].name=event.target.value;
        this.setState({persons:persons});
    }

    deletePersonHandler=(index)=>{
        let persons=[...this.state.persons];
        persons.splice(index,1);
        this.setState({persons:persons});

    }

    render(){
        console.log("[app.js] inside render");

        let persons=null;

        if(this.state.isPersonsShow){
            persons=(
                <Persons 
                    persons={this.state.persons} 
                    clicked={this.deletePersonHandler}
                    changed={this.valchanger}
                />
            );
        }
      
        return(
            <Aux>
                <button onClick={()=>{this.setState({isPersonsShow:true})}}>Show persons</button>
                <Cockpit data={this.state} personShower={this.togglePersonsHandler}/>
                {persons}
            </Aux>
        )
    }
}

export default withClass(App,cls.App);