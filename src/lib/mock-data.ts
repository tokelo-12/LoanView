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
