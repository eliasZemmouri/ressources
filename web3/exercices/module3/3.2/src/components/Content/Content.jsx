import Part from "components/Part/Part";

const Content = (props)=>{
    return(
      <div>
        {props.parts.map(part=><Part key={part.id} part={part.name} exercises={part.exercises}></Part>)}
      </div>
    )
  }

  
  export default Content;