import { connect } from "react-redux";
import { view } from "./view";
import { Actions } from "../../actions";

const mapStateToProps = ({ performance }, { id }) => {
  //   console.log(id, "id");
  return { comment: performance.performance.comments[id] };
};

const mapDispatchToProps = {
  checkComment: Actions.handle.checkPerformance
};

export const Performance = connect(
  mapStateToProps,
  mapDispatchToProps
)(view);
