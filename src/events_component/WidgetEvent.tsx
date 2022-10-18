import React from "react";
import { DotColorsEnum, TextColor, TimeLineItemPosition, TimeLineItemTimePositionEnum } from "../types/TimeLineTypes";

export interface WidgetEventProps {
    position: TimeLineItemPosition
    text: string,
    date: string,
    datePosition: TimeLineItemTimePositionEnum,
    dotColor: DotColorsEnum,
    textColor: TextColor
}

export class WidgetEvent extends React.Component<WidgetEventProps, {}> {
    render() {
      return <div className={this.props.position}>
                <div className={this.props.dotColor}></div>
                <div className="timeline-event">
                    <div className="widget">
                        <div className="widget-body">
                            <p className={this.props.textColor}>
                            {this.props.text}
                            </p>
                        </div>
                    </div>
                    <div className={this.props.datePosition}>{this.props.date}</div>
                </div>
            </div>
  }
}