import React from 'react'
import AdminNav from '../../components/AdminNav'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Container from '../../components/Container'

function AdminEditPostPage() {
  return (
    <Container>
      <AdminNav/>
      <div className='flex-grow'>
        <div className='container mx-auto shadow-xl my-10 p-10 rounded-xl'>
          <Link href= "/admin/posts" className='bg-gray-500 inline-block text-white border py-2 px-3 rounded my-2'>Go Back</Link>
          <hr className='my-3'/>
          <h3 className='text-xl'>Admin Edit user post Post</h3>
          <form action="">
            <input type="text" className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-xl my-2' placeholder='Post title' value= "Title Before Update" />
            <input type="text" className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-xl my-2' placeholder='Post Img URl' value = "https://imggurl" />
            <textarea name="" id="" cols="30" rows="10" className='w-[300px] block bg-gray-200 border py-2 px-3 rounded text-xl my-2' placeholder='enter your post content'>
              Content Before Update
            </textarea>
            <button type='submit' name = 'update' className='bg-green-500 text-white border py-2 px-3 rounded text-lg my-2'>Update post</button>
          </form>
        </div>
      </div>
      <Footer/>
    </Container>
  )
}

export default AdminEditPostPage
