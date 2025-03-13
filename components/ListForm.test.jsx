import { render, screen } from '@testing-library/react'
import ListForm from './ListForm'
import userEvent from '@testing-library/user-event'

test('<NoteForm /> updates parent state and calls onSubmit', async () => {
  const addToDoList = vi.fn()
  const user = userEvent.setup()

  render(<ListForm addToDoList={addToDoList} />)

  const input = screen.getByRole('textbox')
  const sendButton = screen.getByText('Add new ToDo list')

  await user.type(input, 'testing a form...')
  await user.click(sendButton)

//console.log(addToDoList.mock.calls)

  expect(addToDoList.mock.calls).toHaveLength(1)
  expect(addToDoList.mock.calls[0][0]).toBe('testing a form...')
})