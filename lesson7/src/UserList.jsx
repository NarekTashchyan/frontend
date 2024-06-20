import { AddUser } from "./AddUser"
export const UserList = ({users}) => {
    return <div>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>surname</th>
                    <th>mail</th>
                </tr>
                
            </thead>
            <tbody>
                {
                    users.map(user => <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                        <td>{user.login}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}