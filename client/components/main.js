import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dummy = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title">Main</div>
      {/* eslint-disable-next-line react/button-has-type */}
      <Link to="/dashboard/profile/7ffsg-8trhfg-54bhhg-b70c-egfjiykjvF"><button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Go to profile</button></Link>
      {/* eslint-disable-next-line react/button-has-type */}
      <Link to="/dashboard"><button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Go to root</button></Link>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
