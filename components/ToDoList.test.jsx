import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

test('clicking the button calls event handler once', async () => {
  const todo = {
    name: 'Component testing is done with react-testing-library'
  }
  
  const mockHandler = vi.fn()

  render(<ToDoList key={todo.id} todo={todo} showTaskView={mockHandler}/>)

  const user = userEvent.setup()
  const button = screen.getByText('Component testing is done with react-testing-library')
  await user.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
})