import React from "react";

export interface TimeLineProps {
    events: Array<any>
}

export class TimeLine extends React.Component<TimeLineProps, {}> {
    render() {
      return <div className="container mb-5">
                <div className="row justify-content-center">
                <div className="col-xl-10 col-12">
                    <div className="timeline timeline-line-solid">
                        <div className="timeline-label" >
                            <span className="label">Start</span>
                            </div>
                            {
                                this.props.events.map((event) => {
                                    return event
                                })
                            }
                        <span className="timeline-label">
                            <span className="label">End</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
  }
}





