import React from 'react';
import './ListLabel.scss';
class ListLabel extends React.Component {
    state = {
        itemsCount: 9,
    }

    render() {
        return (
            <div className="list-label">
                <span className='list-label__title'>
                    {this.state.itemsCount} {this.props.labelTxt}
                </span>
                <div className="list-label__btn-container">
                    {this.props.labelBtnContent}
                </div>
            </div>
        );
    }
}
export default ListLabel;
