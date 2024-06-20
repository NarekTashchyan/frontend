import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required('Please fill Name'),
  surname: yup.string().required('Please fill Surname'),
  salary: yup.number().required('Please fill Salary').typeError('Salary must be a number'),
});

export const AddUser = ({ onAdd }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const handleAdd = (data) => {
        axios
            .post('http://localhost:3004/users', data)
            .then(res => {
                onAdd(res.data);
                toast.success("User added successfully");
                reset();
            })
            .catch(error => {
                toast.error("Failed to add user");
                console.error('Error adding user:', error);
            });
    };

    return (
        <div>
            <h1>Add User</h1>
            <form onSubmit={handleSubmit(handleAdd)}>
                <div>
                    <label>Name</label>
                    <input
                        {...register('name')}
                    />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                </div>
                <div>
                    <label>Surname</label>
                    <input
                        {...register('surname')}
                    />
                    {errors.surname && <p style={{ color: 'red' }}>{errors.surname.message}</p>}
                </div>
                <div>
                    <label>Salary</label>
                    <input
                        {...register('salary')}
                    />
                    {errors.salary && <p style={{ color: 'red' }}>{errors.salary.message}</p>}
                </div>
                <button type="submit">Save</button>
            </form>
            <ToastContainer />
        </div>
    );
};

AddUser.propTypes = {
    onAdd: PropTypes.func.isRequired,
};
