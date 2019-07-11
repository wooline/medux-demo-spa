import {HistoryActions, RoutePayload} from '@medux/react-web-router/types/export';
import {RouteConfig, buildTransformRoute} from '@medux/web-route-plan-a';

import {RootState} from 'modules';
import {getHistoryActions} from '@medux/react-web-router';

export const getRouteActions: () => HistoryActions<RootState['route']['data']['params']> = getHistoryActions;
export enum ViewNames {
  'appMain' = 'app.Main',
  'photosList' = 'photos.List',
  'photosDetails' = 'photos.Details',
  'videosList' = 'videos.List',
  'videosDetails' = 'videos.Details',
  'commentsList' = 'comments.List',
  'commentsDetails' = 'comments.Details',
  'messagesList' = 'messages.List',
}

export const routeConfig: RouteConfig = {
  '/': [
    ViewNames.appMain,
    {
      '/photos$': ViewNames.photosList,
      '/photos/:itemId$': [
        ViewNames.photosDetails,
        {
          '/:articleType/:articleId/comments$': ViewNames.commentsList,
          '/:articleType/:articleId/comments/:itemId': ViewNames.commentsDetails,
        },
      ],
      '/videos$': ViewNames.videosList,
      '/videos/:itemId': [
        ViewNames.videosDetails,
        {
          '/:articleType/:articleId$': ViewNames.commentsList,
          '/:articleType/:articleId/:itemId': ViewNames.commentsDetails,
        },
      ],
      '/messages$': ViewNames.messagesList,
    },
  ],
};

export const transformRoute = buildTransformRoute(routeConfig);

export function toUrl(routeData: RoutePayload): string;
export function toUrl(pathname: string, search: string, hash: string): string;
export function toUrl(...args: any[]): string {
  if (args.length === 1) {
    const location = transformRoute.routeToLocation(args[0] as RoutePayload);
    args = [location.pathname, location.search, location.hash];
  }
  const [pathname, search, hash] = args as [string, string, string];
  let url = pathname;
  if (search) {
    url += '?' + search.replace('?', '');
  }
  if (hash) {
    url += '#' + hash.replace('#', '');
  }
  return url;
}
