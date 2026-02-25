import React, { useState, useEffect } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate, useParams, Link } from 'react-router-dom'

const EmployeeComponent = () => {
    const { id } = useParams();
    const navigator = useNavigate();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    useEffect(() => {
        if(id) {
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])

    function validateForm() {
        let valid = true;
        const errorsCopy = {...errors}

        if(firstName.trim()) {
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First name is required';
            valid = false;
        }

        if(lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last name is required';
            valid = false;
        }

        if(email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required';
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;
    }

    function saveOrUpdateEmployee(e) {
        e.preventDefault();

        if (validateForm()) {
            const employee = { firstName, lastName, email }
            
            if (id) {
                updateEmployee(id, employee).then((response) => {
                    navigator('/employees');
                }).catch(error => {
                    console.error(error);
                })
            } else {
                createEmployee(employee).then((response) => {
                    navigator('/employees');
                }).catch(error => {
                    console.error(error);
                })
            }
        }
    }

  return (
    <div className='max-w-xl mx-auto mt-8 sm:mt-12 mb-16 sm:mb-20 px-4 sm:px-0 relative'>
        <div className="mb-4 sm:mb-6">
            <Link to="/employees" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 text-sm font-medium w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Directory
            </Link>
        </div>

        <div className="glass-panel relative overflow-hidden p-6 sm:p-10 border border-gray-800/80 rounded-2xl shadow-2xl">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="text-center mb-10">
                <h2 className='text-3xl font-bold tracking-tight text-white mb-3'>
                    {id ? 'Update Employee' : 'Add New Employee'}
                </h2>
                <p className="text-gray-400 text-sm">
                    {id ? 'Modify the details of the existing employee.' : 'Enter the details of the new team member.'}
                </p>
            </div>

            <form className="space-y-6">
                <div>
                    <label className='block text-sm font-medium text-gray-300 mb-2'>First Name</label>
                    <input
                        type='text'
                        placeholder='e.g. Jane'
                        name='firstName'
                        value={firstName}
                        className={`input-field ${errors.firstName ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50': ''}`}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    {errors.firstName && (
                        <p className='mt-2 text-sm text-red-400 flex items-center gap-1.5'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.firstName}
                        </p>
                    )}
                </div>

                <div>
                    <label className='block text-sm font-medium text-gray-300 mb-2'>Last Name</label>
                    <input
                        type='text'
                        placeholder='e.g. Doe'
                        name='lastName'
                        value={lastName}
                        className={`input-field ${errors.lastName ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50': ''}`}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    {errors.lastName && (
                        <p className='mt-2 text-sm text-red-400 flex items-center gap-1.5'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.lastName}
                        </p>
                    )}
                </div>

                <div>
                    <label className='block text-sm font-medium text-gray-300 mb-2'>Email Address</label>
                    <input
                        type='email'
                        placeholder='jane.doe@example.com'
                        name='email'
                        value={email}
                        className={`input-field ${errors.email ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50': ''}`}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                        <p className='mt-2 text-sm text-red-400 flex items-center gap-1.5'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.email}
                        </p>
                    )}
                </div>

                <div className="pt-6">
                    <button className='btn-primary w-full py-3.5 text-base shadow-lg shadow-purple-900/40 relative overflow-hidden group' onClick={saveOrUpdateEmployee}>
                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                        {id ? 'Update Team Member' : 'Add Team Member'}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EmployeeComponent