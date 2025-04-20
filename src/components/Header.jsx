
export default function Header (props) {
    const {todos} = props
    
    const counter = (todos) => {
        let count1 = 0
        for(let i=0;i<todos.length;i++){
          todos[i].tab=='open' &&  count1++;
    }
      return count1
    }

    const todosLength = counter(todos);
    return (
        <header>
            <h1>Here are your tasks</h1>
        </header>
    )
}