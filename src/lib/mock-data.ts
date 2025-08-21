
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
  category: 'compulsory' | 'voluntary' | 'pension' | 'emergency' | 'security' | 'group' | 'capitalShare';
};

export type UserSavings = {
  balance: {
    total: number;
    compulsory: number;
    voluntary: number;
    pension: number;
    emergency: number;
    security: number;
    group: number;
    capitalShare: number;
  };
  monthlyGoal: number;
  emergencyContribution: number;
  securityContribution: number;
  groupContribution: number;
  capitalShareContribution: number;
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
    total: 11020.50,
    compulsory: 5000.00,
    voluntary: 2200.50,
    pension: 2000.00,
    emergency: 770.00,
    security: 50.00,
    group: 500.00,
    capitalShare: 500.00,
  },
  monthlyGoal: 10000,
  emergencyContribution: 10,
  securityContribution: 50,
  groupContribution: 500,
  capitalShareContribution: 500,
  transactions: [
    { id: 'TRN-011', date: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(), description: 'New Member Capital Share', amount: 500, type: 'deposit', category: 'capitalShare' },
    { id: 'TRN-001', date: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString(), description: 'Monthly Savings', amount: 2500, type: 'deposit', category: 'compulsory' },
    { id: 'TRN-010', date: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString(), description: 'Group Contribution', amount: 500, type: 'deposit', category: 'group' },
    { id: 'TRN-009', date: new Date(new Date().setDate(new Date().getDate() - 3)).toISOString(), description: 'Security Contribution', amount: 50, type: 'deposit', category: 'security' },
    { id: 'TRN-005', date: new Date(new Date().setDate(new Date().getDate() - 5)).toISOString(), description: 'Pension Contribution', amount: 1000, type: 'deposit', category: 'pension' },
    { id: 'TRN-007', date: new Date(new Date().setDate(new Date().getDate() - 7)).toISOString(), description: 'Emergency Fund', amount: 10, type: 'deposit', category: 'emergency' },
    { id: 'TRN-002', date: new Date(new Date().setDate(new Date().getDate() - 10)).toISOString(), description: 'Emergency Withdrawal', amount: 500, type: 'withdrawal', category: 'voluntary' },
    { id: 'TRN-003', date: new Date(new Date().setDate(new Date().getDate() - 15)).toISOString(), description: 'Paycheck Deposit', amount: 2700.50, type: 'deposit', category: 'voluntary' },
    { id: 'TRN-004', date: new Date(new Date().setDate(new Date().getDate() - 20)).toISOString(), description: 'Monthly Savings', amount: 2500, type: 'deposit', category: 'compulsory' },
    { id: 'TRN-006', date: new Date(new Date().setDate(new Date().getDate() - 25)).toISOString(), description: 'Pension Contribution', amount: 1000, type: 'deposit', category: 'pension' },
    { id: 'TRN-008', date: new Date(new Date().setDate(new Date().getDate() - 27)).toISOString(), description: 'Emergency Fund', amount: 760, type: 'deposit', category: 'emergency' },
  ],
};
