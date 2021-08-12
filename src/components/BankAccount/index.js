import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {bindActionCreators} from 'redux';
import { actionCreators } from '../../state';

export const BankAccount = () => {
  const [money, setMoney] = useState('');
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { depositActionCreator, withdrawActionCreator } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleDeposit = () => {
    depositActionCreator(money);
    setMoney('');
  };
  const handleWithdraw = () => {
    withdrawActionCreator({ balance: account.balance, amount: money });
    setMoney('');
  };
  return (
    <div>
      <h1>Bank Account</h1>
      <p>Balance: {account.balance}</p>
      <p>Message: {account.message}</p>
      <p>Enter amount:</p>
      <input
        value={money}
        placeholder="amount to deposit or withdraw"
        onChange={(e) => setMoney(e.target.value)}
      />
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};