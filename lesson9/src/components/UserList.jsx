import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UserList = ({ users, onDelete, onUpSalary }) => {
    const handleDelete = (id) => {
        onDelete(id);
        toast.success('User deleted successfully');
    };

    const handleUpSalary = (data) => {
        onUpSalary(data);
        toast.success('User salary increased successfully');
    };

    return (
        <div>
            <h1>User List</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>surname</th>
                        <th>salary</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id} className={Number(user.salary) > 800000 ? 'bigSalary' : 'normal'}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.salary}</td>
                            <td>
                                <button onClick={() => onDelete(user.id)}>-</button>
                                <button onClick={() => onUpSalary(user.id)}>increase salary</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ToastContainer />
        </div>
    );
};

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            surname: PropTypes.string.isRequired,
            salary: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
    onUpSalary: PropTypes.func.isRequired,
};