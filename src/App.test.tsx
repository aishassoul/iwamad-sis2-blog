
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { AuthProvider } from './context/AuthContext'
import App from './App'

function renderApp(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MemoryRouter>,
  )
}

describe('Blog application', () => {
  it('displays all five blog posts', () => {
    renderApp('/posts')

    expect(
      screen.getByRole('heading', { name: 'How to Build Better Habits' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'My Guide to Student Productivity' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Learning Something New Every Day' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Finding Inspiration in Everyday Life' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Setting Goals That Feel Realistic' }),
    ).toBeInTheDocument()
  })

  it('shows a message when a post does not exist', () => {
    renderApp('/posts/999')

    expect(screen.getByText(/post not found/i)).toBeInTheDocument()
  })

  it('shows a custom 404 page for an unknown route', () => {
    renderApp('/banana')

    expect(screen.getByText(/page not found/i)).toBeInTheDocument()
  })

  it('keeps likes independent for each post', async () => {
    const { default: userEvent } = await import('@testing-library/user-event')

    const user = userEvent.setup()
    renderApp('/posts')

    const firstLike = screen.getByRole('button', {
      name: 'Like How to Build Better Habits',
    })
    const secondLike = screen.getByRole('button', {
      name: 'Like My Guide to Student Productivity',
    })

    await user.click(firstLike)
    await user.click(firstLike)
    await user.click(secondLike)

    expect(firstLike).toHaveTextContent('2')
    expect(secondLike).toHaveTextContent('1')
  })

  it('protects the page and allows access after signing in', async () => {
    const { default: userEvent } = await import('@testing-library/user-event')

    const user = userEvent.setup()
    renderApp('/protected')

    expect(
      screen.getByRole('heading', { name: /sign in/i }),
    ).toBeInTheDocument()

    await user.click(
      screen.getByRole('button', { name: /sign in and continue/i }),
    )

    expect(
      screen.getByText(/you made it/i),
    ).toBeInTheDocument()

    await user.click(
      screen.getByRole('button', { name: /sign out/i }),
    )

    expect(
      screen.getByRole('heading', { name: /sign in/i }),
    ).toBeInTheDocument()
  })

})
