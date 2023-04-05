import * as React from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'



const TenureSelect = ({data, setData}) => {
  const [age, setAge] = React.useState('')
  const handleChange = (event) => {
    setAge(event.target.value)
  };

  return (
    <FormControl fullWidth>
      <InputLabel id='demo-simple-select-label'>Tenure</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={age}
        label='Tenure'
        onChange={handleChange}
      >
        <MenuItem value={5}>5 Years</MenuItem>
        <MenuItem value={10}>10 Years</MenuItem>
        <MenuItem value={15}>15 Years</MenuItem>
        <MenuItem value={20}>20 Years</MenuItem>
        <MenuItem value={25}>25 Years</MenuItem>
      </Select>
    </FormControl>
  )
}

export default TenureSelect