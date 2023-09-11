

function HelloProps({name, age, someFunc, someArr, someObj}) {
  const {one , two} = someObj

  return (
    <>
      <p>my name is {name} and age is {age}</p>
      <strong>you are {someFunc()}</strong>
      <p>this is someArr {[...someArr]}</p>
      <p>this is someObj {one} , {two}</p>

    </>
  )
}

export default HelloProps;