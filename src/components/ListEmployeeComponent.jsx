import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { listEmployees, deleteEmployee } from '../services/EmployeeService'

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee() {
        navigator('/add-employee')
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id) {
        console.log(id);
        deleteEmployee(id).then((response) => {
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        })
    }
  
  return (
    <div className='max-w-6xl mx-auto mt-6 px-4 sm:px-6 lg:px-8'>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
        <div>
            <h2 className='text-3xl font-bold tracking-tight text-white mb-2'>Team Directory</h2>
            <p className="text-gray-400 text-sm sm:text-base">Manage your employees, roles, and access.</p>
        </div>
        <button className='btn-primary flex justify-center items-center gap-2 w-full sm:w-auto' onClick={addNewEmployee}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add Employee
        </button>
      </div>

      <div className="glass-panel overflow-hidden p-0 border border-gray-800/60 rounded-xl relative shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        <div className="overflow-x-auto w-full">
            <table className='w-full text-left border-collapse min-w-[600px] sm:min-w-full'>
            <thead>
                <tr className="bg-gray-900/80 border-b border-gray-800 text-gray-400 text-xs sm:text-sm uppercase tracking-wider font-semibold">
                <th className="px-4 sm:px-6 py-4 sm:py-5">Id</th>
                <th className="px-4 sm:px-6 py-4 sm:py-5">First Name</th>
                <th className="px-4 sm:px-6 py-4 sm:py-5">Last Name</th>
                <th className="px-4 sm:px-6 py-4 sm:py-5">Email ID</th>
                <th className="px-4 sm:px-6 py-4 sm:py-5 text-right">Actions</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60">
                {employees.map(employee =>
                <tr key={employee.id} className="hover:bg-gray-800/40 transition-colors duration-200 group text-sm sm:text-base">
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-300">
                        <span className="bg-gray-800/80 text-xs px-2 py-1 sm:px-2.5 sm:py-1 rounded-md text-gray-400 font-mono border border-gray-700/50 group-hover:border-purple-500/30 transition-colors">#{employee.id}</span>
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                        <div className="font-medium text-gray-200 group-hover:text-purple-300 transition-colors">{employee.firstName}</div>
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-300">{employee.lastName}</td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-400">
                        <div className="flex items-center gap-2">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 hidden md:block shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                           </svg>
                           <span className="truncate max-w-[120px] sm:max-w-none">{employee.email}</span>
                        </div>
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-right">
                        <div className="flex justify-end gap-2 lg:gap-3 opacity-100 sm:opacity-90 sm:group-hover:opacity-100 transition-opacity">
                            <button className='btn-info text-xs px-2.5 py-1.5 flex items-center gap-1.5' onClick={() => updateEmployee(employee.id)} title="Edit">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                                <span className="hidden lg:inline">Edit</span>
                            </button>
                            <button className='btn-danger text-xs px-2.5 py-1.5 flex items-center gap-1.5' onClick={() => removeEmployee(employee.id)} title="Delete">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                <span className="hidden lg:inline">Delete</span>
                            </button>
                        </div>
                    </td>
                </tr>
                )}
                {employees.length === 0 && (
                    <tr>
                        <td colSpan="5" className="px-6 py-16 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-4 border border-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <p className="text-gray-400 font-medium text-lg mb-1">No employees found</p>
                                <p className="text-gray-500 text-sm">Add a new employee to start building your directory.</p>
                            </div>
                        </td>
                    </tr>
                )}
            </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default ListEmployeeComponent