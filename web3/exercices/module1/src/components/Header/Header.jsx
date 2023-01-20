import creed from "images/creed2.jpeg"
const Header = (props)=>{
    return(
      <div>
        <img src={creed}></img>
        <h1> {props.course}</h1>
      </div>
    )
}

export default Header;

