import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Head from './head'

const Dummy = () => {
  const { user: username } = useParams()
  return (
    <div>
      <Head title="Hello" />
      {/* eslint-disable-next-line react/button-has-type */}
      <Link to="/dashboard"><button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Go to root</button></Link>
      {/* eslint-disable-next-line react/button-has-type */}
      <Link to="/dashboard/main"><button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Go to main</button></Link>
      <div id="title">Profile</div>
      <div id="username">{username}</div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
