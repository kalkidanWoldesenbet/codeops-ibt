import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <section>
          <h2>Menu unavailable</h2>
          <p>
            {this.props.fallback ||
              "Something went wrong while loading the menu."}
          </p>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;