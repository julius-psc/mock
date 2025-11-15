import DashboardLayout from '@/app/components/dashboard/DashboardLayout';
import FinancierView from '@/app/components/dashboard/projects/views/FinancierView';

export default function FinancierPage() {
  return (
    <DashboardLayout>
      <FinancierView />
    </DashboardLayout>
  );
}
