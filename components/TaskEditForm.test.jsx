import { render, screen } from '@testing-library/react'
import TaskEditForm from './TaskEditForm'
import userEvent from '@testing-library/user-event'

test('<TaskEditForm /> updates parent state and calls onSubmit', async () => {
  const updateTask = vi.fn()
  const user = userEvent.setup()

  render(<TaskEditForm updateTask={updateTask} />)

  const input = screen.getByRole('textbox')
  const sendButton = screen.getByText('Update')

  await user.type(input, 'New ToDo item description')
  await user.click(sendButton)

//console.log(addToDoList.mock.calls)

  expect(updateTask.mock.calls).toHaveLength(1)
  //expect(addToDoList.mock.calls[0][0]).toBe('testing a form...')
})