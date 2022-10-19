import React from "react";
import { DotColorsEnum, TextColor, TextPosition, TimeLineItemPosition, TimeLineItemTimePositionEnum } from "./TimeLineTypes";

export interface DotEventProps {
    position: TimeLineItemPosition
    text: string,
    date: string,
    datePosition: TimeLineItemTimePositionEnum,
    dotColor: DotColorsEnum,
    textColor: TextColor,
    textPosition: TextPosition
}

export class DotEvent extends React.Component<DotEventProps, {}> {
    render() {
      return <div className={this.props.position}>
                <div className={this.props.dotColor}></div>
                <div className="timeline-event">
                    <div className={this.props.textPosition}>
                        <p className={this.props.textColor}>
                        {this.props.text}
                        </p>
                    </div>
                    <div className={this.props.datePosition}>{this.props.date}</div>
                </div>
            </div>
  }
}