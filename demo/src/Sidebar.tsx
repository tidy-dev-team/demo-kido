import './Sidebar.css'
import Button from './components/Button'
import {
  HomeIcon,
  BellIcon,
  Squares2X2Icon,
  UserCircleIcon,
  ShareIcon,
  ClockIcon,
  StarIcon,
  TrashIcon,
  CloudIcon,
} from '@heroicons/react/24/outline'
 

export default function Sidebar() {
  return (
    <aside className="kido-sidebar" role="navigation" aria-label="Main">
      <div className="kido-top">
        <div className="kido-avatar" title="User avatar">AA</div>
        <div className="kido-title">Kido Drive</div>
      </div>

      <div className="kido-controls">
        <Button size="s" variant="contained">+ Create New</Button>

        <ul className="kido-nav" role="menu">
          <li role="menuitem">
            <Button size="s" variant="ghost" iconL={<HomeIcon className="hi-icon" />} active>
              Home
            </Button>
          </li>

          <li role="menuitem">
            <Button size="s" variant="ghost" iconL={<BellIcon className="hi-icon" />}>
              Activity
            </Button>
          </li>

          <li role="menuitem">
            <Button size="s" variant="ghost" iconL={<Squares2X2Icon className="hi-icon" />}>
              Workspaces
            </Button>
          </li>

          <li role="menuitem">
            <Button size="s" variant="ghost" iconL={<UserCircleIcon className="hi-icon" />}>
              My Account
            </Button>
          </li>

          <li role="menuitem">
            <Button size="s" variant="ghost" iconL={<ShareIcon className="hi-icon" />}>
              Shared with me
            </Button>
          </li>

          <li role="menuitem">
            <Button size="s" variant="ghost" iconL={<ClockIcon className="hi-icon" />}>
              Recents
            </Button>
          </li>

          <li role="menuitem">
            <Button size="s" variant="ghost" iconL={<StarIcon className="hi-icon" />}>
              Starred
            </Button>
          </li>

          <li role="menuitem">
            <Button size="s" variant="ghost" iconL={<TrashIcon className="hi-icon" />}>
              Trash
            </Button>
          </li>

          <li role="menuitem">
            <Button size="s" variant="ghost" iconL={<CloudIcon className="hi-icon" />}>
              Storage
            </Button>
          </li>
        </ul>
      </div>
    </aside>
  )
}
