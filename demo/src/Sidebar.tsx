import './Sidebar.css'
import Button from './components/Button'
import Avatar from './components/Avatar'
import Footer from './Footer'
import * as Icons from '@heroicons/react/24/outline'

const H = Icons as any

export default function Sidebar() {
  return (
    <aside className="kido-sidebar" role="navigation" aria-label="Main">
      <div className="kido-top">
        <Avatar initials="KS" size={32} />
        <div className="kido-title">Kido Drive</div>
      </div>

      <div className="kido-controls">
        <Button size="s" variant="contained">+ Create New</Button>

        <ul className="kido-nav" role="menu">
          <li role="menuitem">
            <Button size="s" variant="ghost" iconL={<H.HomeIcon className="hi-icon" />} active>Home</Button>
          </li>

          <li role="menuitem">
            <Button size="s" variant="ghost" iconL={<H.BellIcon className="hi-icon" />}>Activity</Button>
          </li>

          <li role="menuitem">
            <Button size="s" variant="ghost" iconL={<H.Squares2X2Icon className="hi-icon" />}>Workspaces</Button>
          </li>

          <li role="menuitem">
            <Button size="s" variant="ghost" iconL={<H.UserCircleIcon className="hi-icon" />}>My Account</Button>
          </li>

          <li role="menuitem">
            <Button size="s" variant="ghost" iconL={<H.ShareIcon className="hi-icon" />}>Shared with me</Button>
          </li>

          <li role="menuitem">
            <Button size="s" variant="ghost" iconL={<H.ClockIcon className="hi-icon" />}>Recents</Button>
          </li>

          <li role="menuitem">
            <Button size="s" variant="ghost" iconL={<H.StarIcon className="hi-icon" />}>Starred</Button>
          </li>

          <li role="menuitem">
            <Button size="s" variant="ghost" iconL={<H.TrashIcon className="hi-icon" />}>Trash</Button>
          </li>

          <li role="menuitem">
            <Button size="s" variant="ghost" iconL={<H.CloudIcon className="hi-icon" />}>Storage</Button>
          </li>
        </ul>
      </div>

      <div className="kido-bottom" data-node-id="16:555">
        <Footer />
      </div>
    </aside>
  )
}
