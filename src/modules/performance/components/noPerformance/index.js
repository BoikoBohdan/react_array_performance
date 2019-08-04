import { connect } from "react-redux";
import { view } from "./view";
import { Actions } from "../../actions";

const mapStateToProps = ({ performance }) => ({
  comments: performance.noPerformance.comments
});

const mapDispatchToProps = {
  checkComment: Actions.handle.check
};

export const NoPerformance = connect(
  mapStateToProps,
  mapDispatchToProps
)(view);
