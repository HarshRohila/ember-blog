export interface SessionService {
  invalidate(): void
}

export interface NotificationsService {
  success(msg: string): void;
  error(msg: string): void;
}