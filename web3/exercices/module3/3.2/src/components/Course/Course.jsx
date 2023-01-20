import Header from "components/Header/Header"
import Content from "components/Content/Content"

const Course = (props)=>{

    return(   
     <div>
        <Header course={props.course.name}> </Header>
        <Content parts={props.course.parts}></Content>
     </div>
    )
}

export default Course;