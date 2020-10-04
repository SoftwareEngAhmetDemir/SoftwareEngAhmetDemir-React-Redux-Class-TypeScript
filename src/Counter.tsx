import { stat } from 'fs';
import { connect } from 'react-redux'
import * as React from 'react';
import { myState,ACTIONTYPE } from './Reducer';

export interface IAppProps {
  count:number,
  
  Inc:(x:number)=>void,
 
}

export interface IAppState {
 
}

class Counter extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
       countA:0
    }
   
  }
 
  public render() {
  
    return (
      <div>
 
<div>
A:  {this.props.count}
<button onClick={()=>this.props.Inc(9)}>+A</button>
</div>




      </div>
    );
  }
}
interface RootState {
    count:number
    
  }
  
  function mapState (state: RootState)  {
   return { 
     
       count:state.count,
      
  }
}
  const mapDispatch=(dispatch:React.Dispatch<ACTIONTYPE>) => {
   return { Inc: (x:number) => dispatch({ type: 'Inc' ,payload:x}),
  }
  }

export default connect(mapState,mapDispatch)(Counter);