import {RouteConfig, ToUrl} from '@medux/react-web-router/types/export';
import {toUrl as baseToUrl, getHistoryActions, setRouteConfig} from '@medux/react-web-router';

import {ModuleNames} from 'modules/names';
import {RootState} from 'modules';
import {defaultRouteParams as comments} from 'modules/comments/meta';
import {createBrowserHistory} from 'history';
import {defaultRouteParams as messages} from 'modules/messages/meta';
import {defaultRouteParams as photos} from 'modules/photos/meta';
import {defaultRouteParams as videos} from 'modules/videos/meta';

export const history = createBrowserHistory();
export const historyActions = getHistoryActions<RootState['route']['data']['params']>();

const defaultRouteParams: {[K in ModuleNames]: any} = {
  app: null,
  photos,
  videos,
  messages,
  comments,
};
setRouteConfig({defaultRouteParams});

export enum ViewNames {
  'appMain' = 'app.Main',
  'photosList' = 'photos.List',
  'photosDetails' = 'photos.Details',
  'videosList' = 'videos.List',
  'videosDetails' = 'videos.Details',
  'commentsMain' = 'comments.Main',
  'commentsList' = 'comments.List',
  'commentsDetails' = 'comments.Details',
  'messagesList' = 'messages.List',
}

export const routeConfig: RouteConfig = {
  '/': [
    ViewNames.appMain,
    {
      '/photos': ViewNames.photosList,
      '/photos/:itemId': [
        ViewNames.photosDetails,
        {
          '/:articleType/:articleId/comments': [
            ViewNames.commentsMain,
            {
              '/:articleType/:articleId/comments': ViewNames.commentsList,
              '/:articleType/:articleId/comments/:itemId': ViewNames.commentsDetails,
            },
          ],
        },
      ],
      '/videos': ViewNames.videosList,
      '/videos/:itemId': [
        ViewNames.videosDetails,
        {
          '/:articleType/:articleId/comments': [
            ViewNames.commentsMain,
            {
              '/:articleType/:articleId/comments': ViewNames.commentsList,
              '/:articleType/:articleId/comments/:itemId': ViewNames.commentsDetails,
            },
          ],
        },
      ],
      '/messages': ViewNames.messagesList,
    },
  ],
};

export const toUrl: ToUrl<RootState['route']['data']['params']> = baseToUrl;
