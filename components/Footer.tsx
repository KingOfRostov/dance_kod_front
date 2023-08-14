import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="container">
            <hr />
            <h3 className='main-header-subtext'><span className="text-red">Мы</span> в соцсетях</h3>
            <div className='social-media'>
                <Link key='inst_dance_kod' href='https://instagram.com/dance_kod_official?igshid=MmIzYWVlNDQ5Yg=='>
                    <Image
                        src="/inst.png"
                        width={50}
                        height={50}
                        alt="Инстаграм instagram Dance KOD"
                    />
                </Link>
                <h3 className='main-header-subtext'>

                    <span className='social-media-hashtag'>
                        @dance_kod_official
                    </span>
                </h3>‌
            </div>
            <hr />
            Created by &copy;KingOfRostov
        </footer>
    )
}

export { Footer };