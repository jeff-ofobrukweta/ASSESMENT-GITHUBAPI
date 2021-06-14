import { useLocation } from "react-router";
import { getTruncatedText } from "../../../utility/stringMgt";
import Button from "../../button/button";
import "./card.css";

const ListCardRepository = (props: any) => {
  const useQueryParams = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQueryParams();
  return (
    <>
      <div className="repo-mini-card">
        <div className="section-top-layer">
          <a target="_blank" rel="noreferrer" href={props?.url}>
            <h1 className="condensed-header-main-wrapper">
              <span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  data-view-component="true"
                  height="16"
                  width="16"
                  className="repo-octicon octicon-repo mr-1 color-text-secondary"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                  ></path>
                </svg>
              </span>
              <span data-view-component="true" className="text-normal">
                {getTruncatedText(props?.username, 15)}/
              </span>
              <span>{getTruncatedText(props?.repositoryName, 15)}</span>
            </h1>
          </a>

          <div className="float-right">
            <div className="d-block-btn-inner-main">
              <Button customClass="btn btn-sm">
                {/* star icon in btn */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  data-view-component="true"
                  height="16"
                  width="16"
                  className="repo-octicon octicon-star mr-0 mr-md-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                  ></path>
                </svg>
                {/* star icon ends here */}

                <span data-view-component="true" className="d-none d-md-inline">
                  Star
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div className="footer-main-card-mt-2">
          <span className="right-footer">
            {props?.language && (
              <span className="d-inline-block">{props?.language}</span>
            )}
            <span className="Link--muted d-inline-block">
              <svg
                aria-label="star"
                role="img"
                viewBox="0 0 16 16"
                version="1.1"
                data-view-component="true"
                height="16"
                width="16"
                className="repo-octicon octicon-star"
              >
                <path
                  fillRule="evenodd"
                  d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                ></path>
              </svg>
              <span className="Link-muted-inner-txt">{props?.totalStars}</span>
            </span>

            <span className="Link--muted d-inline-block">
              <svg
                aria-label="fork"
                role="img"
                viewBox="0 0 16 16"
                version="1.1"
                data-view-component="true"
                height="16"
                width="16"
                className="repo-octicon octicon-repo-forked"
              >
                <path
                  fillRule="evenodd"
                  d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                ></path>
              </svg>
              <span className="Link-muted-inner-txt">{props?.forks}</span>
            </span>
            <span className="collaborator-d-inline-block d-inline-block">
              <span className="collaboration-built-by d-img-inline-block">
                Built by
              </span>
              {props?.builtBy?.map((item: any, index: any) => {
                return (
                  <a
                    key={index}
                    title={item?.username}
                    href={item?.url}
                    className="d-img-inline-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="avatar avatar-user"
                      src={item?.avatar}
                      width="20"
                      height="20"
                      alt={item?.username}
                    />
                  </a>
                );
              })}
            </span>
          </span>

          <span
            data-view-component="true"
            className="d-inline-block float-sm-right"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              data-view-component="true"
              height="16"
              width="16"
              className="repo-octicon octicon-star"
            >
              <path
                fillRule="evenodd"
                d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
              ></path>
            </svg>
            <span className="star-today">
              {props?.starsSince} stars{" "}
              {query.get("since") === "daily"
                ? "today"
                : query.get("since") === "weekly"
                ? "this week"
                : query.get("since") === "monthly"
                ? "ths month"
                : "today"}
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default ListCardRepository;
