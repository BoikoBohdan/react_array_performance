import { connect } from "react-redux";
import { performance } from "./actions";
import { performanceSaga } from "./saga";
import { Actions } from "./actions";
import { view } from "./view";

const mapStateToProps = state => {
  return { commentsIds: state.performance.performance.commentsIds };
};

const mapDispatchToProps = {
  getUsers: Actions.handle.load.trigger
};

const WithPerformance = connect(
  mapStateToProps,
  mapDispatchToProps
)(view);

export { performance, WithPerformance, performanceSaga };
