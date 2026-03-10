export interface ITelemetry {
  id: string;
  assetId: string;
  cpuName: string;
  cpuTotalUsagePercent: number;
  cpuPerCoreUsage: number[];
  cpuFrequency: number;
  cpuTemperature: number | null;
  memoryTotal: number;
  memoryAvailable: number;
  memoryUsed: number;
  memoryUsagePercent: number;
  batteryPercent: number | null;
  batteryPowerPlugged: boolean;
  batterySecondsLeft: number | null;
  timestamp: Date;
}

export type ITelemetryCreate = Omit<ITelemetry, "id">;
