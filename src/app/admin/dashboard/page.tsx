import { allLoansData } from '@/lib/mock-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { StatusBadge } from '@/components/status-badge';

export default function AdminDashboardPage() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>All Loan Applications</CardTitle>
        <CardDescription>A comprehensive list of all loan applications in the system.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">ID</TableHead>
                <TableHead>Applicant</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-right hidden md:table-cell">Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allLoansData.map((loan) => (
                <TableRow key={loan.id}>
                  <TableCell className="hidden sm:table-cell font-medium">{loan.id}</TableCell>
                  <TableCell className="font-medium">{loan.applicantName}</TableCell>
                  <TableCell>
                    <StatusBadge status={loan.status} />
                  </TableCell>
                  <TableCell className="text-right">{formatCurrency(loan.amount)}</TableCell>
                  <TableCell className="text-right hidden md:table-cell">{formatCurrency(loan.outstandingBalance)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
