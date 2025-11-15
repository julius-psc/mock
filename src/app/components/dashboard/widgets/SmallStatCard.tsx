import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface SmallStatCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  iconColor?: string;
}

export default function SmallStatCard({
  icon: Icon,
  title,
  value,
  iconColor = 'border-red-600 text-red-600'
}: SmallStatCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-lg border ${iconColor}`}>
            <Icon className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-white/60 mb-1">{title}</p>
            <p className="text-2xl font-bold text-white">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
