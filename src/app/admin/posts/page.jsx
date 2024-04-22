import React from 'react'
import AdminNav from '../components/AdminNav'
import Footer from '../components/Footer'
import SideNav from '../components/SideNav'
import Container from '../components/container'
import Link from 'next/link'
import Image from 'next/image'


function UsersPage() {
  return (
    <Container>
      <AdminNav/>
      <div className='flex-grow'>
        <div className='container mx-auto'>
          <div className='flex mt-10'>
            <SideNav/>
            <div className='p-10'>
              <h3 className='text-3xl mb-3'>Manage posts</h3>
              <p>A list of posts retrieved from a MongoDB database</p>
              <div className='shadow-lg overflow-x-auto'>
                <table className='text-left rounded-md mt-3 table-fixed w-full'>
                  <thead>
                    <tr className='bg-gray-400'>
                      <th className='p-5'>PostID</th>
                      <th className='p-5'>Post Title</th>
                      <th className='p-5'>Post Image</th>
                      <th className='p-5'>Post Content</th>
                      <th className='p-5'>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='p-5'>$123456</td>
                      <td className='p-5'>This is post title</td>
                      <td className='p-5'>
                        <Image 
                          className='my-3 rounded-md'
                          src = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          width = {100}
                          height= {100}
                          alt = "post image"
                        />
                      </td>
                      <td className='p-5'>This is post content</td>
                      <td className='p-5'>
                        <Link className='bg-gray-500 text-white border py-2 px-3 rounded text-lg my-2' href= "/admin/posts/edit">Edit</Link>
                        <Link className='bg-red-500 text-white border py-2 px-3 rounded text-lg my-2' href= "/admin/posts/delete">Delete</Link>
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
