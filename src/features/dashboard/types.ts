// types.ts
export type Transaction = {
    id: number;
    title: string;
    amount: number;
    date: string;
    type: 'income' | 'expense';
  };
  
  export type UserData = {
    name: string;
    balance: number;
    income: number;
    expenses: number;
    transactions: Transaction[];
  };
  