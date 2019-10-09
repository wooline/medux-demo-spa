export type CommonErrorCode = 'unknown' | 'notFound' | '401' | '301';

export interface ErrorEntity<Detail = any> {
  code: string;
  message?: string;
  detail?: Detail;
}

export class CustomError<Detail = any> {
  public constructor(public code: string, public message?: string, public detail?: Detail) {}
}

export class RedirectError extends CustomError {
  public constructor(url: string) {
    super('301', '跳转中', url);
  }
}
export class UnauthorizedError extends CustomError {
  public constructor() {
    super('401', '请登录');
  }
}
export interface CurUser {
  uid: string;
  username: string;
  hasLogin: boolean;
  avatarUrl: string;
}
export interface LoginRequest {
  username: string;
  password: string;
}
export type LoginResponse = CurUser;
export interface BaseListSummary {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}
export interface BaseListSearch {
  page: number;
  pageSize: number;
}
export interface BaseListItem {
  id: string;
}
