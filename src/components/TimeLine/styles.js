
import Paper from '@mui/material/Paper';
import { styled } from '@mui/styles'


const StyledTimeLine = styled(Paper)({
  height: "auto",
  padding: "6px 17px",
})

// Title
export const Title = styled("h4")({
  fontSize: "22px"
})

// Date

export const Date = styled("span")((
  {
    theme: {
      palette: { primary }
    }
  }) => ({
    color: primary
  }
))

// Name
export const Name = styled("h6")({
  fontSize: "14px",
  margin: "0px",
  padding: "8px 0px"
})

// Content
export const Content = styled("h6")({
  fontSize: "14px",
  margin: "0px",
  padding: "8px 0px"

})
export default StyledTimeLine