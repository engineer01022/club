import React,{Component} from "react";
import Cad from "./Cad";
import cupinfo from "./cupinfo";
class Products extends Component{
    constructor(){
        super();
        this.state={
            cupinfo: cupinfo
        }
    }
    mapping(x){
        const infos =x.map(info=><Cad
            title={info.title}
            discuss={info.discuss}
            img={info.img}
        />)
        return infos
    }
    render(){
        return(
            <div>
{this.mapping(this.state.cupinfo)}</div>
        )
    }
}
export default Products;