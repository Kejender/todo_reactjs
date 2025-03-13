import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Task from './Task'

test('renders content', () => {
  const task = {
    name: 'Component testing is done with react-testing-library'
  }

  render(<Task key={task.id} task={task}  />)

// showTaskView={showTaskView} setSelectedList={setSelectedList}

  const element = screen.getByText('Component testing is done with react-testing-library')
  expect(element).toBeDefined()
})

test('clicking the button calls event handler once', async () => {
  const task = {
    name: 'Component testing is done with react-testing-library'
  }
  
  const mockHandler = vi.fn()

  render(<Task key={task.id} task={task} editTask={mockHandler}/>)

  const user = userEvent.setup()
  const button = screen.getByText('Component testing is done with react-testing-library')
  await user.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
})