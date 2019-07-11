import './index.less';

import {DispatchProp, connect} from 'react-redux';
import {ListItem, ListSearch, ListSummary} from 'entity/message';
import {RootState, actions} from 'modules';

import {ModuleNames} from 'modules/names';
import {Pagination} from 'antd-mobile';
import React from 'react';
import Search from 'components/Search';

interface StateProps {
  showSearch: boolean;
  listSearch: ListSearch | undefined;
  listItems: ListItem[] | undefined;
  listSummary: ListSummary | undefined;
}

class Component extends React.PureComponent<StateProps & DispatchProp> {
  private onPageChange = (page: number) => {
    console.log(page);
    // const listSearch = {...this.props.listSearch, page};
    // const search = stringifyQuery('search', listSearch, defaultListSearch);
    // historyActions.push(toUrl('/messages', search));
  };

  private onSearch = (title: string) => {
    console.log(title);
    // const listSearch = {...this.props.listSearch, title, page: 1};
    // const search = stringifyQuery('search', listSearch, defaultListSearch);
    // historyActions.push(toUrl('/messages', search));
  };

  private onSearchClose = () => {
    this.props.dispatch(actions.app.putShowSearch(false));
    if (this.props.listSearch!.title) {
      this.onSearch('');
    }
  };

  public render() {
    const {showSearch, listSearch, listItems, listSummary} = this.props;

    if (listItems && listSearch) {
      return (
        <div className={`${ModuleNames.messages}-List`}>
          <Search value={listSearch.title} onClose={this.onSearchClose} onSearch={this.onSearch} visible={showSearch} />
          <div className="list-items">
            {listItems.map(item => (
              <div key={item.id}>
                <div className="author">{item.author}</div>
                <div className="date">{item.date.toUTCString()}</div>
                <div className="content">{item.content}</div>
              </div>
            ))}
          </div>
          {listSummary && (
            <div className="g-pagination">
              <Pagination current={listSummary.page} total={listSummary.totalPages} onChange={this.onPageChange} />
            </div>
          )}
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps: (state: RootState) => StateProps = state => {
  const model = state.messages!;
  return {
    showSearch: Boolean(state.app!.showSearch),
    listSearch: model.listSearch,
    listItems: model.listItems,
    listSummary: model.listSummary,
  };
};

export default connect(mapStateToProps)(Component);
