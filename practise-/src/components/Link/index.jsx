
//rfce

// import React from 'react'

// function Button() {
//   return (
//     <div>Button</div>
//   )
// }

// export default Button


//racfe(arrow function)
// import React from 'react'

// const Button = () => {
//   return (
//     <div>Button</div>
//   )
// }

// export default Button


function Link(props){
    return(
       <a href="https://poki.com/en/g/tunnel-rush" id={props.id}>{props.funcName("Game link")}</a>
    )
}
export default Link