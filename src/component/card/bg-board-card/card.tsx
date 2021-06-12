import { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "../../dropdown/dropdown";
import { connect } from "react-redux";
import { getEnums } from "../../../page/home/redux/thunk";
import { HOME_ROUTE, DEVELOPERS } from "../../../routes/constant";
import spokenLanguages from "../../../api.service/spoken_languages";
import "./card.css";

const Card = (props: any) => {
  const useQueryParams = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQueryParams();
  useEffect(() => {
    const fetcher = async () => {
      await props?.fetchEnums();
    };
    fetcher();
  }, []);

  return (
    <>
    {/* the big card-component  */}
      <div className="card-container">
        <div className="card-header">
          <nav className="left-flex">
            <Link
              to={HOME_ROUTE}
              className={`${
                !props?.path?.includes(DEVELOPERS)
                  ? "active left link"
                  : "left link"
              }`}
            >
              Repositories
            </Link>
            <Link
              to={DEVELOPERS}
              className={`${
                props?.path?.includes(DEVELOPERS)
                  ? "active right link"
                  : "right link"
              }`}
            >
              Developers
            </Link>
          </nav>
          <div className="dropdown-links">
            {props?.path?.includes(DEVELOPERS) === false && (
              <span>
                <Dropdown
                  type="spoken-lang"
                  headerText="Spoken Language"
                  searchTitle="Select a spoken language"
                  inputPlaceholder="Filter spoken languages"
                  flag="spoken"
                  data={spokenLanguages}
                  withInput={true}
                  proLang={props?.params?.language}
                  boldText={
                    spokenLanguages.filter(
                      (e) => e.urlParam === query.get("spoken_language_code")
                    )[0]?.name || "Any"
                  }
                  spokenLang={
                    query.get("spoken_language_code") !== null
                      ? query.get("spoken_language_code")
                      : "Any"
                  }
                  time={
                    query.get("since") !== null ? query.get("since") : "Any"
                  }
                />
              </span>
            )}

            <span>
              <Dropdown
                isExact={props.isExact}
                params={props.params}
                path={props.path}
                type="pro-lang"
                headerText="Select a language"
                searchTitle="Language"
                inputPlaceholder="Filter languages"
                data={props?.getAllEnums?.allowedProgrammingLanguages}
                proLang={props?.params?.language}
                withInput={true}
                boldText={
                  props?.params?.language ? props?.params?.language : "Any"
                }
                spokenLang={
                  query.get("spoken_language_code") !== null
                    ? query.get("spoken_language_code")
                    : "Any"
                }
                time={query.get("since") !== null ? query.get("since") : "Any"}
              />
            </span>
            <span>
              <Dropdown
                isExact={props.isExact}
                params={props.params}
                path={props.path}
                type="date"
                headerText="Date range"
                searchTitle="Adjust time span"
                inputPlaceholder="hi"
                data={props?.getAllEnums?.allowedDates}
                withInput={false}
                boldText={
                  query.get("since") !== null ? query.get("since") : "Any"
                }
                proLang={props?.params?.language}
                spokenLang={
                  query.get("spoken_language_code") !== null
                    ? query.get("spoken_language_code")
                    : "Any"
                }
                time={query.get("since") !== null ? query.get("since") : "Any"}
              />
            </span>
          </div>
        </div>
        <main className="card-holder-body-wrapper">{props.children}</main>
      </div>
    </>
  );
};


const mapStateToProps = (state: any) => {
  return {
    getAllEnums: state.enumReducer?.enums,
  };
};


// used redux thunk for the api-call here to get enums
const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchEnums: () => dispatch(getEnums()),
  };
};

Card.propTypes = {
  name: PropTypes.string,
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
