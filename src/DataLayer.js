import { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext(); //prepares data layer 
export const DataLayer = ({initialState, reducer, children}) => 
( <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
   {children} 
</DataLayerContext.Provider>)

export const useDataLayerValue = () => useContext(DataLayerContext); //using created context


/*basically we are setting up Data layer context provider that we can find in index.js file.
We are using use Reducer hook that that we are feeding with reducer.js in index.js children which 
is APp component in this case. 
*/

