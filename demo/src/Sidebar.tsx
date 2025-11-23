import './Sidebar.css'
import Button from './components/Button'
import Avatar from './components/Avatar'
import * as Icons from '@heroicons/react/24/outline'
import type { SVGProps } from 'react'

const H = Icons as any

const SettingsIcon = (H.Cog6ToothIcon ?? H.Cog8ToothIcon ?? H.CogIcon ?? ((props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 0 1 2.28 17.9l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09c.7 0 1.28-.4 1.51-1a1.65 1.65 0 0 0-.33-1.82L4.31 6.76A2 2 0 0 1 7.14 3.93l.06.06c.5.4 1.13.6 1.82.33.6-.24 1.28-.24 1.88 0 .69.27 1.32.07 1.82-.33l.06-.06A2 2 0 0 1 16.86 5.2l-.06.06c-.4.5-.6 1.13-.33 1.82.24.6.24 1.28 0 1.88-.27.69-.07 1.32.33 1.82l.06.06c.86.86.86 2.28 0 3.14l-.06.06c-.4.5-.6 1.13-.33 1.82z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
))) as any

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

      <div className="kido-bottom" data-node-id="18:805">
        <div className="kido-footer-wrapper" data-node-id="18:824">
          <div className="kido-footer" data-node-id="18:825">
            <p className="kido-footer-discount" data-node-id="18:826">
              50% off
            </p>
            <p className="kido-footer-heading" data-node-id="18:827">
              Black Friday!
            </p>
            <p className="kido-footer-description" data-node-id="18:828">
              This holiday season only, 50% off of all storage, billed annually for 2 years max.
            </p>
            <div className="kido-footer-button" data-node-id="18:829">
              <Button size="s" variant="contained">
                Buy Now
              </Button>
            </div>
          </div>
        </div>

        <ul className="kido-nav kido-nav-bottom" role="menu">
          <li role="menuitem">
            <Button size="s" variant="ghost" iconL={<SettingsIcon className="hi-icon" aria-hidden />}>Settings</Button>
          </li>
        </ul>

        <div className="kido-storage" data-node-id="18:807">
          <div className="kido-storage-head" data-node-id="18:808">
            <div className="kido-storage-title" data-node-id="18:809">Your Storage</div>
            <div className="kido-storage-meta" data-node-id="18:810">6.11GB/ 10GB used</div>
          </div>

          <div className="kido-storage-bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={61} data-node-id="18:811">
            {
              // Use a segmented track to match Figma (7 segments, partial fill supported)
            }
            {(() => {
              const used = 6.11
              const total = 10
              const pct = Math.round((used / total) * 1000) / 10 // 61.1
              const segments = 7
              const perSeg = 100 / segments
              const full = Math.floor(pct / perSeg)
              const remainder = Math.max(0, Math.min(100, ((pct - full * perSeg) / perSeg) * 100))

              return Array.from({ length: segments }).map((_, i) => {
                const segFill = i < full ? 100 : (i === full ? remainder : 0)
                return (
                  <div className="kido-storage-seg" key={i} aria-hidden>
                    <div className="kido-storage-seg-fill" style={{ width: `${segFill}%` }} />
                  </div>
                )
              })
            })()}
          </div>
        </div>
      </div>
    </aside>
  )
}
