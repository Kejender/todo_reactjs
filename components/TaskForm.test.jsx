import { render, screen } from '@testing-library/react'
import TaskForm from './TaskForm'
import userEvent from '@testing-library/user-event'

test('<TaskForm /> updates parent state and calls onSubmit', async () => {
  const addTask = vi.fn()
  const user = userEvent.setup()

  render(<TaskForm addTask={addTask} />)

  const inputs = screen.getAllByRole('textbox')
  const sendButton = screen.getByText('Add task')

  await user.type(inputs[0], 'testing a form input 1...')
  await user.type(inputs[1], 'testing a form input 2...')
  await user.click(sendButton)

//console.log(addToDoList.mock.calls)

  expect(addTask.mock.calls).toHaveLength(1)
  expect(addTask.mock.calls[0][0]).toBe('testing a form input 1...')
})