import dynamic from 'next/dynamic'
import Instructions from '@/components/dom/Instructions'
import About from '@/components/Hero/About'
import { Model } from '@/haji'

const App = dynamic(() => import('@/master/SceneMaster'), { ssr: false })

export default function Page(props) {
  return (
    <>
  
    </>
  )
}

Page.canvas = (props) => <App route='/' position-y={-0.75} />

export async function getStaticProps() {
  return { props: { title: 'Blob' } }
}
