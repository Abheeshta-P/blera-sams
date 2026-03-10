export enum AlertType {
  NORMAL,
  WARNING,
  CRITICAL,
  ERROR,
}

export interface IAlert {
  id: string;
  assetId: string;
  type: AlertType;
  message: string;
  isResolved: boolean;
  createdAt: Date;
  updatedAt: Date;
}
