export type LoanApplication = {
  id: string;
  amount: number;
  status: 'Approved' | 'Rejected' | 'Pending';
};

export type UserLoan = {
  outstandingBalance: number;
  applications: LoanApplication[];
};

export type AdminLoanView = {
  id: string;
  applicantName: string;
  amount: number;
  outstandingBalance: number;
  status: 'Approved' | 'Rejected' | 'Pending';
};

export type SavingsTransaction = {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'deposit' | 'withdrawal';
  category: 'compulsory' | 'voluntary';
};

export type UserSavings = {
  balance: {
    total: number;
    compulsory: number;
    voluntary: number;
  };
  monthlyGoal: number;
  transactions: SavingsTransaction[];
};

export const userLoanData: UserLoan = {
  outstandingBalance: 12530.75,
  applications: [
    { id: 'APP-1024', amount: 15000, status: 'Approved' },
    { id: 'APP-987', amount: 5000, status: 'Rejected' },
  ],
};

export const allLoansData: AdminLoanView[] = [
  { id: 'LN-001', applicantName: 'Alice Johnson', amount: 15000, outstandingBalance: 12530.75, status: 'Approved' },
  { id: 'LN-002', applicantName: 'Bob Williams', amount: 25000, outstandingBalance: 25000.00, status: 'Pending' },
  { id: 'LN-003', applicantName: 'Charlie Brown', amount: 8000, outstandingBalance: 0, status: 'Rejected' },
  { id: 'LN-004', applicantName: 'Diana Miller', amount: 50000, outstandingBalance: 45200.10, status: 'Approved' },
  { id: 'LN-005', applicantName: 'Ethan Davis', amount: 12000, outstandingBalance: 12000.00, status: 'Pending' },
  { id: 'LN-006', applicantName: 'Fiona Garcia', amount: 3000, outstandingBalance: 0.00, status: 'Approved' },
];

export const userSavingsData: UserSavings = {
  balance: {
    total: 7200.50,
    compulsory: 5000.00,
    voluntary: 2200.50
  },
  monthlyGoal: 10000,
  transactions: [
    { id: 'TRN-001', date: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString(), description: 'Monthly Savings', amount: 2500, type: 'deposit', category: 'compulsory' },
    { id: 'TRN-002', date: new Date(new Date().setDate(new Date().getDate() - 10)).toISOString(), description: 'Emergency Withdrawal', amount: 500, type: 'withdrawal', category: 'voluntary' },
    { id: 'TRN-003', date: new Date(new Date().setDate(new Date().getDate() - 15)).toISOString(), description: 'Paycheck Deposit', amount: 2700.50, type: 'deposit', category: 'voluntary' },
    { id: 'TRN-004', date: new Date(new Date().setDate(new Date().getDate() - 20)).toISOString(), description: 'Monthly Savings', amount: 2500, type: 'deposit', category: 'compulsory' },
  ],
};
