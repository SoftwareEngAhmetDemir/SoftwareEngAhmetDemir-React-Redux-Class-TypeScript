const initialState = { count: 0 };

export type ACTIONTYPE =
   { type: "Inc" ,payload:number};


  export interface myState {
    count:number,
    
    
}

export function reducer(state:myState= initialState, action: ACTIONTYPE):myState{
  switch (action.type) {
    case "Inc":
      return { count: state.count + action.payload};
   
    default:
        return state;
  }
}
