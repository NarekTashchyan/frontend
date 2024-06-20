import { useState } from "react"

export const AddUser = ({ onAdd }) => {

    const [user, setUser] = useState({ name: '', surname: '', login: '', password: '' })
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        setSuccess('')

        const mail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        if (!user.name.trim()) {
            return setError('Name is required')
        }
        setError('')
        if (!user.surname.trim()) {
            return setError('Surname is required')
        }
        setError('')
        if (!user.login.trim()) {
            return setError('Login is required')
        }
        setError('')
        if (!user.password.trim()) {
            return setError('Password is required')
        }
        setError('')
        if (!mail.test(user.login)) {
            return setError('Login is Incorrect')
        }
        setError('')
        if(user.password.length < 6) {
            return setError('Password must be at least 6 characters')
        }
        onAdd(user)
        setUser({ name: '', surname: '', login: '', password: '' })
        setError('')
        setSuccess('Successfully')
    }

    return <div>
        <h3>Add User</h3>
        <form onSubmit={handleSubmit}>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}

            <input
                placeholder="Name"
                value={user.name}
                onChange={e => setUser({ ...user, name: e.target.value })}
            />
            <input
                placeholder="Surname"
                value={user.surname}
                onChange={e => setUser({ ...user, surname: e.target.value })}
            />
            <input
                placeholder="Login"
                value={user.login}
                onChange={e => setUser({ ...user, login: e.target.value })}
            />
            <input
                placeholder="Password"
                value={user.password}
                onChange={e => setUser({ ...user, password: e.target.value })}
            />
            <button type="submit">Add User</button>
        </form>
    </div>
}
