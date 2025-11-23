import './Layout.css'
import Button from './components/Button'
import Avatar from './components/Avatar'
import Footer from './Footer'

const sampleImages = [
    'https://picsum.photos/id/1018/800/450',
    'https://picsum.photos/id/1025/800/450',
    'https://picsum.photos/id/103/800/450',
    'https://picsum.photos/id/1043/800/450',
    'https://picsum.photos/id/1050/800/450',
    'https://picsum.photos/id/1062/800/450',
    'https://picsum.photos/id/1069/800/450',
    'https://picsum.photos/id/1074/800/450',
]

function FileCard({ src, title, date, showBadge = false }: { src: string; title: string; date: string; showBadge?: boolean }) {
    return (
        <div className="kido-card">
            <div className="kido-card-header">
                <img src={src} alt={title} className="kido-card-img" />
                {showBadge && <div className="kido-badge">New</div>}
            </div>
            <div className="kido-card-body">
                <div className="kido-file-title">{title}</div>
                <div className="kido-file-meta">{date}</div>
            </div>
        </div>
    )
}

export default function Layout() {
    return (
        <main className="kido-layout" style={{width: "100%"}}>
            <header className="kido-header">
                <div className="kido-search-row">
                    <div className="kido-search-input">
                        <input placeholder="Search in Kido" />
                    </div>
                    <div className="kido-search-action">
                        <Button size="m" variant="contained">Search Now</Button>
                    </div>
                </div>

                <div className="kido-user">
                    <Avatar initials="KS" size={40} />
                    <div className="kido-user-details">
                        <div className="kido-user-name">Kevin Smith</div>
                        <div className="kido-user-sub">Individual</div>
                    </div>
                </div>
            </header>

            <section className="kido-section">
                <h2 className="kido-section-title">Recent uploads</h2>
                <div className="kido-recent-row">
                    {sampleImages.slice(0, 5).map((img, i) => (
                        <FileCard key={i} src={img} title={`File-name.jpg`} date={`Last modified | Nov 19, 2025`} showBadge={true} />
                    ))}
                </div>
            </section>

            <section className="kido-section">
                <h2 className="kido-section-title">Your files</h2>
                <div className="kido-grid">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <FileCard key={i} src={sampleImages[i % sampleImages.length]} title={`Image-file.png`} date={`Last modified | Oct 10, 2023`} />
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    )
}
