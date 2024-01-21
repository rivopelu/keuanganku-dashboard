import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Close, Search } from "@mui/icons-material";

export function InputSearch() {
  return (
    <div>
      <TextField
        size={"small"}
        placeholder={"search name"}
        sx={{ background: "white" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="start">
              <IconButton sx={{ width: 26, height: 26 }}>
                <Close fontSize={"small"} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
