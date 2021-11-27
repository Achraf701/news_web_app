import { CardStyled } from "./Styles/Card.styled"

export default function Card ({ item : {id , title  , body , image} } ){

return(
    <CardStyled  layout = {id % 2 ===0 ? 'row-reverse' :'row' }>
       {/* //!!first div of titele and body */}
       <div>
        <h2>{title}</h2>
        <p>{body}</p>
        </div>     
      
       {/* //!!first div image   */}
       <div>
        <img src = {`./images/${image}`} alt = '' />
        </div>     
    </CardStyled>
)
}