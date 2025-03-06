import { render, screen } from '@testing-library/react'
import ToDoList from './ToDoList'

test('renders content', () => {
  const todo = {
    name: 'Component testing is done with react-testing-library'
  }

  render(<ToDoList key={todo.id} todo={todo}  />)

// showTaskView={showTaskView} setSelectedList={setSelectedList}

  const element = screen.getByText('Component testing is done with react-testing-library')
  expect(element).toBeDefined()
})