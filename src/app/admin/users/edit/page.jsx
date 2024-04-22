import React from 'react'
import AdminNav from '../../components/AdminNav'
import Footer from '../../components/Footer'
import Container from '../../components/container'
import Link from 'next/link'

function page() {
  return (
    <Container>
      <AdminNav />
      <div className='flex-grow'>
        <div className='container mx-auto shadow-xl my-10 p-10 rounded-xl'>
          <Link href="/admin/users" className='bg-gray-500 inline-block text-white border py-2 px-3 rounded my-2'>Go Back</Link>
          <hr className='my-3' />
          <h3 className='text-xl'>Admin edit user data page</h3>
          <form action="">
            <input type="text" className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-xl my-2' placeholder='User name'  />
            <input type="text" className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-xl my-2' placeholder='Email'  />
            <input type="password" className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-xl my-2' placeholder='Password'  />
            <button type='submit' name='update' className='bg-green-500 text-white border py-2 px-3 rounded text-lg my-2'>Update user</button>
          </form>
        </div>
      </div>
      <Footer />

    </Container>
  )
}

export default page
