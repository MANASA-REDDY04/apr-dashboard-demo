export type ChartDataset = {
  label: string;
  data: number[];
};

export type ChartData = {
  labels: string[];
  datasets: ChartDataset[];
};