import Card from "../../component/card/bg-board-card/card";
import { useQuery, useQueryClient } from "react-query";
import ListCardRepository from "../../component/card/sm-list-card-repository/card";
import ListCardDevelopers from "../../component/card/sm-list-card-developer/card";
import { useLocation } from "react-router";
import request from "../../api.service/axios.factory";
import { DEVELOPERS } from "../../routes/constant";
import "./home.css";
import { useEffect } from "react";

import { Ideveloper, Ipopular_repository, IqueryReactOption } from "./home.td";
import { getDevelopers, getReposirories } from "../../utility/github";

const Home = ({ match }: any) => {
  const queryCli = useQueryClient();

  const useQueryParams = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQueryParams();

  const apiFunction = async () => {
    const { data } = await request<Ideveloper<Ipopular_repository>[]>(
      "GET",
      match.path.includes(DEVELOPERS)
        ? getDevelopers(match, query)
        : getReposirories(match, query),
      ""
    );
    return data;
  };

  const since = query.get("since");
  const lang = query.get("spoken_language_code");
  const { data, isLoading, isError, isSuccess }: IqueryReactOption = useQuery(
    "dev",
    apiFunction
  );

  useEffect(() => {
    // queryCli.invalidateQueries("dev");
    try {
      const getRouteFromApi = async () => {
        const { data } = await request(
          "GET",
          match.path.includes(DEVELOPERS)
            ? getDevelopers(match, query)
            : getReposirories(match, query),
          ""
        );

        queryCli.setQueryData(["dev"], data);
      };

      getRouteFromApi();
    } catch (err) {
      throw new Error(err);
    }
  }, [match?.url, lang, since]);

  return (
    <>
      <div className="trendings-page">
        <div className="card-wrapper">
          <Card {...match}>
            {/* is loading state from react-query */}
            {isLoading && (
              <div className="loading">
                <section className="on-success-is-loading-state">
                  Loading
                </section>
              </div>
            )}

            {/* on-successful state for repositories from react-query */}
            {isSuccess &&
              !match.path.includes(DEVELOPERS) &&
              data?.map((item: any, index: any) => (
                <ListCardRepository {...item} key={index} />
              ))}

            {/* on-successful state for  developers from react-query */}
            {isSuccess &&
              match.path.includes(DEVELOPERS) &&
              data?.map((item: any, index: any) => (
                <ListCardDevelopers {...item} key={index} />
              ))}

            {isError && (
              <div className="error">
                <div className="error-state">error trying to load data</div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
