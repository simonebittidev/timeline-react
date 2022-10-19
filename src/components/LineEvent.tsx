import React from "react";
import {v4 as uuid} from "uuid";
import { DotColorsEnum, TextColor, TimeLineItemPosition, TimeLineItemTimePositionEnum } from "./TimeLineTypes";


export enum LineEventLineTypeEnum  {
    Dot = "dotline",
    Standard = "",
}

export interface LineEventProps {
    position: TimeLineItemPosition
    text: string,
    date: string,
    datePosition: TimeLineItemTimePositionEnum,
    lineType: LineEventLineTypeEnum,
    dotColor: DotColorsEnum,
    textColor: TextColor,
    lineColor:TextColor,
    showOffcanvas:boolean
}

export class LineEvent extends React.Component<LineEventProps, {}> {

    render() {
        let myuuid = uuid();

      return <div className={this.props.position}>
              <div className={this.props.dotColor}></div>
              <div className="timeline-event">
                      <div className="widget-body">
                        {
                            this.props.showOffcanvas ? (
                                <>
                                    <a href='#' className="text-decoration-none text-danger" type="button" data-bs-toggle="offcanvas" data-bs-target={"#" + myuuid.toString()} aria-controls={myuuid.toString()}>
                                        {this.props.text}
                                        <hr className={this.props.lineType + " " + this.props.lineColor} />
                                    </a>
                                </>
                              ) : (
                                <>
                                    <p className={this.props.textColor}>Dialog {this.props.text}</p>
                                    <hr className={this.props.lineType + " " + this.props.lineColor} />
                                </>
                              )
                        }
                    </div>
              <div className={this.props.datePosition}>{this.props.date}</div>

          </div>  

          <div className="offcanvas offcanvas-end" id={myuuid.toString()} aria-labelledby={"offcanvas"+ myuuid.toString() + "label"}>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id={"offcanvas"+ myuuid.toString() + "label"}>{this.props.text}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <p>Type: {this.props.text}</p>
                        <p>Message: {this.props.text}</p>
                        <p>Method: {this.props.text}</p>
                    </div>
                </div>
            </div>

        </div>   
  }
}