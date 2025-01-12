import { TextField } from "@mui/material";

export default function SearchBar({ query, setQuery }) {
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <TextField
      label='Search'
      type='search'
      name='search'
      value={query}
      onChange={handleSearch}
    ></TextField>
  );
}
