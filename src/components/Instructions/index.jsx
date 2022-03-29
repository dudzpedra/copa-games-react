import styles from './Instructions.module.css'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { gamesActions } from "../../store/features/gamesSlice";

const Instructions = () => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.games.amount);
  const length = useSelector((state) => state.games.selectedGames.length);
  const handleChange = ({ target }) =>
    dispatch(gamesActions.setAmount(target.value));
  return (
    <div className={styles.container}>
      <h2>1. Select the amount of games:</h2>
      <FormControl sx={{ width: 150 }} required>
        <InputLabel id="amount-select-label">Amount</InputLabel>
        <Select
          labelId="amount-select-label"
          id="amount-select"
          value={amount}
          label="Amount"
          onChange={handleChange}
        >
          <MenuItem value={4}>4 Games</MenuItem>
          <MenuItem value={8}>8 Games</MenuItem>
        </Select>
      </FormControl>
      <h2>2. Select {amount} games:</h2>
      <h3>
        {length} of {amount} selected
      </h3>
      {amount === length && (
        <Link to="/selected">
          <Button variant="outlined">SUBMIT GAMES</Button>
        </Link>
      )}
    </div>
  );
};

export default Instructions;
