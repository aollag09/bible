import React from "react";

type ErrorFallbackProp = {
    error: Error,
    componentStack: string,
    message: StringConstructor
}

export class ErrorFallback extends React.Component<ErrorFallbackProp> {

    render() {
        return (
            <div className="error-fallback">
                <span className="error">Error</span>
                <span className="error-message"> {this.props.message}</span>
                <span className="error-detail"> {this.props.error.toString()}</span>
            </div>
        )
    };


}
