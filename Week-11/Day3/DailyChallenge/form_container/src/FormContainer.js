import React, { useState } from 'react';

const FormContainer = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        gender: 'male',
        destination: 'Japan',
        lactoseFree: false,
    });

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const params = new URLSearchParams(formData).toString();
        const url = `http://localhost:3000/?${params}`;
        console.log(url);

        // this URL for further pocessing or redirection if needed.
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input type='text' name='firstName' value={formData.firstName} onChange={handleChange} />
            </label>
            <br />
            <label>
                Last Name:
                <input type='text' name='firstName' value={formData.firstName} onChange={handleChange} />
            </label>
            <br />
            <label>
                Age:
                <input type='text' name='lastName' value={formData.lastName} onChange={handleChange} />
            </label>
            <br />
            <label>
                Gender:
                <select type='gender' value={formData.gender} onChange={handleChange}>
                    <option value="male">Male</option>
                    <option value="female">female</option>
                    <option value="other">Other</option>
                </select>
            </label>
            <br />
            <label>
                Destination:
                <select name="destination" value={formData.destination} onChange={handleChange}>
                    <option value="Japan">Japan</option>
                    <option value="USA">USA</option>
                    <option value="France">France</option>
                </select>
            </label>
            <br />
            <label>
                Lactose Free:
                <input
                    type="checkbox"
                    name="lactoseFree" 
                    checked={formData.lactoseFree}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default FormContainer;