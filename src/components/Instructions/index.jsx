import styles from "./Instructions.module.css";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { gamesActions } from "../../store/features/gamesSlice";
import UIButton from "../ui/UIButton";

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
      <div className={styles.instructionsSelect}>
        <div>
          <h2>2. Select {amount} games:</h2>
          <h3>
            {length} of {amount} selected
          </h3>
        </div>
        {amount === length && (
          <Link to="/selected">
            <UIButton text="SUBMIT GAMES" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Instructions;
