const colorFont = { color: '#9f9c9c' }

const listContainer = {
  display: 'flex',
  justifyContent: 'end',
  border: '1px solid #cccccc',
  padding: '15px',
  marginTop: '15px',
  borderRadius: '4px',
}

const menuListStyle = {
  listStyleType: 'none',
  display: 'flex',
  alignItems: 'center',
  '& > li': {
    margin: '0 10px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}

const border = { borderLeft: '1xp solid #cccccc' }

const movieContentWrapper = {
  display: 'flex',
}

const storyLineContent = {
  width: '100%',
  marginLeft: '16px',
  border: '1px solid #cccccc',
  borderRadius: '4px',
}

const imageWrapper = {
  '& > img': {
    verticalAlign: 'bottom',
  },
}

const categoriesStyle = {
  marginTop: '16px',

  '& > div': {
    margin: '0 5px',
  },
}

const contentFontStyle = { fontSize: '16px', color: '#9f9c9c' }
const informationStyle = { mt: 1, display: 'flex', alignItems: 'center' }

export {
  colorFont,
  menuListStyle,
  listContainer,
  border,
  movieContentWrapper,
  storyLineContent,
  imageWrapper,
  categoriesStyle,
  contentFontStyle,
  informationStyle,
}
