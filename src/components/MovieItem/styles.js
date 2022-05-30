const cardWrapper = { width: '193px' }
const image = { width: '193px', height: '286px' }
const cardTitle = {
  fontSize: '16px',
  color: '#565353',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}

const cardDescription = {
  fontSize: '12px',
  color: '#9f9c9c',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}

const linkStyle = {
  fontSize: '12px',
  color: '#9f9c9c',
  textDecoration: 'none',

  '&:hover': {
    cursor: 'pointer',
    textDecoration: 'underline',
    color: '#000000',
  },
}

export { cardWrapper, image, cardTitle, cardDescription, linkStyle }
