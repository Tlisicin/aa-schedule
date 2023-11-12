import $ from 'jquery';
import React from 'react';

class GroupItem extends React.Component {
    componentDidMount() {
        $(function () {
            $('.test span').css('border', '2px solid blue');
        });
    }

    render() {
        return (
            <div className="glItem test">
                Item 1<span>2</span>
            </div>
        );
    }
}



export default GroupItem;
