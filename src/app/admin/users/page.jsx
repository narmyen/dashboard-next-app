import React from 'react'
import AdminNav from '../components/AdminNav'
import Footer from '../components/Footer'
import SideNav from '../components/SideNav'
import Container from '../components/container'
import Link from 'next/link'


function UsersPage() {
  return (
    <Container>
      <AdminNav/>
      <div className='flex-grow'>
        <div className='container mx-auto'>
          <div className='flex mt-10'>
            <SideNav/>
            <div className='p-10'>
              <h3 className='text-3xl mb-3'>Manage User</h3>
              <p>A list of users retrieved from a MongoDB database</p>
              <div className='shadow-lg overflow-x-auto'>
                <table className='text-left rounded-md mt-3 table-fixed w-full'>
                  <thead>
                    <tr className='bg-gray-400'>
                      <th className='p-5'>ID</th>
                      <th className='p-5'>Username</th>
                      <th className='p-5'>Email</th>
                      <th className='p-5'>Password</th>
                      <th className='p-5'>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='p-5'>$2345678</td>
                      <td className='p-5'>narmyen</td>
                      <td className='p-5'>tip@gmail.com</td>
                      <td className='p-5'>1q2w3e4r</td>
                      <td className='p-5'>
                        <Link className='bg-gray-500 text-white border py-2 px-3 rounded text-lg my-2' href= "/admin/users/edit">Edit</Link>
                        <Link className='bg-red-500 text-white border py-2 px-3 rounded text-lg my-2' href= "/admin/users/delete">Delete</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </Container>
  )
}

export default UsersPage
