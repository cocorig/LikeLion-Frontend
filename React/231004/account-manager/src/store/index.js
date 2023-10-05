import { configureStore } from '@reduxjs/toolkit';
import expenseSlice from './expense/expense-slice'; // reducer

const store = configureStore({
  // reducer을 등록하는 공간
  reducer : {
    expense : expenseSlice
  }
});
export default store;