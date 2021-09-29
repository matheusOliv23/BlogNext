import Link from 'next/link'
import axios from 'axios'
import useSWR from 'swr'

export default function IndexPage() {
  const fetcher = (...args) => axios.get(args).then(resp => resp)
  const swrClient = useSWR('http://localhost:5000/posts', fetcher)

  console.log(swrClient.data)
  //console.log('testando')

  return (
    <div>
      Hello World.{' '}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  )
}
