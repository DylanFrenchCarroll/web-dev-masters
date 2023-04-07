import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
};

export default function HeaderDropDown({ menuOptions, placeholder }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate();
  const handleMenuSelect = (pageURL) => {
    setAnchorEl(null);
    navigate(pageURL);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 150, mt: 1 }}>
        <Select
          multiple
          displayEmpty
          value={menuOptions}
          input={<OutlinedInput />}
          renderValue={() => {
            return <em style={{ color: "white" }}>{placeholder}</em>;
          }}
          MenuProps={MenuProps}
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
          }}
        >
          {menuOptions.map((opt) => (
            <Button
              disableRipple
              value="nearby"
              key={opt.label}
              color="inherit"
              onClick={() => handleMenuSelect(opt.path)}
            >
              {opt.label}
            </Button>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
