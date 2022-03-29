import { Button } from "@mui/material";
const UIButton = ({ text, onClick }) => {
  return (
    <Button
      sx={{ backgroundColor: "#37D2A9", borderRadius: 4 }}
      size="large"
      variant="contained"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default UIButton;
