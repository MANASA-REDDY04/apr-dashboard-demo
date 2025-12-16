import { ReactNode } from "react";
import { Card } from "../../../../components/ui/Card";

type ChartContainerProps = {
  title: string;
  children: ReactNode;
  isLoading?: boolean;
};

export function ChartContainer({
  title,
  children,
  isLoading,
}: ChartContainerProps) {
  return (
    <Card className="h-[360px]">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-medium text-neutral-700">{title}</h3>
      </div>

      {isLoading ? (
        <div className="h-full animate-pulse rounded-md bg-neutral-100" />
      ) : (
        <div className="h-[300px]">{children}</div>
      )}
    </Card>
  );
}