import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logoPng from '../public/React-icon.svg.png'
import logoSvg, { ReactComponent as LogoSvg } from '../public/vercel.svg'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Import SVG</h1>
        <code>{JSON.stringify(logoSvg)}</code>
        img: <img src={logoSvg.src} alt="logoSvg" />
        Image: <Image src={logoSvg} alt="logoSvg" />
        Component: <LogoSvg className="logo" stroke="#EAAA90" strokeWidth="1rem" />
      </div>
      <div>
        <h1>Import PNG</h1>
        <code>{JSON.stringify(logoPng)}</code>
        img: <img src={logoPng.src} alt="logoPng" />
        Image: <Image src={logoPng} alt="logoPng" />
      </div>
    </div>
  )
}

export default Home
