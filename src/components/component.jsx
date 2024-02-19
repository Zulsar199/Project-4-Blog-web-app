import { useContext } from "react";
import { FirstContext } from "./utils/context";

export const Component = () => {
     const value = useContext(FirstContext);
     console.log(value);
     return(
          <div>
               <p>hello</p>
          </div>
     )
}