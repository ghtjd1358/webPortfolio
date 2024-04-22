import '../assets/css/header.css'



export default function Header(){
    return(
        <>
            <div id="header">
                <div className="container">
                    <div className="header-icon">
                        <h1>HOSEONG.s</h1>
                    </div>
                    <div>
                            <ul className="header-nav">
                                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"><img src="/git.png" alt="github" /></a></li>
                                <li><a href="https://example.com" target="_blank" rel="noopener noreferrer"><img src="/mail.png" alt="github" /></a></li>
                                <li><a href="https://notion.so" target="_blank" rel="noopener noreferrer"><img src="/blog.png" alt="github" /></a></li>
                            </ul>
                        </div>
                </div>
            </div>
        </>
    )
}