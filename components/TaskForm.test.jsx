import { render, screen } from '@testing-library/react'
import TaskForm from './TaskForm'
import userEvent from '@testing-library/user-event'

test('<TaskForm /> updates parent state and calls onSubmit', async () => {
  const addTask = vi.fn()
  const user = userEvent.setup()

  const { container } = render(<TaskForm addTask={addTask} />)

  //const inputs = screen.getAllByRole('textbox')

  const input1 = container.querySelector('#taskname')
  const input2 = container.querySelector('#taskdescription')

  const sendButton = screen.getByText('Add task')

  await user.type(input1, 'testing a form input 1...')
  await user.type(input2, 'testing a form input 2...')
  await user.click(sendButton)

  console.log('TaskForm mock calls', addTask.mock.calls)

  expect(addTask.mock.calls).toHaveLength(1)
  expect(addTask.mock.calls[0][0]).toBe('testing a form input 1...')
  expect(addTask.mock.calls[0][1]).toBe('testing a form input 2...')
})