import './Footer.css'
import Button from './components/Button'

export default function Footer() {
  return (
    <div className="kido-footer" data-node-id="16:927">
      <p className="kido-footer-discount" data-node-id="16:928">
        50% off
      </p>
      <p className="kido-footer-heading" data-node-id="16:929">
        Black Friday!
      </p>
      <p className="kido-footer-description" data-node-id="16:930">
        This holiday season only, 50% off of all storage, billed annually for 2 years max.
      </p>
      <div className="kido-footer-button" data-node-id="16:931">
        <Button size="s" variant="contained">
          Buy Now
        </Button>
      </div>
    </div>
  )
}

