import React from 'react'
import './Avatar.css'

type AvatarSizeNumeric = number
type AvatarShape = 'circle' | 'rounded' | 'square'

interface AvatarProps {
  initials?: string
  imageUrl?: string
  size?: AvatarSizeNumeric | '24' | '32' | '40' | '52' | '64'
  shape?: AvatarShape
  alt?: string
  type?: 'picture' | 'initials'
}

export default function Avatar({
  initials = 'AA',
  imageUrl,
  size = 32,
  shape = 'circle',
  alt = 'Avatar',
  type = 'initials',
}: AvatarProps) {
  // if size is one of the string tokens, map to numeric px values
  const numericSize = typeof size === 'number' ? size : size === '24' ? 24 : size === '32' ? 32 : size === '40' ? 40 : size === '52' ? 52 : 64

  const style: React.CSSProperties = {
    width: numericSize,
    height: numericSize,
    borderRadius: shape === 'circle' ? '50%' : shape === 'rounded' ? '8px' : '2px',
  }

  const showImage = type === 'picture' && imageUrl

  return (
    <div className="kido-avatar-root" style={style} title={alt}>
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imageUrl} alt={alt} style={style} />
      ) : (
        <span className="kido-avatar-initials" style={{ fontSize: Math.round(numericSize / 2.5) }}>{(initials || '?').slice(0,2).toUpperCase()}</span>
      )}
    </div>
  )
}