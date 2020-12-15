import React,{ Component} from 'react';

const Mycontext = React.createContext();
class Myprovider extends Component {
    state = { 
        data:this.props.user
     }
    render() { 
        return ( 
        <div>
         <Mycontext.Provider value={this.state.data}>

          {this.props.children}
         </Mycontext.Provider>
        </div> 
        );
    }
}
 
export default Myprovider;