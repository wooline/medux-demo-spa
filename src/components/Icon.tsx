import React, {HTMLAttributes} from 'react';

// Attention: This file is generated by "npm run gen-icon", do not modify

// prettier-ignore
export enum IconClass {LIVE = "icon-live",
MESSAGE = "icon-message",
PICTURE = "icon-picture",
PLAY_CIRCLE = "icon-play-circle",
RELOAD = "icon-reload",
LOCATION = "icon-location",
HEART = "icon-heart",}

interface Props extends HTMLAttributes<HTMLSpanElement> {
  type: IconClass;
  text?: string;
  textPosition?: 'left' | 'right';
}

export default class Component extends React.PureComponent<Props> {
  public render() {
    const {type, text, textPosition, className, ...restProps} = this.props;
    if (text) {
      if (textPosition === 'left') {
        return (
          <div className={`iconfont-with-text-on-left ${className ? className : ''}`} {...restProps}>
            <span>{text}</span>
            <i className={`iconfont ${type}`} {...restProps} />
          </div>
        );
      } else {
        return (
          <div className={`iconfont-with-text-on-right ${className ? className : ''}`} {...restProps}>
            <i className={`iconfont ${type}`} {...restProps} />
            <span>{text}</span>
          </div>
        );
      }
    } else {
      return <i className={`iconfont ${type} ${className ? className : ''}`} {...restProps} />;
    }
  }
}
