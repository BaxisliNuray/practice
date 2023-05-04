import Button from "./Button"
function App() {

  let listItems = ['listitem1', 'listitem2', 'listitem3']

  return (
   <>
    <section style={{backgroundColor:'lightgreen', padding:'20px'}}>
      <h1 tabIndex={5} style={{ backgroundColor: '#eee',fontFamily: "fantasy"  }} >Heading</h1>
      <ul tabIndex={1}>
        {listItems.map((listItem, idx) => (
          <li key={idx}>
            {listItem}
          </li>
        ))}
      </ul>
      <input tabIndex={3} type="text" id="1" />
      <label tabIndex={2} htmlFor="1">click</label>
    </section>
   
    <Button text="button with key:text" variant="red" id={1}/> 
    <Button text="button with key:text" variant="green" id={2}/> 
    <Button text="button with key:text" variant="yellow" id={3}/> 
    <Button text="button with key:text"  id={4}/> 

    
    </>
  )
}
export default App